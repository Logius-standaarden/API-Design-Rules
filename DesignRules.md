# The Design Rules

## Resources

The REST architectural style is centered around the concept of a [=resource=]. A resource is the key abstraction of information, where every piece of information is named by assigning a globally unique [=URI=] (Uniform Resource Identifier). Resources describe *things*, which can vary between physical objects (e.g. a building or a person) and more abstract concepts (e.g. a permit or an event).

<span id="api-05"></span>
<div class="rule" id="/core/naming-resources">
   <p class="rulelab"><b>/core/naming-resources</b>: Use nouns to name resources</p>
   <dl>
   <dt>Statement</dt>
   <dd>
   Resources are referred to using nouns (instead of verbs) that are relevant from the perspective of the user of the API.   
   <div class="example">
      A few correct examples of nouns as part of a URI:
      <ul>
         <li>Gebouw</li>
         <li>Vergunning</li>
      </ul>
      <p>This is different than RPC-style APIs, where verbs are often used to perform certain actions:</p>
      <ul>
         <li>Opvragen</li>
         <li>Registreren</li>
      </ul>
   </div>
   </dd>
   <dt>Rationale</dt>
   <dd>
   Resources describe objects not actions.
   </dd>
   <dt>Implications</dt>
   <dd>
   Adherance to this rule needs to be manually verified.
   </dd>
   <dt>Rule types</dt>
   <dd>
   This is a functional design rule and hence can't be tested automatically.
   </dd>
</dl>
</div>

A resource describing a single thing is called a [=singular resource=]. Resources can also be grouped into collections, which are resources in their own right and can typically be paged, sorted and filtered. Most often all collection members have the same type, but this is not necessarily the case. A resource describing multiple things is called a [=collection resource=]. Collection resources typically contain references to the underlying singular resources.

<span id="api-54"></span>
<div class="rule" id="/core/naming-collections">
   <p class="rulelab"><b>/core/naming-collections</b>: Use plural nouns to name collection resources</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         A collection resource represents multiple things.
      </dd>
      <dt>Rationale</dt>
      <dd>
         The path segment describing the name of the collection resource must be written in the plural form.
         <div class="example">
            <p>Example collection resources, describing a list of things:</p>
            <pre>https://api.example.org/v1/gebouwen<br/>https://api.example.org/v1/vergunningen</pre>
         </div>
         <p>Singular resources contained within a collection resource are generally named by appending a path segment for the identification of each individual resource.</p>
         <div class="example">
            <p>Example singular resource, contained within a collection resource:</p>
            <pre>https://api.example.org/v1/gebouwen/3b9710c4-6614-467a-ab82-36822cf48db1<br/>https://api.example.org/v1/vergunningen/d285e05c-6b01-45c3-92d8-5e19a946b66f</pre>
         </div>
         <p>Singular resources that stand on their own, i.e. which are not contained within a collection resource, must be named with a path segment that is written in the singular form.</p>
         <div class="example">
            <p>Example singular resource describing the profile of the currently authenticated user:</p>
            <pre>https://api.example.org/v1/gebruikersprofiel</pre>
         </div>
      </dd>
      <dt>Implications</dt>
      <dd>
         Adherance to this rule needs to be manually verified.
      </dd>
     	<dt>Rule types</dt>
      <dd>
      This is a functional design rule and hence can't be tested automatically.
      </dd>
   </dl>
</div>

<span id="api-04"></span>
<div class="rule" id="/core/interface-language">
   <p class="rulelab"><b>/core/interface-language</b>: Define interfaces in Dutch unless there is an official English glossary available</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         Resources and the underlying attributes should be defined in the Dutch language unless there is an official English glossary available.
      </dd>
      <dt>Rationale</dt>
      <dd>
         The exact meaning of concepts is often lost in translation. Publishing an API for an international audience might also be a reason to define interfaces in English.
         Note that glossaries exist that define useful sets of attributes which should preferably be reused. Examples can be found at <a href="http://schema.org/docs/schemas.html">schema.org</a>.
      </dd>
      <dt>Implications</dt>
      <dd>
         Adherance to this rule needs to be manually verified.
      </dd>
      <dt>Rule types</dt>
      <dd>
      This is a functional design rule and hence can't be tested automatically.
      </dd>
   </dl>
</div>

