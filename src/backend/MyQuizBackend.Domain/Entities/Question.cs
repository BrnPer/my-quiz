namespace MyQuizBackend.Domain.Entities
{
    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; } = "";
        public bool HasHint { get; set; }
        public string? Hint { get; set; }

        public bool HasExplanation { get; set; }
        public string? Explanation { get; set; }

        public virtual List<QuestionCategory>? QuestionCategories { get; set; }
        public virtual List<Answer> Answers { get; set; }

        public Question()
        {
        }
    }
}
