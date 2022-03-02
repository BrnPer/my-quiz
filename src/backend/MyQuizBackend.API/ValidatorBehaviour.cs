using FluentValidation;
using FluentValidation.Results;
using MediatR;
using MyQuizBackend.Infrastructure.Helpers;

namespace MyQuizBackend.API
{
    public class ValidatorBehaviour<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
        where TRequest : IRequest<TResponse> where TResponse : ResponseHelper, new()
    {
        private readonly IEnumerable<IValidator> _validators;
        public ValidatorBehaviour(IEnumerable<IValidator<TRequest>> validators)
        {
            _validators = validators;
        }
        public async Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken, RequestHandlerDelegate<TResponse> next)
        {
            if (_validators.Any() == false) return await next();

            var context = new ValidationContext<TRequest>(request);

            var failures = _validators
               .Select(v => v.Validate(context))
               .SelectMany(result => result.Errors)
               .Where(f => f != null)
               .ToList();

            if (failures.Any() == false) return await next();

            var errors = await Errors(failures);
            return errors;
        }

        private static Task<TResponse> Errors(IEnumerable<ValidationFailure> failures)
        {
            TResponse response = new();
            var failure = failures.FirstOrDefault();
            response.Success = false;
            response.Message = failure!.ErrorMessage;

            return Task.FromResult<TResponse>(response);
        }
    }
}