<span id="api-48"></span>
<div class="rule" id="/core/no-trailing-slash">
   <p class="rulelab"><b>/core/no-trailing-slash</b>: Leave off trailing slashes from URIs</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         A [=URI=] must never contain a trailing slash. When requesting a resource including a trailing slash, this must result in a `404` (not found) error response and not a redirect. This enforces API consumers to use the correct [=URI=].
      </dd>
      <dt>Rationale</dt>
      <dd>
         Leaving off trailing slashes, and not implementing a redirect, enforces API consumers to use the correct URI. This avoids confusion and ambiguity.
         <div class="example">
            <p>URI without a trailing slash (correct):</p>
            <pre>https://api.example.org/v1/gebouwen</pre>
            <p>URI with a trailing slash (incorrect):</p>
            <pre>https://api.example.org/v1/gebouwen/</pre>
         </div>
      </dd>
      <dt>Implications</dt>
      <dd>
         This rule is included in the automatic tests on <a href="https://developer.overheid.nl/">developer.overheid.nl</a>. The source code of the technical test can be found <a href="https://gitlab.com/commonground/don/adr-validator/-/blob/v0.3.0/pkg/adr/rules.go#L213">here</a>. The specific tests are published in the [[ADR-Validator]] repository.
      </dd>
      <dt>Rule types</dt>
      <dd>
         This is a technical design rule and hence should be tested automatically.
      </dd>
      <dt>How to test</dt>
      <dd>
         <ul>
            <li> Step 1: The API MUST meet the prerequisets to be tested. These include that an OAS file is publicly available, parsable, all $refs are resolvable and paths are defined.</li>
            <li> Step 2: Check if paths are present in the OpenAPI Specification.</li>
            <li> Step 3: Loop al paths and check if it ends with a slash ("/").</li>
            <li> Step 4: Check all paths with a get request and without parameters. They should resolve in HTTP 404.</li>
         </ul>
      </dd>
   </dl>
</div>

<span id="api-53"></span>
<div class="rule" id="/core/hide-implementation">
   <p class="rulelab"><b>/core/hide-implementation</b>: Hide irrelevant implementation details</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         An API should not expose implementation details of the underlying application, development platforms/frameworks or database systems/persistence models.
      </dd>
      <dt>Rationale</dt>
      <dd>
         <ul>
            <li>The primary motivation behind this design rule is that an API design must focus on usability for the client, regardless of the implementation details under the hood.</li>
            <li>The API, application and infrastructure need to be able to evolve independently to ease the task of maintaining backwards compatibility for APIs during an agile development process.</li>
            <li>The API design of Convenience,- and Process API types (as described in <a href="https://docs.geostandaarden.nl/api/def-hr-API-Strategie-20200204/#aanbeveling-2-analyseer-welke-api-s-je-aan-moet-bieden-welke-informatievragen-wil-je-beantwoorden">Aanbeveling 2</a> of the NL API Strategie) should not be a 1-on-1 mapping of the underlying domain- or persistence model.</li>
            <li>The API design of a System API type (as described in <a href="https://docs.geostandaarden.nl/api/def-hr-API-Strategie-20200204/#aanbeveling-2-analyseer-welke-api-s-je-aan-moet-bieden-welke-informatievragen-wil-je-beantwoorden">Aanbeveling 2</a> of the NL API Strategie) may be a mapping of the underlying  persistence model.</li>
         </ul>
      </dd>
      <dt>Implications</dt>
      <dd>
         <ul>
            <li>The API should not expose information about the technical components being used, such as development platforms/frameworks or database systems.</li>
            <li>The API should offer client-friendly attribute names and values, while persisted data may contain abbreviated terms or serializations which might be cumbersome for consumption.</li>
         </ul>
      </dd>
      <dt>Rule types</dt>
      <dd>
      This is a functional design rule and hence can't be tested automatically.
      </dd>
   </dl>
</div>

## HTTP methods

Although the REST architectural style does not impose a specific protocol, REST APIs are typically implemented using HTTP [[rfc7231]].

