using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyQuizBackend.DAL;
using MyQuizBackend.DAL.Repositories;
using MyQuizBackend.Domain.Repositories;
using System.Reflection;

namespace MyQuizBackend.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            Configuration = configuration;

            //Para ser possível atualizar as settings em runtime
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();

                builder.WithOrigins("http://localhost:3000", "https://localhost:3000")
                       .AllowAnyMethod()
                       .AllowAnyHeader()
                       .AllowCredentials();
            }));

            services.AddMvc().AddSessionStateTempDataProvider();

            services.AddDbContext<ApplicationDbContext>(options =>
           options.UseMySQL(
               Configuration.GetConnectionString("DefaultConnection")));

            var domainAssembly = typeof(Startup).GetTypeInfo().Assembly;

            services.AddTransient<IQuestionRepository, QuestionRepository>();

            services.AddMediatR(domainAssembly);

            AssemblyScanner.FindValidatorsInAssembly(domainAssembly)
            .ForEach(item => services.AddScoped(item.InterfaceType, item.ValidatorType));

            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidatorBehaviour<,>));

            services.AddControllers();
            services.AddHttpContextAccessor();
            services.AddSwaggerGen();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ApplicationDbContext applicationDbContext)
        {
            applicationDbContext.Database.Migrate();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Cosmake.API v1"));
            }
            app.UseCors("MyPolicy");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseSpaApp("/index.html");

            //Isto é importante estar depois do Use para servir os ficheiros
            app.UseStaticFiles();
            app.UseDefaultFiles();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
