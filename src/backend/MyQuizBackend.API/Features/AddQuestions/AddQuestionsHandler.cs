using MediatR;
using MyQuizBackend.Domain.Entities;
using MyQuizBackend.Domain.Repositories;
using MyQuizBackend.Infrastructure.Helpers;

namespace MyQuizBackend.API.Features.AddQuestions
{
    public class AddQuestionsHandler : IRequestHandler<AddQuestions, ResponseHelper>
    {
        private readonly IQuestionRepository _questionRepository;

        public AddQuestionsHandler(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }

        public async Task<ResponseHelper> Handle(AddQuestions request, CancellationToken cancellationToken)
        {
            ResponseHelper responseHelper = new();
            Question question = new();

            question.Text = request.Question;
            question.Answers = request.Answers.Select(a => new Answer()
            {
                IsCorrect = a.IsRight,
                Text = a.Text,
            }).ToList();
            question.HasHint = request.HasHint;
            question.Hint = request.Hint;
            question.Explanation = request.Explanation;
            question.HasExplanation = request.HasExplanation;

            question = await _questionRepository.Add(question);
            responseHelper.Success = true;
            return responseHelper;
        }
    }
}