<span id="api-03"></span>
<div class="rule" id="/core/http-methods">
   <p class="rulelab"><b>/core/http-methods</b>: Only apply standard HTTP methods</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         Resources MUST be retrieved or manipulated using standard HTTP methods (GET/POST/PUT/PATCH/DELETE).
      </dd>
      <dt>Rationale</dt>
      <dd>
         The HTTP specifications offer a set of standard methods, where every method is designed with explicit semantics. Adhering to the HTTP specification is crucial, since HTTP clients and middleware applications rely on standardized characteristics.
         <table>
            <thead>
               <tr>
                  <th scope="col">Method</th>
                  <th scope="col">Operation</th>
                  <th scope="col">Description</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td><code>GET</code></td>
                  <td>Read</td>
                  <td>Retrieve a resource representation for the given [=URI=]. Data is only retrieved and never modified.</td>
               </tr>
               <tr>
                  <td><code>POST</code></td>
                  <td>Create</td>
                  <td>Create a subresource as part of a collection resource. This operation is not relevant for singular resources. This method can also be used for <a href="#/core/resource-operations">exceptional cases</a>.</td>
               </tr>
               <tr>
                  <td><code>PUT</code></td>
                  <td>Create/update</td>
                  <td>Create a resource with the given [=URI=] or replace (full update) a resource when the resource already exists.</td>
               </tr>
               <tr>
                  <td><code>PATCH</code></td>
                  <td>Update</td>
                  <td>Partially updates an existing resource. The request only contains the resource modifications instead of the full resource representation.</td>
               </tr>
               <tr>
                  <td><code>DELETE</code></td>
                  <td>Delete</td>
                  <td>Remove a resource with the given [=URI=].</td>
               </tr>
            </tbody>
         </table>
      </dd>
      <dt>Implications</dt>
      <dd>
         This rule is included in the automatic tests on <a href="https://developer.overheid.nl/">developer.overheid.nl</a>. The source code of the technical test can be found <a href="https://gitlab.com/commonground/don/adr-validator/-/blob/v0.3.0/pkg/adr/rules.go#L43">here</a>. The specific testscripts are published in the [[ADR-Validator]] repository.
      </dd>
   <div class="example">The following table shows some examples of the use of standard HTTP methods:
      <table>
      <thead>
      <tr>
      <th scope="col">
      Request</th>
      <th scope="col">Description</th>
      </tr>
      </thead>
      <tbody>
         <tr>
            <td><code>GET /rijksmonumenten</code></td>
            <td>Retrieves a list of national monuments.</td>
         </tr>
         <tr>
            <td><code>GET /rijksmonumenten/12</code></td>
            <td>Retrieves an individual national monument.</td>
         </tr>
         <tr>
            <td><code>POST /rijksmonumenten</code></td>
            <td>Creates a new national monument.</td>
         </tr>
         <tr>
            <td><code>PUT /rijksmonumenten/12</code></td>
            <td>Modifies national monument #12 completely.</td>
         </tr>
         <tr>
            <td><code>PATCH /rijksmonumenten/12</code></td>
            <td>Modifies national monument #12 partially.</td>
         </tr>
         <tr>
            <td><code>DELETE /rijksmonumenten/12</code></td>
            <td>Deletes national monument #12.</td>
         </tr>
      </tbody>
      </table>
   </div>
	<p class="note">The HTTP specification [[rfc7231]] and the later introduced <code>PATCH</code> method specification [[rfc5789]] offer a set of standard methods, where every method is designed with explicit semantics. HTTP also defines other methods, e.g. <code>HEAD</code>, <code>OPTIONS</code>, <code>TRACE</code>, and <code>CONNECT</code>.<br>
	The OpenAPI Specification 3.x <a href="https://spec.openapis.org/oas/v3.0.3#path-item-object">Path Item Object</a> also supports these methods, except for <code>CONNECT</code>.<br>
  According to <a href="https://datatracker.ietf.org/doc/html/rfc7231#section-4.1">RFC 7231 4.1</a> the <code>GET</code> and <code>HEAD</code> HTTP methods MUST be supported by the server, all other methods are optional.<br>
  In addition to the standard HTTP methods, a server may support other optional methods as well, e.g. <code>PROPFIND</code>, <code>COPY</code>, <code>PURGE</code>, <code>VIEW</code>, <code>LINK</code>, <code>UNLINK</code>, <code>LOCK</code>, <code>UNLOCK</code>, etc.<br>
  If an optional HTTP request method is sent to a server and the server does not support that HTTP method for the target resource, an HTTP status code <code>405 Method Not Allowed</code> shall be returned and a list of allowed methods for the target resource shall be provided in the <code>Allow</code> header in the response as stated in <a href="https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5">RFC 7231 6.5.5</a>.</p>
      <dt>How to test</dt>
      <p>Test case 1:</p>
      <dd>
         <ul>
            <li> Step 1: The API MUST meet the prerequisites to be tested. These include that an OAS file is publicly available, parsable, all $refs are resolvable and paths are defined.</li>
            <li> Step 2: Send an HTTP GET or HEAD request to any of the endpoints with a definition of a GET operation mentioned in the OAS file. The server MUST respond with a HTTP status code other than <code>405 Method Not Allowed</code>.</li>
        </ul>
      </dd>
      <p>Test case 2:</p>
      <dd>
         <ul>
            <li> Step 1: The API MUST meet the prerequisites to be tested. These include that an OAS file is publicly available, parsable, all $refs are resolvable, and paths are defined.</li>
            <li> Step 2: Send a request to the API with an optional HTTP method that is supported by the API. The server MUST respond with an HTTP status code other than <code>405 Method Not Allowed</code>.</li>
      </ul>
      </dd>
     <p>Test case 3:</p>
      <dd>
         <ul>
            <li> Step 1: The API MUST meet the prerequisites to be tested. These include that an OAS file is publicly available, parsable, all $refs are resolvable, and paths are defined.</li>
            <li> Step 2: Send a request to the API with an optional HTTP method that is not supported by the API. The server MUST respond with an HTTP status code <code>405 Method Not Allowed</code>. The response MUST contain an <code>Allow</code> header with a list of supported methods for the target resource.</li>
      </ul>
      </dd>
      <dt>Rule types</dt>
      <dd>
         This is a technical design rule and hence should be tested automatically.
      </dd>      
   </dl>
