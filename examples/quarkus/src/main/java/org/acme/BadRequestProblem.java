package org.acme;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.quarkiverse.resteasy.problem.HttpProblem;
import jakarta.ws.rs.core.Response;
import org.eclipse.microprofile.openapi.annotations.media.Schema;

import java.util.List;

public class BadRequestProblem extends HttpProblem {
    protected BadRequestProblem(String message, List<BadRequestDetails> errors) {
        super(
                builder()
                        .withTitle("Bad hello request")
                        .withStatus(Response.Status.BAD_REQUEST)
                        .withDetail(message)
                        .with("errors", errors));
    }

    @Schema(name = "errors", description = "All bad request errors")
    public List<BadRequestDetails> errors;

    @Schema(
            name = "BadRequestDetails",
            description = "Request details according to API Design Rules")
    public static class BadRequestDetails {
        @Schema(description = "Where the error occurs")
        public BadRequestLocation in;

        @Schema(description = "Human-readable message describing the violation")
        public String detail;

        @Schema(description = "A locator for the offending value")
        public String location;

        @Schema(
                nullable = true,
                description =
                        "A zero-based index position when multiple query parameters have the same name")
        @JsonInclude(value = JsonInclude.Include.NON_NULL)
        public Integer index;

        private BadRequestDetails(
                BadRequestLocation in, String detail, String location, Integer index) {
            this.in = in;
            this.detail = detail;
            this.location = location;
            this.index = index;
        }

        public static BadRequestDetails forQuery(
                BadRequestLocation in, String detail, Integer index) {
            return new BadRequestDetails(in, detail, "query", index);
        }
    }

    public enum BadRequestLocation {
        @JsonProperty("body")
        Body,
        @JsonProperty("query")
        Query,
        ;
    }
}
