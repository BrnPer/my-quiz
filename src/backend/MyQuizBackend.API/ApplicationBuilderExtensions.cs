namespace MyQuizBackend.API
{
    public static class ApplicationBuilderExtensions
    {
        public static IApplicationBuilder UseSpaApp(this IApplicationBuilder app, string startingPath)
        {
            return app.Use(async (context, next) =>
            {
                await next();
                var path = context.Request.Path.Value;

                //Se o path estiver vazio ou for para ver o index.html
                //E se não for para obter a API, o swagger ou algum outro ficheiro
                if (path == null || path == startingPath || (!path.StartsWith("/api") && !Path.HasExtension(path) && !path.StartsWith("/swagger") && !path.StartsWith("/notificationHub")))
                {
                    //Redirecionamos para o HTML
                    context.Request.Path = startingPath;
                    await next();
                }
            });
        }
    }
}
