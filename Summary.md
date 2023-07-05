## Summary

<aside class="note">
Design rules have unique and permanent numbers. In the event of design rules being deprecated or restructured, they are removed from the list. Therefore, gaps in the sequence can occur. New design rules will always get a new and higher number.
</aside>

### Normative Design Rules

Design rules can be technical rules, which should be tested automatically and functional rules which should be considerd when designing and building the api.

#### List of functional rules
Origional version 1.0.0 ruleset:
* <a href="#/core/http-safety">/core/http-safety</a>: Adhere to HTTP safety and idempotency semantics for operations.
* <a href="#/core/stateless">/core/stateless</a>: Do not maintain session state on the server.
* <a href="#/core/interface-language">/core/interface-language</a>: Define interfaces in Dutch unless there is an official English glossary available.
* <a href="#/core/naming-resources">/core/naming-resources</a>: Use nouns to name resources.
* <a href="#/core/nested-child">/core/nested-child</a>: Use nested URIs for child resources.
* <a href="#/core/resource-operations">/core/resource-operations</a>: Model resource operations as a sub-resource or dedicated resource.
* <a href="#/core/doc-language">/core/doc-language</a>: Publish documentation in Dutch unless there is existing documentation in English.
* <a href="#/core/deprecation-schedule">/core/deprecation-schedule</a>: Include a deprecation schedule when publishing API changes.
* <a href="#/core/transition-period">/core/transition-period</a>: Schedule a fixed transition period for a new major API version.
* <a href="#/core/hide-implementation">/core/hide-implementation</a>: Hide irrelevant implementation details.
* <a href="#/core/naming-collections">/core/naming-collections</a>: Use plural nouns to name collection resources.
* <a href="#/core/changelog">/core/changelog</a>: Publish a changelog for API changes between versions.

Additional eDelivery compliant rules:  
* <a href="#/core/backward-compatibility">/core/backward-compatibility</a>: The API designer should strive for backward-compatible changes.
* <a href="#/core/sunset">/core/sunset</a>: Sunsetting of operations is done with the use of semantic versioning.

#### List of technical rules
Origional version 1.0.0 ruleset:
* <a href="#/core/http-methods">/core/http-methods</a>: Only apply standard HTTP methods.
* <a href="#/core/doc-openapi">/core/doc-openapi</a>: Use OpenAPI Specification for documentation.
* <a href="#/core/uri-version">/core/uri-version</a>: Include the major version number in the URI.
* <a href="#/core/no-trailing-slash">/core/no-trailing-slash</a>: Leave off trailing slashes from URIs.
* <a href="#/core/publish-openapi">/core/publish-openapi</a>: Publish OAS document at a standard location in JSON-format.
* <a href="#/core/semver">/core/semver</a>: Adhere to the Semantic Versioning model when releasing API changes.
* <a href="#/core/version-header">/core/version-header</a>: Return the full version number in a response header.
