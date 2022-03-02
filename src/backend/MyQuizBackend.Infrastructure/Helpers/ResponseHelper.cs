namespace MyQuizBackend.Infrastructure.Helpers
{
    public class ResponseHelper
    {
        public bool Success { get; set; }
        public string? Message { get; set; }
    }

    public class ResponseHelper<T> : ResponseHelper
    {
        public T Obj { get; set; }
    }
}
