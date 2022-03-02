using FluentValidation;
using MediatR;
using MyQuizBackend.Infrastructure.Helpers;
using MyQuizBackend.Infrastructure.Models;

namespace MyQuizBackend.API.Features.AddQuestions
{
    public class AddQuestions : IRequest<ResponseHelper>
    {
        public string Question { get; set; } = "";
        public bool HasHint { get; set; }
        public string Hint { get; set; } = "";
        public List<AnswerDTO> Answers { get; set; } = new List<AnswerDTO>();
        public bool HasExplanation { get; set; }
        public string Explanation { get; set; } = "";
    }

    public class AddQuestionsValidator : AbstractValidator<AddQuestions>
    {
        public AddQuestionsValidator()
        {
            RuleFor(q => q.Question).NotEmpty().WithMessage("Pergunta não pode estar vazia");

            When(q => q.HasHint == true, () =>
            {
                RuleFor(q => q.Hint).NotEmpty().WithMessage("Se definiu que tem ajuda, deve definir a ajuda");
            });

            RuleFor(q => q.Answers)
                .NotNull().WithMessage("Deve ter selecionado respostas!")
                .NotEmpty().WithMessage("Deve ter selecionado respostas!");

            RuleFor(q => q.Answers)
                .Must(a => a.Any(i => i.IsRight == true)).WithMessage("Pelo menos uma das respostas deve estar certa!");

            When(q => q.HasExplanation == true, () =>
            {
                RuleFor(q => q.Explanation).NotEmpty().WithMessage("Se definiu que tem explicação, deve definir a explicação");
            });
        }
    }
}
