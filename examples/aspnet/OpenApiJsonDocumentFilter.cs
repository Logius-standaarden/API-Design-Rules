using Swashbuckle.AspNetCore.SwaggerGen;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Any;

public class OpenApiJsonDocumentFilter : IDocumentFilter
{
    public void Apply(OpenApiDocument swaggerDoc, DocumentFilterContext context)
    {
        var responseHeaders = new Dictionary<string, OpenApiHeader>
        {
            ["access-control-allow-origin"] = new OpenApiHeader
            {
                Description = "CORS header",
                Schema = new OpenApiSchema
                {
                    Type = "string",
                    Example = new OpenApiString("*")
                }
            },
            ["API-Version"] = new OpenApiHeader
            {
                Description = "API version",
                Schema = new OpenApiSchema
                {
                    Type = "string",
                    Example = new OpenApiString("1.0.0")
                }
            }
        };

        var response = new OpenApiResponse
        {
            Description = "OAS",
            Headers = responseHeaders,
            Content = new Dictionary<string, OpenApiMediaType>
            {
                ["application/json"] = new OpenApiMediaType()
            }
        };

        swaggerDoc.Paths.Add("/openapi.json", new OpenApiPathItem
        {
            Operations =
            {
                [OperationType.Get] = new OpenApiOperation
                {
                    OperationId = "getOpenApiJson", 
                    Tags = [new OpenApiTag { Name = "OpenAPI" }],
                    Description = "OAS",
                    Summary = "OAS",
                    Responses = new OpenApiResponses
                    {
                        ["200"] = response
                    }
                }
            }
        });
    }
}
