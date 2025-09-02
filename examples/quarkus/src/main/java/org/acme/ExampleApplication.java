package org.acme;

import jakarta.ws.rs.core.Application;
import org.eclipse.microprofile.openapi.annotations.OpenAPIDefinition;
import org.eclipse.microprofile.openapi.annotations.info.Contact;
import org.eclipse.microprofile.openapi.annotations.info.Info;

@OpenAPIDefinition(
        info = @Info(
                title = "Quarkus API",
                version = "1.0.0",
                description = "Example API built with Quarkus",
                contact = @Contact(
                        name = "API Support",
                        url = "https://example.com/api/support",
                        email = "apisupport@example.com"
                )
        )
)
public class ExampleApplication extends Application {
}