</div>

<span id="api-01"></span>
<div class="rule" id="/core/http-safety">
   <p class="rulelab"><b>/core/http-safety</b>: Adhere to HTTP safety and idempotency semantics for operations</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         The following table describes which HTTP methods must behave as safe and/or idempotent:</p>
         <table>
            <thead>
               <tr>
                  <th scope="col">Method</th>
                  <th scope="col">Safe</th>
                  <th scope="col">Idempotent</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td><code>GET</code></td>
                  <td>Yes</td>
                  <td>Yes</td>
               </tr>
               <tr>
                  <td><code>HEAD</code></td>
                  <td>Yes</td>
                  <td>Yes</td>
               </tr>
               <tr>
                  <td><code>OPTIONS</code></td>
                  <td>Yes</td>
                  <td>Yes</td>
               </tr>
               <tr>
                  <td><code>POST</code></td>
                  <td>No</td>
                  <td>No</td>
               </tr>
               <tr>
                  <td><code>PUT</code></td>
                  <td>No</td>
                  <td>Yes</td>
               </tr>
               <tr>
                  <td><code>PATCH</code></td>
                  <td>No</td>
                  <td>No</td>
               </tr>
               <tr>
                  <td><code>DELETE</code></td>
                  <td>No</td>
                  <td>Yes</td>
               </tr>
            </tbody>
         </table>
      </dd>
      <dt>Rationale</dt>
      <dd>
         The HTTP protocol [[rfc7231]] specifies whether an HTTP method should be considered safe and/or idempotent. These characteristics are important for clients and middleware applications, because they should be taken into account when implementing caching and fault tolerance strategies.
      </dd>
      <dt>Implications</dt>
      <dd>
         Request methods are considered <i>safe</i> if their defined semantics are essentially read-only; i.e., the client does not request, and does not expect, any state change on the origin server as a result of applying a safe method to a target resource. A request method is considered <i>idempotent</i> if the intended effect on the server of multiple identical requests with that method is the same as the effect for a single such request.
      </dd>
			<dt>Rule types</dt>
      <dd>
      This is a functional design rule and hence can't be tested automatically.
      </dd>
   </dl>
</div>


## Statelessness

One of the key constraints of the REST architectural style is stateless communication between client and server. It means that every request from client to server must contain all of the information necessary to understand the request. The server cannot take advantage of any stored session context on the server as it didn’t memorize previous requests. Session state must therefore reside entirely on the client.

