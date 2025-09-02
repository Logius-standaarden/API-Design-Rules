package org.acme;

import io.quarkus.smallrye.openapi.OpenApiFilter;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.openapi.OASFactory;
import org.eclipse.microprofile.openapi.OASFilter;
import org.eclipse.microprofile.openapi.models.OpenAPI;
import org.eclipse.microprofile.openapi.models.Paths;
import org.eclipse.microprofile.openapi.models.headers.Header;
import org.eclipse.microprofile.openapi.models.media.Content;
import org.eclipse.microprofile.openapi.models.media.Schema;
import org.eclipse.microprofile.openapi.models.responses.APIResponses;

@OpenApiFilter(OpenApiFilter.RunStage.BUILD)
public class OpenAPIJsonFilter implements OASFilter {

    private static final String OPENAPI_TAG = "openapi";

    @Override
    public void filterOpenAPI(OpenAPI openAPI) {
        Paths paths = openAPI.getPaths();
        if (paths == null) {
            paths = OASFactory.createPaths();
            openAPI.setPaths(paths);
        }
        openAPI.addTag(OASFactory.createTag().name("openapi"));
        paths.addPathItem(
                "/openapi.json",
                OASFactory.createPathItem()
                        .GET(
                                OASFactory.createOperation()
                                        .description("Open API specification")
                                        .addTag(OPENAPI_TAG)
                                        .operationId("getGeneratedOpenAPI")
                                        .responses(createOpenApiResponse())));
    }

    private static APIResponses createOpenApiResponse() {
        Content jsonContent =
                OASFactory.createContent()
                        .addMediaType(MediaType.APPLICATION_JSON, OASFactory.createMediaType());
        Schema stringSchema = OASFactory.createSchema().addType(Schema.SchemaType.STRING);
        Header apiVersionsHeader = OASFactory.createHeader().schema(stringSchema);
        Header corsHeader =
                OASFactory.createHeader()
                        .description("Available to all origins")
                        .schema(stringSchema);
        return OASFactory.createAPIResponses()
                .addAPIResponse(
                        "200",
                        OASFactory.createAPIResponse()
                                .description("Open API specification")
                                .addHeader(
                                        OpenApiConstants.API_VERSION_HEADER_NAME, apiVersionsHeader)
                                .addHeader("access-control-allow-origin", corsHeader)
                                .content(jsonContent));
    }
}
