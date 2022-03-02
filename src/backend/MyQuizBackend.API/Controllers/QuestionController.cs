using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyQuizBackend.API.Features.AddQuestions;
using MyQuizBackend.API.Features.GetQuickGameQuestions;
using MyQuizBackend.Domain.Entities;
using MyQuizBackend.Infrastructure.Helpers;

namespace MyQuizBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionController : ControllerBase
    {
        private readonly IMediator _mediator;
        public QuestionController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("quickGame")]
        public async Task<ResponseHelper<List<Question>>> GetQuickGamesQuestions(GetQuickGameQuestions quickGameQuestions)
        {
            return await _mediator.Send(quickGameQuestions);
        }

        [HttpPost("add")]
        public async Task<ResponseHelper> AddQuestion(AddQuestions questions)
        {
            return await _mediator.Send(questions);
        }
    }
}
