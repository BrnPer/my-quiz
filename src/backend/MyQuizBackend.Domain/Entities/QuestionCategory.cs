namespace MyQuizBackend.Domain.Entities
{
    public class QuestionCategory
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public Question Question { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
