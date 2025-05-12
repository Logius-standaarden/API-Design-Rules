package org.acme;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;

import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.headers.Header;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

@Path("/")
@Tag(name = "landing-page")
public class LandingPageResource {

    @GET
    @Operation(description = "Landing page")
    @APIResponse(
            responseCode = "200",
            content = @Content(mediaType = MediaType.TEXT_PLAIN),
            headers = {
                @Header(
                        name = OpenApiConstants.API_VERSION_HEADER_NAME,
                        schema = @Schema(implementation = String.class))
            })
    public String landingPage() {
        return "This is a landing page for this API.";
    }
}
