package org.acme;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.MultivaluedMap;
import jakarta.ws.rs.ext.MessageBodyReader;
import jakarta.ws.rs.ext.Provider;

import java.io.IOException;
import java.io.InputStream;
import java.lang.annotation.Annotation;
import java.lang.reflect.Type;
import java.util.List;

public class PostRequestyBody {
    @JsonProperty("field")
    String field;

    @Provider
    public static class PostRequestyBodyHandler implements MessageBodyReader<PostRequestyBody> {
        @Override
        public boolean isReadable(
                Class<?> aClass, Type type, Annotation[] annotations, MediaType mediaType) {
            return type == PostRequestyBody.class;
        }

        @Override
        public PostRequestyBody readFrom(
                Class<PostRequestyBody> aClass,
                Type type,
                Annotation[] annotations,
                MediaType mediaType,
                MultivaluedMap<String, String> httpHeaders,
                InputStream entityStream)
                throws BadRequestProblem {
            try {
                return new ObjectMapper().readValue(entityStream, PostRequestyBody.class);
            } catch (IOException e) {
                throw new BadRequestProblem(
                        "Failed to parse body",
                        List.of(
                                BadRequestProblem.BadRequestDetails.forBody(
                                        null, "Failed to parse body", "body.parsing.failed")));
            }
        }
    }
}
