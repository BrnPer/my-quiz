using MediatR;
using MyQuizBackend.Domain.Entities;
using MyQuizBackend.Domain.Repositories;
using MyQuizBackend.Infrastructure.Helpers;

namespace MyQuizBackend.API.Features.GetQuickGameQuestions
{
    public class GetQuickGameQuestionsHandler : IRequestHandler<GetQuickGameQuestions, ResponseHelper<List<Question>>>
    {
        private readonly IQuestionRepository _questionRepository;
        public GetQuickGameQuestionsHandler(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }
        public async Task<ResponseHelper<List<Question>>> Handle(GetQuickGameQuestions request, CancellationToken cancellationToken)
        {
            ResponseHelper<List<Question>> responseHelper = new();
            responseHelper.Obj = await _questionRepository.GetRandomQuestions(request.NumberOfQuestions);
            return responseHelper;
        }
    }
}
