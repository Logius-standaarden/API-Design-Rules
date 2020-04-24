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

A resource describing a single thing is called a [singular resource](#dfn-singular-resource). Resources can also be grouped into collections, which can typically be paged, sorted and filtered. Most often all collection members have the same type, but this is not necessarily the case. A resource describing multiple things is called a [collection resource](#dfn-collection-resource). Collection resources typically contain references to the underlying singular resources.

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
  <p class="rulelab"><strong>API-48</strong>: Leave off trailing slashes from API endpoints</p>
  <p>According to the URI specification [[rfc3986]], URIs may contain a trailing slash. However, for REST APIs this is considered as a bad practice since a URI including or excluding a trailing slash might be interpreted as a different resource (which is strictly speaking the correct interpretation).</p>
  <p>To avoid confusion and ambiguity, a URI should never contain a trailing slash. When requesting a resource including a trailing slash, this should result in a 404 (not found) error response and not a redirect. This enforces API consumers to use the correct URI.</p>
  <div class="example">
    <p>URI without a trailing slash (good):</p>
    <pre>https://api.example.org/v1/gebouwen</pre>
    <p>URI with a trailing slash (bad):</p>
    <pre>https://api.example.org/v1/gebouwen/</pre>
  </div>
</div>

<div class="rule" id="api-53">
  <p class="rulelab"><strong>API-53</strong>: Hide irrelevant implementation details</p>
  <p>One could translate internal data models <i>as-is</i> to resources, but this should not be done by definition. The point is to hide all not relevant implementation details.</p>
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
        <td>Create a subresource as part of a collection resource. This operation is not relevant for singular resources.</td>
      </tr>
      <tr>
        <td><code>PUT</code></td>
        <td>Create/update</td>
        <td>Create a resource with the given URI or replace (full update) a resource when the resource already exists.</td>
      </tr>
      <tr>
        <td><code>PATCH</code></td>
        <td>Update</td>
        <td>Partially updates an existing resource. The request only contains the data that has to be modified using the designated JSON Merge Patch format [[rfc7396]].</td>
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
  <p class="rulelab"><strong>API-01</strong>: Operations are safe and/or idempotent</p>
  <p>The HTTP protocol [[rfc7231]] specifies whether an HTTP method should be considered safe and/or idempotent. These characteristics are important for clients and middleware applications, because they should be taken into account when implementing caching and fault tolerance strategies.</p>
  <p>Request methods are considered <i>safe</i> if their defined semantics are essentially read-only; i.e., the client does not request, and does not expect, any state change on the origin server as a result of applying a safe method to a target resource. A request method is considered <i>idempotent</i> if the intended effect on the server of multiple identical requests with that method is the same as the effect for a single such request.</p>
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

## Stateless

<div class="rule" id="api-02">
  <p class="rulelab"><strong>API-02</strong>: Do not maintain state information at the server</p>
  <p>REST makes use of the client stateless server design principle derived from client server with the additional constraint that it is not allowed to maintain the state at the server. Each request from the client to the server has to contain all information required to process the request without the need to use state-information at the server.</p>
</div>

## How to deal with relations?

If a relation can only exist in the context of another resource (1 to n relation), then the dependent resource (child) can only be retrieved through the parent. The next example explains this. A status belongs to one application. Statuses can be retrieved through the endpoint `/aanvragen`:

|Request|Description|
|-|-|
|`GET /aanvragen/12/statussen`|Retrieves a list of statuses of application #12|
|`GET /aanvragen/12/statussen/5`|Retrieves a specific status (#5) of application #12|
|`POST /aanvragen/12/statussen`|Creates a new status for application #12|
|`PUT /aanvragen/12/statussen/5`|Modifies status #5 of application #12 completely|
|`PATCH /aanvragen/12/statussen/5`|Modifies status #5 of application #12 partially|
|`DELETE /aanvragen/12/statussen/5`|Deletes status #5 of application #12|

<div class="rule" id="api-06">
  <p class="rulelab"><strong>API-06</strong>: Create relations of nested resources within the endpoint</p>
  <p>Preferrably, create relation within the endpoint if a relation can only exist with another resource (nested resource). In that case, the dependent resource does not have its own endpoint.</p>
</div>

In case of an n-to-n relation, there are various ways to retrieve a resource. The following requests respond identically:

|Request|Description|
|-|-|
|`GET /aanvragen/12/activiteiten`|Retrieves a list of activities for application #12|
|`GET /activiteiten?aanvraag=12`|Retrieves a list of activities, filtered by application #12|

In case of an n-to-m relation, the API supports the retrieval of individual resources anyway, at least providing the identifier of the related resource (relation). The user has to request the endpoint of the related resource (relation) to retrieve this one. This is referred to as *lazy loading*. The user decides whether to load the relation and when.

## Custom representation

The user of an API does not always require the complete representation (i.e. all attributes) of a resource. Providing the option to select the required attributes in the requests reduces network traffic (relevant for light-weight applications), simplifies the use of the API and makes it adjustable (fit-for-use). The query parameter `fields` supports this usage. The query parameter accepts a comma-separated list of field names. The result is a custom representation. For example, the following request retrieves sufficient information to show a sorted list of applications (*aanvragen*):

`GET /aanvragen?fields=id,onderwerp,aanvrager,wijzigDatum&status=open&sorteer=wijzigDatum`

In the case of HAL, linked resources are embedded in the default representation. Applying the aforementioned `fields` parameter, the contents of the  body can be customised as required.

<div class="rule" id="api-09">
  <p class="rulelab"><strong>API-09</strong>: Implement custom representation if supported</p>
  <p>Provide a comma-separated list of field names using the query parameter fields te retrieve a custom representation. In case non-existent field names are passed, a <code>400 Bad Request</code> error message is returned.</p>
</div>

## How to implement operations that do not fit the CRUD model?

There are resource operations that are not related to data manipulation (CRUD). Examples of this kind of operations are: changing the state (activate and deactivate) of a resource and marking (starring) a resource. Depending on the type of operation there are three approaches:

1. Restructure the operation to incorporate it into the resource. This approach applies if the operation does not require any parameters. For example, an activation operation can be assigned to a boolean field `geactiveerd` that can be modified by a `PATCH` to the resource.

2. Treat the operation as a sub-resource. For example, mark an application by `PUT /aanvragen/12/markeringen` and remove a mark by `DELETE /aanvragen/12/markeringen`. To fully follow the REST principles, also provide the `GET` operation for this sub-resource.

3. Sometimes there is no logical way to link an operation to an existing resource. An example of such an operation is a search across multiple resources. This operation cannot be assigned to any specific resource. In this case, the creation of an independent service endpoint is the most obvious solution. Use the imperative mood of a verb, maybe even prefix it with a underscore, to distinguish these endpoints from dedicated resource endpoints. For example: `/search` or `/_search`.

The Dutch API strategy prefers approach 2 and 3.

<div class="rule" id="api-10">
  <p class="rulelab"><strong>API-10</strong>: Implement operations that do not fit the CRUD model as sub-resources</p>
  <p>Operations that do not fit the CRUD model are implemented as follows:</p>
  <ul>
    <li>Treat an operation as a sub-resource.</li>
    <li>Only in exceptional cases, an operator is implemented as an endpoint.</li>
  </ul>
</div>

## Technical documentation

An API is as good as the accompanying technical documentation. The documentation has to be easily findable, searchable and publicly accessible. Most developers will first read the documentation before they start the implementation. Hiding the technical documentation in PDF documents and/or behind a login creates a barrier not only for developers but also for search engines. Technical specifications (technical documentation) are available as Open API Specification (OAS) v3.0 or newer. Also provide context documentation as described in paragraph 3.4.3.

<div class="rule" id="api-16">
  <p class="rulelab"><strong>API-16</strong>: Use OAS 3.0 for documentation</p>
  <p>Publish specifications (documentation) as Open API Specification (OAS) 3.0 or higher.</p>
</div>

<div class="rule" id="api-17">
  <p class="rulelab"><strong>API-17</strong>: Publish documentation in Dutch unless there is existing documentation in English or there is an official English glossary available</p>
  <p>Publish API documentation in Dutch. You may refer to existing documentation in English and in case there is an official English glossary available.</p>
</div>

The technical documentation should provide examples including full request and response cycles. Developers should be able to test (and perform) requests directly from within the technical documentation. Furthermore, each error should be described and labeled with a unique error code to trace errors.

Once an API is in production, the *contract* (interface) should not be changed without prior notice. The documentation should include a deprecation schedule and all details of the change. Changes should be published not only as a changelog on a publicly available blog but also through a mailing list, using the email addresses obtained when the API keys were issued.

<div class="rule" id="api-18">
  <p class="rulelab"><strong>API-18</strong>: Include a deprecation schedule when publishing API changes</p>
  <p>API changes and a deprecation schedule should be published not only as a changelog on a publicly available blog but also through a mailing list.</p>
</div>

<div class="rule" id="api-51">
  <p class="rulelab"><strong>API-51</strong>: Publish OAS at the base-URI in JSON-format</p>
  <p>Publish up-to-date documentation in the OpenAPI Specification (OAS) at the publicly accessible root endpoint of the API in JSON format:</p>
  <p><code>https://service.omgevingswet.overheid.nl/publiek/catalogus/api/raadplegen/v1</code></p>
  <p>Makes the OAS relevant to v1 of the API available. Thus, the up-to-date documentation is linked to a unique location (that is
always concurrent with the features available in the API).</p>
</div>

## Versioning

APIs should always be versioned. Versioning facilitates the transition between changes. Old and new versions are offered during a limited deprecation period. A maximum of 3 versions of the API should be supported. Users decide for themselves the moment they transition from the old to the new version of an API, as long as they do this prior to the end of the deprecation period.

<div class="rule" id="api-19">
  <p class="rulelab"><strong>API-19</strong>: Allow for a maximum 1 year transition period to a new API version</p>
  <p>Old and new versions (maximum 3) of an API should be provided concurrently for a limited, maximum 1 year transition period.</p>
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

<section data-format="markdown" class="informative">
## Extensions

The extensions document exists in a "latest published version" ("Gepubliceerde versie" in Dutch) and a "latest editors draft" ("Werkversie" in Dutch).
The "latest editor's draft" is actively being worked on and can be found on Github. It contains the most recent changes.

The documents can be found here:

[Extensions Gepubliceerde versie](https://docs.geostandaarden.nl/api/API-Strategie-ext/)
[Extensions Werkversie](https://geonovum.github.io/KP-APIs/API-strategie-extensies/)

</section>
