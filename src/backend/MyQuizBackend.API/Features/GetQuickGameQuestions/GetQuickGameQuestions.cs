using FluentValidation;
using MediatR;
using MyQuizBackend.Domain.Entities;
using MyQuizBackend.Infrastructure.Helpers;

namespace MyQuizBackend.API.Features.GetQuickGameQuestions
{
    public class GetQuickGameQuestions : IRequest<ResponseHelper<List<Question>>>
    {
        public List<int>? CategoriesId { get; set; }
        public int NumberOfQuestions { get; set; }
    }

    public class GetQuickGameQuestionsValidator : AbstractValidator<GetQuickGameQuestions>
    {
        public GetQuickGameQuestionsValidator()
        {
            RuleFor(q => q.NumberOfQuestions).GreaterThan(0).WithMessage("Deve ter selecionado pelo menos uma questão!");
        }
    }
}
