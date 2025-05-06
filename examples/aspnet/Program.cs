using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using Microsoft.OpenApi.Writers;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.IO;
using System.Threading.Tasks;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "1.0.0",
        Title = "Voorbeeld in ASP.NET Core",
        Description = "Summier voorbeeld dat aan de ADR-linter voldoet",
        Contact = new OpenApiContact
        {
            Name = "API Support",
            Email = "apisupport@example.com",
            Url = new Uri("https://example.com/api/support")
        }
    });
    options.AddServer(new OpenApiServer { Url = "https://api.example.com/v1" });

    options.DocumentFilter<OpenApiJsonDocumentFilter>();
});

var app = builder.Build();

app.Use(async (context, next) =>
{
    context.Response.OnStarting(() =>
    {
        context.Response.Headers["Access-Control-Allow-Origin"] = "*";
        context.Response.Headers["API-Version"] = "1.0.0";
        return Task.CompletedTask;
    });

    await next();
});

app.MapGet("/hello-world", () =>
    Results.Ok(new { message = "Hello, world!" }));

app.MapGet("/openapi.json", async context =>
{
    var swaggerProvider = context.RequestServices.GetRequiredService<Swashbuckle.AspNetCore.Swagger.ISwaggerProvider>();
    var doc = swaggerProvider.GetSwagger("v1");

    context.Response.ContentType = "application/json";

    using var textWriter = new StringWriter();
    var jsonWriter = new OpenApiJsonWriter(textWriter);
    doc.SerializeAsV3(jsonWriter);

    await context.Response.WriteAsync(textWriter.ToString());
});

app.Run();
