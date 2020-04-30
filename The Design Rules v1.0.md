# The Design Rules

## Resources

The REST architectural style is centered around the concept of a [resource](#dfn-resource). A resource is the key abstraction of information, where every piece of information is named by assigning a globally unique [URI](#dfn-uri) (Uniform Resource Identifier). Resources describe *things*, which can vary between physical objects (e.g. a building or a person) and more abstract concepts (e.g. a permit or an event).

<div class="rule" id="api-05">
  <p class="rulelab"><strong>API-05</strong>: Use nouns to name resources</p>
  <p>Because resources describe things (and thus not actions), resources are referred to using nouns (instead of verbs) that are relevant from the perspective of the user of the API.</p>
  <div class="example">
    <p>A few correct examples of nouns as part of a URI:</p>
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
</div>

A resource describing a single thing is called a [singular resource](#dfn-singular-resource). Resources can also be grouped into collections, which are resources in their own right and can typically be paged, sorted and filtered. Most often all collection members have the same type, but this is not necessarily the case. A resource describing multiple things is called a [collection resource](#dfn-collection-resource). Collection resources typically contain references to the underlying singular resources.

<div class="rule" id="api-54">
  <p class="rulelab"><strong>API-54</strong>: Use plural nouns to name collection members</p>
  <p>In most cases, resources are organized into collections. Although grammatically it may feel wrong to request a single resource using the plural of the resource, it's a pragmatic choice to refer to endpoints consistently using plurals. For the user it is much easier not having to deal with the distinction between the singular and plural form (<i>gebouwen/gebouw, regels/regel</i>). Furthermore, this implementation is much more straightforward as most development frameworks are able to resolve both a collection resource and underlying singular resources using a single controller.</p>
  <div class="example">
    <p>Collection resources, describing a list of things:</p>
    <pre>https://api.example.org/v1/gebouwen<br/>https://api.example.org/v1/vergunningen</pre>
    <p>Singular resource, describing an individual thing:</p>
    <pre>https://api.example.org/v1/gebouwen/3b9710c4-6614-467a-ab82-36822cf48db1<br/>https://api.example.org/v1/vergunningen/d285e05c-6b01-45c3-92d8-5e19a946b66f</pre>
  </div>
  <p>This design rule does not account for singular resources not being part of a collection. These must be named in the singular form:</p>
  <div class="example">
    <p>A resource describing the profile of the currently authenticated user:</p>
    <pre>https://api.example.org/v1/gebruikersprofiel</pre>
  </div>
</div>

<div class="rule" id="api-04">
  <p class="rulelab"><strong>API-04</strong>: Define interfaces in Dutch unless there is an official English glossary available</p>
  <p>Since the exact meaning of concepts is often lost in translation, resources and the underlying attributes should be defined in the Dutch language unless there is an official English glossary available. Publishing an API for an international audience might also be a reason to define interfaces in English.</p>
  <p>Note that glossaries exist that define useful sets of attributes which should preferably be reused. Examples can be found at <a href="http://schema.org/docs/schemas.html">schema.org</a>.</p>
</div>

<div class="rule" id="api-48">
  <p class="rulelab"><strong>API-48</strong>: Leave off trailing slashes from URIs</p>
  <p>According to the URI specification [[rfc3986]], URIs may contain a trailing slash. However, for REST APIs this is considered as a bad practice since a URI including or excluding a trailing slash might be interpreted as different resources (which is strictly speaking the correct interpretation).</p>
  <p>To avoid confusion and ambiguity, a URI must never contain a trailing slash. When requesting a resource including a trailing slash, this must result in a 404 (not found) error response and not a redirect. This enforces API consumers to use the correct URI.</p>
  <div class="example">
    <p>URI without a trailing slash (correct):</p>
    <pre>https://api.example.org/v1/gebouwen</pre>
    <p>URI with a trailing slash (incorrect):</p>
    <pre>https://api.example.org/v1/gebouwen/</pre>
  </div>
</div>

<div class="rule" id="api-53">
  <p class="rulelab"><strong>API-53</strong>: Hide irrelevant implementation details</p>
  <p>An API should not expose implementation details of the underlying application. The primary motivation behind this design rule is that an API design must focus on usability for the client, regardless of the implementation details under the hood. The API, application and infrastructure need to be able to evolve independently to ease the task of maintaining backwards compatibility for APIs during an agile development process.</p>
  <p>A few examples of implementation details:</p>
  <ul>
    <li>The API design should not be a 1-on-1 mapping of the underlying domain- or persistence model</li>
    <li>The API should not expose information about the technical components being used, such as development platforms/frameworks or database systems</li>
    <li>The API should offer client-friendly attribute names and values, while persisted data may contain abbreviated terms or serializations which might be cumbersome for consumption</li>
  </ul>
</div>

## HTTP methods

Although the REST architectural style does not impose a specific protocol, REST APIs are typically implemented using HTTP [[rfc7231]].

<div class="rule" id="api-03">
  <p class="rulelab"><strong>API-03</strong>: Only apply standard HTTP methods</p>
  <p>The HTTP specification [[rfc7231]] and the later introduced <code>PATCH</code> method specification [[rfc5789]] offer a set of standard methods, where every method is designed with explicit semantics. Adhering to the HTTP specification is crucial, since HTTP clients and middleware applications rely on standardized characteristics. Therefore, resources must be retrieved or manipulated using standard HTTP methods.</p>
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
        <td>Retrieve a resource representation for the given URI. Data is only retrieved and never modified.</td>
      </tr>
      <tr>
        <td><code>POST</code></td>
        <td>Create</td>
        <td>Create a subresource as part of a collection resource. This operation is not relevant for singular resources. This method can also be used for <a href="#api-10">exceptional cases</a>.</td>
      </tr>
      <tr>
        <td><code>PUT</code></td>
        <td>Create/update</td>
        <td>Create a resource with the given URI or replace (full update) a resource when the resource already exists.</td>
      </tr>
      <tr>
        <td><code>PATCH</code></td>
        <td>Update</td>
        <td>Partially updates an existing resource. The request only contains the resource modifications instead of the full resource representation.</td>
      </tr>
      <tr>
        <td><code>DELETE</code></td>
        <td>Delete</td>
        <td>Remove a resource with the given URI.</td>
      </tr>
    </tbody>
  </table>
  <p>The following table shows some examples of the use of standard HTTP methods:</p>
  <table>
    <thead>
      <tr>
        <th scope="col">Request</th>
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
  <p class="note">HTTP also defines other methods, e.g. <code>HEAD</code>, <code>OPTIONS</code> and <code>TRACE</code>. For the purpose of this design rule, these operations are left out of scope.</p>
</div>

<div class="rule" id="api-01">
  <p class="rulelab"><strong>API-01</strong>: Adhere to HTTP safety and idempotency semantics for operations</p>
  <p>The HTTP protocol [[rfc7231]] specifies whether an HTTP method should be considered safe and/or idempotent. These characteristics are important for clients and middleware applications, because they should be taken into account when implementing caching and fault tolerance strategies.</p>
  <p>Request methods are considered <i>safe</i> if their defined semantics are essentially read-only; i.e., the client does not request, and does not expect, any state change on the origin server as a result of applying a safe method to a target resource. A request method is considered <i>idempotent</i> if the intended effect on the server of multiple identical requests with that method is the same as the effect for a single such request.</p>
  <p>The following table describes which HTTP methods must behave as safe and/or idempotent:</p>
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
</div>

## Statelessness

One of the key constraints of the REST architectural style is stateless communication between client and server. It means that every request from client to server must contain all of the information necessary to understand the request. The server cannot take advantage of any stored session context on the server as it didn’t memorize previous requests. Session state must therefore reside entirely on the client.

To properly understand this constraint, it's important to make a distinction between two different kinds of state:
* *Session state*: information about the interactions of an end user with a particular client application within the same user session, such as the last page being viewed, the login state or form data in a multi-step registration process. Session state must reside entirely on the client (e.g. in the user's browser).
* *Resource state*: information that is permanently stored on the server beyond the scope of a single user session, such as the user's profile, a product purchase or information about a building. Resource state is persisted on the server and must be exchanged between client and server (in both directions) using  representations as part of the request or response payload. This is actually where the term *REpresentational State Transfer (REST)* originates from.

<p class="note">It's a misconception that there should be no state at all. The stateless communication constraint should be seen from the server's point of view and states that the server should not be aware of any <em>session state</em>.</p>

Stateless communication offers many advantages, including:
* *Simplicity* is increased because the server doesn't have to memorize or retrieve session state while processing requests
* *Scalability* is improved because not having to incorporate session state across multiple requests enables higher concurrency and performance
* *Observability* is improved since every request can be monitored or analyzed in isolation without having to incorporate session context from other requests
* *Reliability* is improved because it eases the task of recovering from partial failures since the server doesn't have to maintain, update or communicate session state. One failing request does not influence other requests (depending on the nature of the failure of course).

<div class="rule" id="api-02">
  <p class="rulelab"><strong>API-02</strong>: Do not maintain session state on the server</p>
  <p>In the context of REST APIs, the server must not maintain or require any notion of the functionality of the client application and the corresponding end user interactions. To achieve full decoupling between client and server, and to benefit from the advantages mentioned above, no session state must reside on the server. Session state must therefore reside entirely on the client.</p>
  <p class="note">The client of a REST API could be a variety of applications such as a browser application, a mobile or desktop application and even another server serving as a backend component for another client. REST APIs should therefore be completely client-agnostic.</p>
</div>

## Relationships

Resources are often interconnected by relationships. Relationships can be modelled in different ways depending on the cardinality, semantics and more importantly, the use cases and access patterns the REST API needs to support.

<div class="rule" id="api-06">
  <p class="rulelab"><strong>API-06</strong>: Use nested URIs for child resources</p>
  <p>When having a child resource which can only exist in the context of a parent resource, the URI should be nested. In that case, the child resource does not necessarily have a top-level collection resource. The best way to explain this design rule is by example.</p>
  <div class="example">
    <p>When modelling resources for a news platform including the ability for users to write comments, it might be a good strategy to model the <a href="#dfn-collection-resource">collection resources</a> hierarchically:</p>
    <pre>https://api.example.org/v1/articles/123/comments</pre>
    <p>The platform might also offer a photo section, where the same commenting functionality is offered. In the same way as for articles, the corresponding sub-collection resource might be published at:</p>
    <pre>https://api.example.org/v1/photos/456/comments</pre>
    <p>These nested sub-collection resources can be used to post a new comment (<code>POST</code> method) and to retrieve a list of comments (<code>GET</code> method) belonging to the parent resource, i.e. the article or photo. An important consideration is that these comments could never have existed without the existence of the parent resource.</p>
    <p>From the consumer's perspective, this approach makes logical sense, because the most obvious use case is to show comments below the parent article or photo (e.g. on the same web page) including the possibility to paginate through the comments. The process of posting a comment is separate from the process of publishing a new article. Another client use case might also be to show a global <em>latest comments</em> section in the sidebar. For this use case, an additional resource could be provided:</p>
    <pre>https://api.example.org/v1/comments/latest</pre>
    <p>If this would have not been a meaningful use case, this resource should not exist at all. Because it doesn't make sense to post a new comment from a global context, this resource would be read-only (only <code>GET</code> method is supported) and may possibly provide a more compact representation than the parent-specific sub-collections.</p>
    <p>The <a href="#dfn-singular-resource">singular resources</a> for comments, referenced from all 3 collections, could still be modelled on a higher level to avoid deep nesting of URIs (which might increase complexity or problems due to the URI length):</p>
    <pre>https://api.example.org/v1/comments/123<br />https://api.example.org/v1/comments/456</pre>
    <p>Although this approach might seem counterintuitive from a technical perspective (we simply could have modelled a single <code>/comments</code> resource with optional filters for article and photo) and might introduce partially redundant functionality, it makes perfect sense from the perspective of the consumer, which increases developer experience.</p>
  </div>
</div>

## Operations


<div class="rule" id="api-10">
  <p class="rulelab"><strong>API-10</strong>: Model resource operations as a sub-resource or dedicated resource</p>
  <p>There are resource operations which might not seem to fit well in the CRUD interaction model. For example, approving of a submission or notifying a customer. Depending on the type of the operation, there are three possible approaches:</p>
  <ol>
    <li>Re-model the resource to incorporate extra fields supporting the particular operation. For example, an approval operation can be modelled in a boolean attribute <code>goedgekeurd</code> that can be modified by issuing a <code>PATCH</code> request against the resource. Drawback of this approach is that the resource does not contain any metadata about the operation (when and by whom was the approval given? Was the submission declined in an earlier stage?). Furthermore, this requires a fine-grained authorization model, since approval might require a specific role.</li>
    <li>Treat the operation as a sub-resource. For example, model a sub-collection resource <code>/inzendingen/12/beoordelingen</code> and add an approval or declination by issuing a <code>POST</code> request. To be able to retrieve the review history (and to consistently adhere to the REST principles), also support the <code>GET</code> method for this resource. The <code>/inzendingen/12</code> resource might still provide a <code>goedgekeurd</code> boolean attribute (same as approach 1) which gets automatically updated on the background after adding a review. This attribute should however be read-only.</li>
    <li>In exceptional cases, the approaches above still don't offer an appropriate solution. An example of such an operation is a global search across multiple resources. In this case, the creation of a dedicated resource, possibly nested under an existing resource, is the most obvious solution. Use the imperative mood of a verb, maybe even prefix it with a underscore to distinguish these resources from regular resources. For example: <code>/search</code> or <code>/_search</code>. Depending on the operation characteristics, <code>GET</code> and/or <code>POST</code> method may be supported for such a resource.</li>
  </ol>
  <p>In this design rule, approach 2 and 3 are preferred.</p>
</div>

## Documentation

An API is as good as the accompanying documentation. The documentation has to be easily findable, searchable and publicly accessible. Most developers will first read the documentation before they start implementing. Hiding the technical documentation in PDF documents and/or behind a login creates a barrier for both developers and search engines.

<div class="rule" id="api-16">
  <p class="rulelab"><strong>API-16</strong>: Use OpenAPI Specification for documentation</p>
  <p>The OpenAPI Specification (OAS) [[OPENAPIS]] defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic.</p>
  <p>API documentation must be provided in the form of an OpenAPI definition document which conforms to the OpenAPI Specification (from v3 onwards). As a result, a variety of tools can be used to render the documentation (e.g. Swagger UI or ReDoc) or automate tasks such as testing or code generation. The OAS document should provide clear descriptions and examples.</p>
</div>

<div class="rule" id="api-17">
  <p class="rulelab"><strong>API-17</strong>: Publish documentation in Dutch unless there is existing documentation in English</p>
  <p>In line with design rule <a href="#api-04">API-04</a>, the OAS document (e.g. descriptions and examples) should be written in Dutch. If relevant, you may refer to existing documentation written in English.</p>
</div>

<div class="rule" id="api-51">
  <p class="rulelab"><strong>API-51</strong>: Publish OAS document at a standard location in JSON-format</p>
  <p>To make the OAS document easy to find and to facilitate self-discovering clients, there should be one standard location where the OAS document is available for download. Clients (such as Swagger UI or ReDoc) must be able to retrieve the document without having to authenticate. Furthermore, the CORS policy for this URI must allow external domains to read the documentation from a browser environment.</p>
  <p>The standard location for the OAS document is a URI called <code>openapi.json</code> or <code>openapi.yaml</code> within the base path of the API. This can be convenient, because OAS document updates can easily  become part of the CI/CD process.</p>
  <p>At least the JSON format must be supported. When having multiple (major) versions of an API, every API should provide its own OAS document(s).</p>
  <div class="example">
    <p>An API having base path <code>https://api.example.org/v1/</code> must publish the OAS document at:</p>
    <pre>https://api.example.org/v1/openapi.json</pre>
    <p>Optionally, the same OAS document may be provided in YAML format:</p>
    <pre>https://api.example.org/v1/openapi.yaml</pre>
  </div>
</div>

## Versioning

APIs should always be versioned. Versioning facilitates the transition between changes. Old and new versions are offered during a limited deprecation period. A maximum of 3 versions of the API should be supported. Users decide for themselves the moment they transition from the old to the new version of an API, as long as they do this prior to the end of the deprecation period.

<div class="rule" id="api-19">
  <p class="rulelab"><strong>API-19</strong>: Schedule a fixed transition period for a new major API-version</p>
  <p>Old and new versions (maximum 3) of an API should be provided concurrently for a limited, but fixed transition period.</p>
</div>

The URI of an API should include the major version number only. This allows the exploration of multiple versions of an API in the browser.

The version number start at 1 and is raised with 1 for every major release that breaks the backwards compatibility of the interface. The minor and patch version numbers are always in the response header of the message in the `major.minor.patch` format (see also https://semver.org/)

The header (both request and response) should be implemented as follows:

|HTTP header|Description|
|-|-|
|`API-Version`|Indicates a specific API version in the context of a specific request. For example: `API-version: 1.2.56`|

Using an optional request header one minor/patch version can be addressed. This means, that the client can send a request header to not only access versions v1 and v2 (the designated versions that are addressed in the URIs) but also access one *older* or *newer* version of API in the (pre-) production or acceptance test environment. For example, the following URIs point to the designated production release of the API that can be accessed in the URI:

`https://service.omgevingswet.overheid.nl/publiek/catalogus/api/raadplegen/v1`

`API-version: 1.0.2` (response header)

`https://service.omgevingswet.overheid.nl/publiek/catalogus/api/raadplegen/v2`

`API-version: 2.1.0` (response header)

Leaving off the request-header (`API-version: x.y.z`), one addresses always the *designated* production version. In case there is one other designated version available, e.g. v2.1.1, then it can be provided and addressed at the same base endpoint passing the correct request parameter:

`API-version: 2.1.1` (request header)

`https://service.omgevingswet.overheid.nl/publiek/catalogus/api/raadplegen/v2`

`API-version: 2.1.1` (response header)

Examples of backward compatible changes are the addition of an endpoint or an optional attribute to the payload.

<div class="rule" id="api-20">
  <p class="rulelab"><strong>API-20</strong>: Include the major version number only in the URI</p>
  <p>The URI of an API should include the major version number only. The minor and patch version numbers are in the response header of the message. Minor and patch versions have no impact on existing code, but major version do.</p>
</div>

An API will never be fully stable. Change is inevitable. Managing change is important. In general, well documented and timely communicated deprecation schedules are the most important for API users.

<div class="rule" id="api-55">
  <p class="rulelab"><strong>API-55</strong>: Publish a changelog for API changes between versions</p>
  <p>When releasing new versions, all API changes must be documented in a publicly available changelog.</p>
</div>

<div class="rule" id="api-18">
  <p class="rulelab"><strong>API-18</strong>: Include a deprecation schedule when deprecating features or versions</p>
  <p>When deprecating features or versions, a deprecation schedule must be published. This document should be published on a public web page. Furthermore, active clients should be informed by e-mail once the schedule has been updated or when versions have reached end-of-life.</p>
</div>
