var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi(options =>
{
    options.AddDocumentTransformer((document, context, cancellationToken) =>
    {
        document.Info = new()
        {
            Title = "Voorbeeld in ASP.NET Core",
            Version = "1.0.0",
            Description = "Summier voorbeeld dat aan de ADR-linter voldoet",
            Contact = new()
            {
                Name = "API Support",
                Email = "apisupport@example.com",
                Url = new Uri("https://example.com/api/support")
            }
        };
        document.Servers.Add(new ()
        {
            Url = "https://api.example.com/v1"
        });
        return Task.CompletedTask;
    });
    options.AddDocumentTransformer(new OpenApiJsonDocumentFilter());
});

var app = builder.Build();
app.MapOpenApi("/openapi.json");

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

app.MapControllers();

app.Run();
