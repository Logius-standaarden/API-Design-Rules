package org.acme;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.headers.Header;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.jboss.resteasy.reactive.RestQuery;
import org.jboss.resteasy.reactive.Separator;

import java.util.ArrayList;
import java.util.List;

@Path("/hello")
@Tag(name = "greeting")
public class GreetingResource {

    @GET
    @Operation(description = "Hello world endpoint")
    @APIResponse(
            responseCode = "200",
            content = @Content(mediaType = MediaType.TEXT_PLAIN),
            headers = {
                @Header(
                        name = OpenApiConstants.API_VERSION_HEADER_NAME,
                        schema = @Schema(implementation = String.class))
            })
    public String hello() {
        return "Hello from Quarkus REST";
    }

    @POST
    @Operation(description = "Test bad request with query parameter")
    @APIResponse(
            responseCode = "200",
            content = @Content(mediaType = MediaType.TEXT_PLAIN),
            headers = {
                @Header(
                        name = OpenApiConstants.API_VERSION_HEADER_NAME,
                        schema = @Schema(implementation = String.class))
            })
    @APIResponse(
            responseCode = "400",
            description = "Bad request response",
            content =
                    @Content(
                            mediaType = "application/problem+json",
                            schema = @Schema(implementation = BadRequestProblem.class)))
    public String withInput(
            @RestQuery("queryInput") @Separator(",") List<String> queryInputParam,
            PostRequestyBody body) {
        var errors = new ArrayList<BadRequestProblem.BadRequestDetails>();
        if (queryInputParam.isEmpty()) {
            errors.add(
                    BadRequestProblem.BadRequestDetails.forSingleQuery(
                            "queryInput",
                            "Missing required query parameter",
                            "input.query.missing"));
        }
        var queryParams = queryInputParam.iterator();
        for (var index = 0; queryParams.hasNext(); index++) {
            var param = queryParams.next();
            if (!param.equals("42")) {
                errors.add(
                        BadRequestProblem.BadRequestDetails.forIndexedQuery(
                                "queryInput",
                                "Value for query parameter is not 42, but was %s".formatted(param),
                                index,
                                "input.query.invalid"));
            }
        }
        if (!body.field.equals("foo")) {
            errors.add(
                    BadRequestProblem.BadRequestDetails.forBody(
                            "field",
                            "Value for field in body should be foo, but was %s"
                                    .formatted(body.field),
                            "input.body.field.invalid"));
        }
        if (!errors.isEmpty()) {
            throw new BadRequestProblem("Failed to process request input", errors);
        }
        return "Successful response";
    }
}
