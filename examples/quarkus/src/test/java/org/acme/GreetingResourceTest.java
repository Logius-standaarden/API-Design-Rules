package org.acme;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

@QuarkusTest
class GreetingResourceTest {

    private static final String VALID_BODY = "{\"field\": \"foo\"}";

    @Test
    void testHelloEndpoint() {
        given().when().get("/hello").then().statusCode(200).body(is("Hello from Quarkus REST"));
    }

    @Test
    void testMissingQueryParameter() {
        given().body(VALID_BODY)
                .when()
                .post("/hello")
                .then()
                .statusCode(400)
                .body(
                        "detail",
                        equalTo("Failed to process request input"),
                        "instance",
                        equalTo("/hello"),
                        "errors",
                        hasSize(1),
                        "errors.in",
                        hasItems("query"),
                        "errors.code",
                        hasItems("input.query.missing"),
                        "errors.location",
                        hasItems("queryInput"),
                        "errors.detail",
                        hasItems("Missing required query parameter"),
                        "errors[0]",
                        not(hasKey("index")));
    }

    @Test
    void testInvalidQueryParameterValue() {
        given().body(VALID_BODY)
                .when()
                .post("/hello?queryInput=43,42,41")
                .then()
                .statusCode(400)
                .body(
                        "detail",
                        equalTo("Failed to process request input"),
                        "instance",
                        equalTo("/hello"),
                        "errors",
                        hasSize(2),
                        "errors.in",
                        hasItems("query", "query"),
                        "errors.code",
                        hasItems("input.query.invalid", "input.query.invalid"),
                        "errors.location",
                        hasItems("queryInput", "queryInput"),
                        "errors.index",
                        hasItems(0, 2),
                        "errors.detail",
                        hasItems(
                                "Value for query parameter is not 42, but was 43",
                                "Value for query parameter is not 42, but was 41"));
    }

    @Test
    void testInvalidRequestBody() {
        given().body("{\"fiel\": \"foo\"}")
                .when()
                .post("/hello?queryInput=42")
                .then()
                .statusCode(400)
                .body(
                        "detail",
                        equalTo("Failed to parse body"),
                        "instance",
                        equalTo("/hello"),
                        "errors",
                        hasSize(1),
                        "errors.in",
                        hasItems("body"),
                        "errors.code",
                        hasItems("body.parsing.failed"),
                        "errors[0]",
                        allOf(not(hasKey("location")), not(hasKey("index"))),
                        "errors.detail",
                        hasItems("Failed to parse body"));
    }

    @Test
    void testReturnsBothBodySchemaIssuesAndQueryParamFailures() {
        given().body("{\"field\": \"bar\"}")
                .when()
                .post("/hello?queryInput=41")
                .then()
                .statusCode(400)
                .body(
                        "detail",
                        equalTo("Failed to process request input"),
                        "instance",
                        equalTo("/hello"),
                        "errors",
                        hasSize(2),
                        "errors.in",
                        hasItems("query", "body"),
                        "errors.code",
                        hasItems("input.query.invalid", "input.body.field.invalid"),
                        "errors.detail",
                        hasItems(
                                "Value for query parameter is not 42, but was 41",
                                "Value for field in body should be foo, but was bar"));
    }
}
