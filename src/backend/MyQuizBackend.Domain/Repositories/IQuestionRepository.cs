using MyQuizBackend.Domain.Entities;

namespace MyQuizBackend.Domain.Repositories
{
    public interface IQuestionRepository
    {
        Task<List<Question>> GetRandomQuestions(int numberOfQuestions);
        Task<Question> Add(Question question);
    }
}
