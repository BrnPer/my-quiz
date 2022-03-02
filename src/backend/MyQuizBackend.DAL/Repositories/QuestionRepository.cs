using Microsoft.EntityFrameworkCore;
using MyQuizBackend.Domain.Entities;
using MyQuizBackend.Domain.Repositories;

namespace MyQuizBackend.DAL.Repositories
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly ApplicationDbContext _context;
        public QuestionRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Question> Add(Question question)
        {
            await _context.Questions.AddAsync(question);
            await _context.SaveChangesAsync();

            return question;
        }

        public async Task<List<Question>> GetRandomQuestions(int numberOfQuestions)
        {
            return await _context.Questions.OrderBy(r => Guid.NewGuid()).Take(numberOfQuestions).ToListAsync();
        }
    }
}