To properly understand this constraint, it's important to make a distinction between two different kinds of state:
* *Session state*: information about the interactions of an end user with a particular client application within the same user session, such as the last page being viewed, the login state or form data in a multi-Step registration process. Session state must reside entirely on the client (e.g. in the user's browser).
* *Resource state*: information that is permanently stored on the server beyond the scope of a single user session, such as the user's profile, a product purchase or information about a building. Resource state is persisted on the server and must be exchanged between client and server (in both directions) using  representations as part of the request or response payload. This is actually where the term *REpresentational State Transfer (REST)* originates from.

<p class="note">It's a misconception that there should be no state at all. The stateless communication constraint should be seen from the server's point of view and states that the server should not be aware of any <em>session state</em>.</p>

Stateless communication offers many advantages, including:
* *Simplicity* is increased because the server doesn't have to memorize or retrieve session state while processing requests
* *Scalability* is improved because not having to incorporate session state across multiple requests enables higher concurrency and performance
* *Observability* is improved since every request can be monitored or analyzed in isolation without having to incorporate session context from other requests
* *Reliability* is improved because it eases the task of recovering from partial failures since the server doesn't have to maintain, update or communicate session state. One failing request does not influence other requests (depending on the nature of the failure of course).

<span id="api-02"></span>
<div class="rule" id="/core/stateless">
   <p class="rulelab"><b>/core/stateless</b>: Do not maintain session state on the server</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         In the context of REST APIs, the server must not maintain or require any notion of the functionality of the client application and the corresponding end user interactions.
      </dd>
      <dt>Rationale</dt>
      <dd>
         To achieve full decoupling between client and server, and to benefit from the advantages mentioned above, no session state must reside on the server. Session state must therefore reside entirely on the client.
      </dd>
      <dt>Implications</dt>
      <dd>
         Adherance to this rule needs to be manually verified.
      </dd>
      <dt>Rule types</dt>
      <dd>
      This is a functional design rule and hence can't be tested automatically.
      </dd>
   </dl>
   <p class="note">The client of a REST API could be a variety of applications such as a browser application, a mobile or desktop application and even another server serving as a backend component for another client. REST APIs should therefore be completely client-agnostic.</p>
</div>

## Relationships

Resources are often interconnected by relationships. Relationships can be modelled in different ways depending on the cardinality, semantics and more importantly, the use cases and access patterns the REST API needs to support.

<span id="api-06"></span>
<div class="rule" id="/core/nested-child">
  <p class="rulelab"><b>/core/nested-child</b>: Use nested URIs for child resources</p>
  <dl>
      <dt>Statement</dt>
      <dd>
         When having a child resource which can only exist in the context of a parent resource, the [=URI=] should be nested.
      </dd>
      <dt>Rationale</dt>
      <dd>
         In this use case, the child resource does not necessarily have a top-level collection resource. The best way to explain this design rule is by example.
      </dd>
    <div class="example">
    <p>When modelling resources for a news platform including the ability for users to write comments, it might be a good strategy to model the [=collection resources=] hierarchically:</p>
    <pre>https://api.example.org/v1/articles/123/comments</pre>
    <p>The platform might also offer a photo section, where the same commenting functionality is offered. In the same way as for articles, the corresponding sub-collection resource might be published at:</p>
    <pre>https://api.example.org/v1/photos/456/comments</pre>
    <p>These nested sub-collection resources can be used to post a new comment (<code>POST</code> method) and to retrieve a list of comments (<code>GET</code> method) belonging to the parent resource, i.e. the article or photo. An important consideration is that these comments could never have existed without the existence of the parent resource.</p>
    <p>From the consumer's perspective, this approach makes logical sense, because the most obvious use case is to show comments below the parent article or photo (e.g. on the same web page) including the possibility to paginate through the comments. The process of posting a comment is separate from the process of publishing a new article. Another client use case might also be to show a global <em>latest comments</em> section in the sidebar. For this use case, an additional resource could be provided:</p>
    <pre>https://api.example.org/v1/comments</pre>
    <p>If this would have not been a meaningful use case, this resource should not exist at all. Because it doesn't make sense to post a new comment from a global context, this resource would be read-only (only <code>GET</code> method is supported) and may possibly provide a more compact representation than the parent-specific sub-collections.</p>
    <p>The [=singular resources=] for comments, referenced from all 3 collections, could still be modelled on a higher level to avoid deep nesting of URIs (which might increase complexity or problems due to the URI length):</p>
    <pre>https://api.example.org/v1/comments/123<br />https://api.example.org/v1/comments/456</pre>
    <p>Although this approach might seem counterintuitive from a technical perspective (we simply could have modelled a single <code>/comments</code> resource with optional filters for article and photo) and might introduce partially redundant functionality, it makes perfect sense from the perspective of the consumer, which increases developer experience.</p>
  </div>
  <dt>Implications</dt>
      <dd>
         Adherance to this rule needs to be manually verified.
      </dd>
      <dt>Rule types</dt>
      <dd>
      This is a functional design rule and hence can't be tested automatically.
      </dd>
</div>

## Operations

<span id="api-10"></span>
<div class="rule" id="/core/resource-operations">
  <p class="rulelab"><b>/core/resource-operations</b>: Model resource operations as a sub-resource or dedicated resource</p>
  <dl>
      <dt>Statement</dt>
      <dd>
         Model resource operations as a sub-resource or dedicated resource</a>.
      </dd>
      <dt>Rationale</dt>
      <dd>
         There are resource operations which might not seem to fit well in the CRUD interaction model. For example, approving of a submission or notifying a customer. Depending on the type of the operation, there are three possible approaches:
      <ol>
         <li>Re-model the resource to incorporate extra fields supporting the particular operation. For example, an approval operation can be modelled in a boolean attribute <code>goedgekeurd</code> that can be modified by issuing a <code>PATCH</code> request against the resource. Drawback of this approach is that the resource does not contain any metadata about the operation (when and by whom was the approval given? Was the submission declined in an earlier stage?). Furthermore, this requires a fine-grained authorization model, since approval might require a specific role.</li>
         <li>Treat the operation as a sub-resource. For example, model a sub-collection resource <code>/inzendingen/12/beoordelingen</code> and add an approval or declination by issuing a <code>POST</code> request. To be able to retrieve the review history (and to consistently adhere to the REST principles), also support the <code>GET</code> method for this resource. The <code>/inzendingen/12</code> resource might still provide a <code>goedgekeurd</code> boolean attribute (same as approach 1) which gets automatically updated on the background after adding a review. This attribute should however be read-only.</li>
         <li>In exceptional cases, the approaches above still don't offer an appropriate solution. An example of such an operation is a global search across multiple resources. In this case, the creation of a dedicated resource, possibly nested under an existing resource, is the most obvious solution. Use the imperative mood of a verb, maybe even prefix it with a underscore to distinguish these resources from regular resources. For example: <code>/search</code> or <code>/_search</code>. Depending on the operation characteristics, <code>GET</code> and/or <code>POST</code> method may be supported for such a resource.</li>
      </ol>
      </dd>
      <dt>Implications</dt>
      <dd>
         In this design rule, approach 2 and 3 are preferred.
         Adherance to this rule needs to be manually verified.
      </dd>
      <dt>Rule types</dt>
      <dd>
         This is a functional design rule and hence can't be tested automatically.
      </dd>
   </dl>
  
  <p>
  <p></p>
</div>

## Documentation

An API is as good as the accompanying documentation. The documentation has to be easily findable, searchable and publicly accessible. Most developers will first read the documentation before they start implementing. Hiding the technical documentation in PDF documents and/or behind a login creates a barrier for both developers and search engines.

<span id="api-16"></span>
<div class="rule" id="/core/doc-openapi">
  <p class="rulelab"><b>/core/doc-openapi</b>: Use OpenAPI Specification for documentation</p>
  <dl>
      <dt>Statement</dt>
      <dd>
         API documentation must be provided in the form of an OpenAPI definition document which conforms to the OpenAPI Specification (from v3 onwards).
      </dd>
      <dt>Rationale</dt>
      <dd>
         The OpenAPI Specification (OAS) [[OPENAPIS]] defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic.
         API documentation must be provided in the form of an OpenAPI definition document which conforms to the OpenAPI Specification (from v3 onwards). As a result, a variety of tools can be used to render the documentation (e.g. Swagger UI or ReDoc) or automate tasks such as testing or code generation. The OAS document should provide clear descriptions and examples.
      </dd>
      <dt>Implications</dt>
      <dd>
         This rule is included in the automatic tests on <a href="https://developer.overheid.nl/">developer.overheid.nl</a>. The source code of the technical test can be found <a href="https://gitlab.com/commonground/don/adr-validator/-/blob/v0.3.0/pkg/adr/rules.go#L119">here</a>. The specific tests are published in the [[ADR-Validator]] repository.
      </dd>
      <dt>Rule types</dt>
      <dd>
         This is a technical design rule and hence should be tested automatically.
      </dd>
      <dt>How to test</dt>
      <dd>
         <ul>
            <li> Step 1: The API MUST meet the prerequisets to be tested. These include that an OAS file is publicly available, parsable, all $refs are resolvable and paths are defined.</li>
            <li> Step 2: Check the specification type.</li>
            <li> Step 3: All references MUST be publicly resolvable, including the external references.</li>
         </ul>
      </dd>
   </dl>
</div>

<span id="api-17"></span>
<div class="rule" id="/core/doc-language">
  <p class="rulelab"><b>/core/doc-language</b>: Publish documentation in Dutch unless there is existing documentation in English</p>
  <dl>
      <dt>Statement</dt>
      <dd>
         You should write the OAS document in Dutch.
      </dd>
      <dt>Rationale</dt>
      <dd>
         In line with design rule <a href="#/core/interface-language">/core/interface-language</a>, the OAS document (e.g. descriptions and examples) should be written in Dutch. If relevant, you may refer to existing documentation written in English.
      </dd>
      <dt>Implications</dt>
      <dd>
         Adherance to this rule needs to be manually verified.
      </dd>
      <dt>Rule types</dt>
      <dd>
      This is a functional design rule and hence can't be tested automatically.
      </dd>
   </dl>
</div>

<span id="api-51"></span>
<div class="rule" id="/core/publish-openapi">
  <p class="rulelab"><b>/core/publish-openapi</b>: Publish OAS document at a standard location in JSON-format</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         To make the OAS document easy to find and to facilitate self-discovering clients, there should be one standard location where the OAS document is available for download.
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p> Clients (such as Swagger UI or ReDoc) must be able to retrieve the document without having to authenticate. Furthermore, the CORS policy for this [=URI=] must allow external domains to read the documentation from a browser environment.</p>
         <p>The standard location for the OAS document is a URI called <code>openapi.json</code> or <code>openapi.yaml</code> within the base path of the API. This can be convenient, because OAS document updates can easily  become part of the CI/CD process.</p>
         <p>At least the JSON format must be supported. When having multiple (major) versions of an API, every API should provide its own OAS document(s).</p>
         <div class="example">
            <p>An API having base path <code>https://api.example.org/v1/</code> must publish the OAS document at:</p>
            <pre>https://api.example.org/v1/openapi.json</pre>
            <p>Optionally, the same OAS document may be provided in YAML format:</p>
            <pre>https://api.example.org/v1/openapi.yaml</pre>
         </div>
      </dd>
      <dt>Implications</dt>
      <dd>
         This rule is included in the automatic tests on <a href="https://developer.overheid.nl/">developer.overheid.nl</a>. The source code of the technical test can be found <a href="https://gitlab.com/commonground/don/adr-validator/-/blob/v0.3.0/pkg/adr/rules.go#L282">here</a>. The specific tests are published in the [[ADR-Validator]] repository.
      </dd>
      <dt>Rule types</dt>
      <dd>
         This is a technical design rule and hence should be tested automatically.
      </dd>
      <dt>How to test</dt>
      <dd>
         <ul>
            <li> Step 1: The API MUST meet the prerequisets to be tested. These include that an OAS file (openapi.json) is publicly available, parsable, all $refs are resolvable and paths are defined.</li>
            <li> Step 2: The openapi.yaml MAY be available. If available it MUST contain yaml, be readable and parsable.</li>
            <li> Step 3: The openapi.yaml MUST contain the same OpenAPI Specification as the openapi.json.</li>
            <li> Step 4: The CORS header Access-Control-Allow-Origin MUST allow all origins.</li>
         </ul>
      </dd>
   </dl>
</div>

## Versioning

Changes in APIs are inevitable. APIs should therefore always be versioned, facilitating the transition between changes.

<span id="api-18"></span>
<div class="rule" id="/core/deprecation-schedule">
  <p class="rulelab"><b>/core/deprecation-schedule</b>: Include a deprecation schedule when deprecating features or versions</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         Implement well documented and timely communicated deprecation schedules.
      </dd>
      <dt>Rationale</dt>
      <dd>
         Managing change is important. In general, well documented and timely communicated deprecation schedules are the most important for API users. When deprecating features or versions, a deprecation schedule must be published. This document should be published on a public web page. Furthermore, active clients should be informed by e-mail once the schedule has been updated or when versions have reached end-of-life.
      </dd>
      <dt>Implications</dt>
      <dd>
         Adherance to this rule needs to be manually verified.
      </dd>
      <dt>Rule types</dt>
      <dd>
         This is a functional design rule and hence can't be tested automatically.
      </dd>
   </dl>
</div>

<span id="api-19"></span>
<div class="rule" id="/core/transition-period">
  <p class="rulelab"><b>/core/transition-period</b>: Schedule a fixed transition period for a new major API version</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         Old versions must remain available for a limited and fixed deprecation period.
      </dd>
      <dt>Rationale</dt>
      <dd>
         When releasing a new major API version, the old version must remain available for a limited and fixed deprecation period. Offering a deprecation period allows clients to carefully plan and execute the migration from the old to the new API version, as long as they do this prior to the end of the deprecation period. A maximum of 2 major API versions may be published concurrently.
      </dd>
      <dt>Implications</dt>
      <dd>
         Adherance to this rule needs to be manually verified.
      </dd>
      <dt>Rule types</dt>
      <dd>
         This is a functional design rule and hence can't be tested automatically.
      </dd>
   </dl>
</div>

<span id="api-20"></span>
<div class="rule" id="/core/uri-version">
  <p class="rulelab"><b>/core/uri-version</b>: Include the major version number in the URI</p>
    <dl>
      <dt>Statement</dt>
      <dd>
         The [=URI=] of an API must include the major version number.
      </dd>
      <dt>Rationale</dt>
      <dd>
         The [=URI=] of an API (base path) must include the major version number, prefixed by the letter <code>v</code>. This allows the exploration of multiple versions of an API in the browser. The minor and patch version numbers are not part of the [=URI=] and may not have any impact on existing client implementations.
      <div class="example">
         <p>An example of a base path for an API with current version 1.0.2:</p>
         <pre>https://api.example.org/v1/</pre>
         <pre>version: '1.0.2'</pre>
         <pre>servers:
                  - description: test environment  
                  url: https://api.test.example.org/v1/  
                  - description: production environment  
                  url: https://api.example.org/v1/  
         </pre>
      </div>
      </dd>
      <dt>Implications</dt>
      <dd>
         This rule is included in the automatic tests on <a href="https://developer.overheid.nl/">developer.overheid.nl</a>. The source code of the technical test can be found <a href="https://gitlab.com/commonground/don/adr-validator/-/blob/v0.3.0/pkg/adr/rules.go#L165">here</a>. The specific tests are published in the [[ADR-Validator]] repository.
      </dd>
      <dt>Rule types</dt>
      <dd>
         This is a technical design rule and hence should be tested automatically.
      </dd>
      <dt>How to test</dt>
      <dd>
         <ul>
            <li> Step 1: The base path MUST contain a version number.</li>
            <li> Step 2: Each url of the server object of the OpenAPI Specification must include a version number.</li>
            <li> Step 3: The version in the OAS file must be the same as the version in the base path.</li>
         </ul>
      </dd>
   </dl>
</div>

<span id="api-55"></span>
<div class="rule" id="/core/changelog">
  <p class="rulelab"><b>/core/changelog</b>: Publish a changelog for API changes between versions</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         Publish a changelog.
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>When releasing new (major, minor or patch) versions, all API changes must be documented properly in a publicly available changelog.</p>
      </dd>
      <dt>Implications</dt>
      <dd>
         Adherance to this rule needs to be manually verified.
      </dd>
      <dt>Rule types</dt>
      <dd>
      This is a functional design rule and hence can't be tested automatically.
      </dd>
   </dl>
</div>

<span id="api-56"></span>
<div class="rule" id="/core/semver">
  <p class="rulelab"><b>/core/semver</b>: Adhere to the Semantic Versioning model when releasing API changes</p>
  <dl>
      <dt>Statement</dt>
      <dd>
         Implement Semantic Versioning.
      </dd>
      <dt>Rationale</dt>
      <dd>
         Version numbering must follow the Semantic Versioning [[SemVer]] model to prevent breaking changes when releasing new API versions. Release versions are formatted using the <code>major.minor.patch</code> template (examples: 1.0.2, 1.11.0). Pre-release versions may be denoted by appending a hyphen and a series of dot separated identifiers (examples: 1.0.2-rc.1, 2.0.0-beta.3). When releasing a new version which contains backwards-incompatible changes, a new major version must be released. Minor and patch releases may only contain backwards compatible changes (e.g. the addition of an endpoint or an optional attribute).
      </dd>
      <dt>Implications</dt>
      <dd>
         This rule is included in the automatic tests on <a href="https://developer.overheid.nl/">developer.overheid.nl</a>. The source code of the technical test can be found <a href="https://gitlab.com/commonground/don/adr-validator/-/blob/v0.3.0/pkg/adr/rules.go#L354">here</a>. The specific tests are published in the [[ADR-Validator]] repository.
      </dd>
      <dt>Rule types</dt>
      <dd>
         This is a technical design rule and hence should be tested automatically.
      </dd>
      <dt>How to test</dt>
      <dd>
         <ul>
            <li> Step 1: The API MUST meet the prerequisets to be tested. These include that an OAS file (openapi.json) is publicly available, parsable, all $refs are resolvable and paths are defined.</li>
            <li> Step 2: In the open api specification the info and version object MUST be available.</li>
            <li> Step 3: The version MUST comply with Semantic Versioning.</li>
         </ul>
      </dd> 
   </dl>
</div>

<span id="api-57"></span>
<div class="rule" id="/core/version-header">
  <p class="rulelab"><b>/core/version-header</b>: Return the full version number in a response header</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         Return the API-Version header.
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Since the URI only contains the major version, it's useful to provide the full version number in the response headers for every API call. This information could then be used for logging, debugging or auditing purposes. In cases where an intermediate networking component returns an error response (e.g. a reverse proxy enforcing access policies), the version number may be omitted.</p>
         <p>The version number must be returned in an HTTP response header named <code>API-Version</code> (case-insensitive) and should not be prefixed.</p>
         <div class="example">
            <p>An example of an API version response header:</p>
            <pre>API-Version: 1.0.2</pre>
         </div>
      </dd>
      <dt>Implications</dt>
      <dd>
         This rule is included in the automatic tests on <a href="https://developer.overheid.nl/">developer.overheid.nl</a>. The source code of the technical test can be found <a href="https://gitlab.com/commonground/don/adr-validator/-/blob/v0.3.0/pkg/adr/rules.go#L393">here</a>. The specific tests are published in the [[ADR-Validator]] repository.
      </dd>
      <dt>Rule types</dt>
      <dd>
         This is a technical design rule and hence should be tested automatically.
      </dd>
      <dt>How to test</dt>
      <dd>
         <ul>
            <li> Step 1: A request to the base url MUST give a response and include the header "API-Version".</li>
            <li> Step 2: The value of the header "API-Version" MUST have a valid Semantic Versioning number.</li>
         </ul>
      </dd>
   </dl>
</div>

## Geospatial

Geospatial content is becoming more common in every modern API. APIs containing [=OGC=] compliant features should therefore be compliant with geospatial specific rules.
  
<div class="rule" id="/core/geo">
  <p class="rulelab"><b>/core/geo</b>: Use the GEO module for geospatial content</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         Use the specific GEO module when designing an API for geospatial content and functions.
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>The NL API Strategy [[Geospatial Module]] provides rules for publishing geospatial data using Web APIs. Spatial data is data that describes anything with spatial extent (i.e. size, shape or position). Spatial data is also known as location information. [[sdw-bp]] </p>
         <p>The [[Geospatial Module]] rules MUST be applied for the structuring of geospatial payloads and for functions in APIs to handle geospatial data in line with <a href="https://ogcapi.ogc.org/features/">the Open Geospatial Consortium (OGC) API Features.</a></p>
      </dd>
      <dt>Implications</dt>
      <dd>
         Adherance to this rule needs to be manually verified.
      </dd>
      <dt>Rule types</dt>
      <dd>
         This is a functional design rule and hence can't be tested automatically.
      </dd>
   </dl>
</div>

