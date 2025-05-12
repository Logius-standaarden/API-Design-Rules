using Microsoft.AspNetCore.OpenApi;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;

public class OpenApiJsonDocumentFilter : IOpenApiDocumentTransformer
{
    public Task TransformAsync(OpenApiDocument document, OpenApiDocumentTransformerContext context, CancellationToken cancellationToken)
    {
        document.Tags.Add(
        new()
        {
            Name = "OpenAPI",
            Description = "Ophalen OAS"
        });

        var openapiHeaders = new Dictionary<string, OpenApiHeader>
        {
            ["access-control-allow-origin"] = new OpenApiHeader
            {
                Description = "CORS header",
                Schema = new OpenApiSchema
                {
                    Type = "string",
                    Example = new OpenApiString("*")
                }
            }
        };

        var openApiResponse = new OpenApiResponse
        {
            Description = "OAS",
            Headers = openapiHeaders,
            Content = new Dictionary<string, OpenApiMediaType>
            {
                ["application/json"] = new OpenApiMediaType()
            }
        };

        document.Paths.Add("/openapi.json", new OpenApiPathItem
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
                        ["200"] = openApiResponse
                    }
                }
            }
        });

        foreach (var pathResponse in document.Paths.Values.SelectMany(path => path.Operations.Values.SelectMany(operation => operation.Responses)))
        {
            pathResponse.Value.Headers.Add("API-Version", new OpenApiHeader() {
                Description = "API version",
                Schema = new OpenApiSchema
                {
                    Type = "string",
                    Example = new OpenApiString("1.0.0")
                }
            });
        }

        return Task.CompletedTask;
    }
}
