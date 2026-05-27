# The core set of Design Rules

## Summary

<div id="design-rule-summary"></div>

## Resources

The REST architectural style is centered around the concept of a [=resource=]. A resource is an abstraction of a conceptual entity, identified by a globally unique [=URI=]. It may correspond to anything from a physical object (e.g. a building or a person) to an abstract concept (e.g. a permit, an event or today's weather). Although a resource is not tied to any specific exchange format, its current state can be transferred to clients through one or more representations, such as JSON or XML.

<span id="api-05"></span>
<div class="rule" id="/core/naming-resources" data-type="functional">
   <p class="rulelab">Use nouns to name resources</p>
   <dl>
   <dt>Statement</dt>
   <dd>
   Resources MUST be referred to using nouns (instead of verbs) that represent entities meaningful to the API consumer.
   <aside class="example">
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
   </aside>
   </dd>
   <dt>Rationale</dt>
   <dd>
   Resources describe objects, not actions.
   </dd>
</dl>
</div>

A resource that corresponds to a single conceptual entity is referred to as a [=singular resource=]. Resources can also be logically grouped into collections, which are themselves resources and typically support operations like paging, sorting, and filtering. While collection members are often of the same type, this is not strictly required. A collection resource contains references (URIs) to the individual singular resources it includes.

<span id="api-54"></span>
<div class="rule" id="/core/naming-collections" data-type="functional">
   <p class="rulelab">Use plural nouns to name collection resources</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         Collection resources MUST be referred to using plural nouns.
      </dd>
      <dt>Rationale</dt>
      <dd>
         The path segment describing the name of the collection resource MUST be written in the plural form.
         <p>Singular resources contained within a collection resource are generally named by appending a path segment for the identification of each individual resource.
         <p>Singular resources that stand on their own, i.e. which are not contained within a collection resource, MUST be named with a path segment that is written in the singular form.
         <aside class="example">
            <p>Collection resources describe a list of things:</p>
            <pre class="nohighlight">https://api.example.org/v1/gebouwen
https://api.example.org/v1/vergunningen</pre>
            <p>Singular resource that is contained within a collection resource:</p>
            <pre class="nohighlight">https://api.example.org/v1/gebouwen/3b9710c4-6614-467a-ab82-36822cf48db1
https://api.example.org/v1/vergunningen/d285e05c-6b01-45c3-92d8-5e19a946b66f</pre>
            <p>Singular resource describing the profile of the currently authenticated user:</p>
            <pre class="nohighlight">https://api.example.org/v1/gebruikersprofiel</pre>
         </aside>
      </dd>
   </dl>
</div>

<span id="api-04"></span>
<div class="rule" id="/core/interface-language" data-type="functional">
   <p class="rulelab">Define interfaces in Dutch unless there is an official English glossary available</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         Resources and the underlying attributes SHOULD be defined in the Dutch language unless there is an official English glossary available.
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>If your API references terms used in law or official government communication for example, then these terms have a well-defined meaning. The exact meaning of concepts is often lost in translation, hence such terms SHOULD be defined in the Dutch language.
         <p>Publishing an API for an international (e.g. European) audience might be a reason to define interfaces in English instead.
         <p>Note that glossaries exist that define useful sets of attributes which SHOULD preferably be reused. Examples can be found at <a href="http://schema.org/docs/schemas.html">schema.org</a>.
      </dd>
   </dl>
</div>

<span id="api-48"></span>
<div class="rule" id="/core/no-trailing-slash" data-type="technical">
   <p class="rulelab">Leave off trailing slashes from URIs</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         A [=URI=] MUST NOT contain a trailing slash. When requesting a resource including a trailing slash, this MUST result in a `404` (not found) error response and not a redirect. This forces API consumers to use the correct [=URI=].
         <div class="note">
            This rule does not apply to the root resource (append <code>/</code> to the service root URL).
         </div>
      </dd>
      <dt>Rationale</dt>
      <dd>
         Leaving off trailing slashes, and not implementing a redirect, forces API consumers to use the correct URI. This avoids confusion and ambiguity.
         <aside class="example">
            <p>URI without a trailing slash (correct):</p>
            <pre class="nohighlight example-correct">https://api.example.org/v1/gebouwen</pre>
            <p>URI with a trailing slash (incorrect):</p>
            <pre class="nohighlight example-incorrect">https://api.example.org/v1/gebouwen/</pre>
            <p>URI for the root resource is exempt (correct):</p>
            <pre class="nohighlight example-correct">https://api.example.org/v1/</pre>
         </aside>
      </dd>
      <dt>How to test</dt>
      <dd>
         Analyse all resource paths (except the root resource path) in the OpenAPI Description to confirm no resource paths end with a forward slash (<code>/</code>).
      </dd>
   </dl>
</div>

<div class="rule" id="/core/path-segments-kebab-case" data-type="technical">
   <p class="rulelab">Use kebab-case in path segments</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <div>
            <p>Path segments of a [=URI=] MUST only contain lowercase letters, digits or hyphens. This is also known as <a href="https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case">kebab-case</a>. Hyphens MUST only be used to deliniate distinct words. This also implies that diacritics MUST be normalized and special characters MUST be omitted.
            <p>Another implication of this rule is that file extensions MUST NOT be used. Resources SHOULD use the <code>Accept</code> header for content negotation.
            <p>The last path segment MAY start with `_`, which is used as a convention to implement <a href="#/core/resource-operations">operations</a>
         </div>
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Some web servers and frameworks do not handle case sensitivity or special characters of URIs well. The use of kebab-case path segments ensures compatibility with a broad range of systems. It is a more common implementation choice for path segments than camelCase or snake_case. Information (such as names of objects) that requires special characters can be part of the request body instead of being in the URI.
         <aside class="example">
            <p>URI path segment using kebab-case (correct):</p>
            <pre class="nohighlight example-correct">https://api.example.org/v1/financiele-claims</pre>
            <p>URI path segment not using hyphens to delineate words (incorrect):</p>
            <pre class="nohighlight example-incorrect">https://api.example.org/v1/financiele_claims</pre>
            <p>URI path segment not lowercase characters (incorrect):</p>
            <pre class="nohighlight example-incorrect">https://api.example.org/v1/financieleClaims</pre>
            <p>URI path segment ending with a hyphen (incorrect):</p>
            <pre class="nohighlight example-incorrect">https://api.example.org/v1/organisatie-</pre>
            <p>URI path segment starting with a hyphen (incorrect):</p>
            <pre class="nohighlight example-incorrect">https://api.example.org/v1/-organisatie</pre>
            <p>URI path segment using normalized diacritics (correct):</p>
            <pre class="nohighlight example-correct">https://api.example.org/v1/scenes</pre>
            <p>URI path segment using diacritics (incorrect):</p>
            <pre class="nohighlight example-incorrect">https://api.example.org/v1/scènes</pre>
            <p>URI path segment omitting special characters (correct):</p>
            <pre class="nohighlight example-correct">https://api.example.org/v1/schemas</pre>
            <p>URI path segment using special characters (incorrect):</p>
            <pre class="nohighlight example-incorrect">https://api.example.org/v1/schema's</pre>
            <p>URI path segment using file extensions (incorrect):</p>
            <pre class="nohighlight example-incorrect">https://api.example.org/v1/schema.txt</pre>
            <p>Last URI path segment starting with <code>_</code> (correct):</p>
            <pre class="nohighlight example-correct">https://api.example.org/v1/organisaties/_zoek</pre>
         </aside>
      </dd>
      <dt>How to test</dt>
      <dd>
         Loop all resource paths in the OpenAPI Description and check that all resource path segments use lowercase letters, digits or hyphens (<code>-</code>). The last path segment is allowed to start with a <code>_</code>.
         <aside class="example">
            You can use the following regex for each resource path:
            <pre><code>^(\/|(\/_[a-z0-9]+|\/(([a-z0-9\-]+|{[^}]+})(\/([a-z0-9\-\.]+|{[^}]+}))*)(\/_[a-z]+)?)\/?)$</code></pre>
         </aside>
      </dd>
   </dl>
</div>

<div class="rule" id="/core/query-keys-camel-case" data-type="technical">
   <p class="rulelab">Use camelCase in query keys</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <div>
            <p>Query keys in a [=URI=] MUST only contain letters and digits, where the first letter of each word is capitalized, except for the first letter (MUST NOT be a digit) of the entire compound word. This is also known as <a href="https://developer.mozilla.org/en-US/docs/Glossary/Camel_case">lower camelCase</a>. This also implies that diacritics MUST be normalized and special characters MUST be omitted.
         </div>
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Query keys are often converted to JSON object keys, where camelCase is the naming convention to avoid compatibility issues with JavaScript when deserializing objects.
         <aside class="example">
            <p>URI query key using camelCase (correct):</p>
            <pre class="nohighlight example-correct">https://api.example.org/v1/gebouwen?typeGebouw=woning</pre>
            <p>URI query key not using camelCase (incorrect):</p>
            <pre class="nohighlight example-incorrect">https://api.example.org/v1/gebouwen?type-gebouw=woning</pre>
            <p>URI query key starts with digit (incorrect):</p>
            <pre class="nohighlight example-incorrect">https://api.example.org/v1/gebouwen?2ndReviewer=alice</pre>
         </aside>
      </dd>
      <dt>How to test</dt>
      <dd>
         Loop all resource paths in the OpenAPI Description and check that all query keys use letters, digits in camelCase. You can use the following regex for each query key:
         <aside class="example">
            <pre><code>^\$?[a-z][a-z\d]*([A-Z][a-z\d]*)*$</code></pre>
         </aside>
      </dd>
   </dl>
</div>

<span id="api-53"></span>
<div class="rule" id="/core/hide-implementation" data-type="functional">
   <p class="rulelab">Hide irrelevant implementation details</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         An API SHOULD NOT expose implementation details of the underlying application, development platforms/frameworks or database systems/persistence models.
      </dd>
      <dt>Rationale</dt>
      <dd>
         <ul>
            <li>The primary motivation behind this design rule is that an API design MUST focus on usability for the client, regardless of the implementation details under the hood.</li>
            <li>The API, application and infrastructure need to be able to evolve independently to ease the task of maintaining backwards compatibility for APIs during an agile development process.</li>
            <li>The API design of Convenience,- and Process API types (as described in <a href="https://docs.geostandaarden.nl/api/def-hr-API-Strategie-20200204/#aanbeveling-2-analyseer-welke-api-s-je-aan-moet-bieden-welke-informatievragen-wil-je-beantwoorden">Aanbeveling 2</a> of the NL API Strategie) SHOULD NOT be a 1-on-1 mapping of the underlying domain- or persistence model.</li>
            <li>The API design of a System API type (as described in <a href="https://docs.geostandaarden.nl/api/def-hr-API-Strategie-20200204/#aanbeveling-2-analyseer-welke-api-s-je-aan-moet-bieden-welke-informatievragen-wil-je-beantwoorden">Aanbeveling 2</a> of the NL API Strategie) MAY be a mapping of the underlying  persistence model.</li>
            <li>The API SHOULD NOT expose information about the technical components being used, such as development platforms/frameworks or database systems.</li>
            <li>The API SHOULD offer client-friendly attribute names and values, while persisted data may contain abbreviated terms or serializations which might be cumbersome for consumption.</li>
         </ul>
      </dd>
   </dl>
</div>

<div class="rule" id="/core/lang-code" data-type="technical">
   <p class="rulelab">Use standard language codes and field names for language content</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>A resource containing language content MUST follow <a href="https://www.rfc-editor.org/info/bcp47">BCP 47</a> [[RFC4647]] [[RFC5646]].
         All fields in requests and responses containing monolingual content MUST be an object with two fields (JSON) or tag with two subtags (XML). In it, <code>"taal"</code> (Dutch) or <code>"language"</code> (English) contains a value conforming [[RFC5646]] and <code>"waarde"</code> (Dutch) or <code>"value"</code> (English) contains the lingual content.
         <p class="note">Use the <a href="https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry">language subtag registry</a> maintained by IANA for possible language subtags.
         <aside class="example">
            The following example shows a response for a resource with monolingual content in an API with Dutch as its <a href="#/core/interface-language">interface language</a>.
            <pre><code class="json">{
  "ondertitel": {
    "taal": "nl-NL",
    "waarde": "Een blogpost over API's"
  }
}
</code></pre>
         </aside>
         <aside class="example">
            The following example shows a response for a resource with monolingual content in an API with English as its <a href="#/core/interface-language">interface language</a>.
            <pre><code class="json">{
  "subtitle": {
    "language": "nl-NL",
    "value": "Een blogpost over API's"
  }
}
</code></pre>
         </aside>
         <p>All fields in requests and responses containing multilingual content MUST be an array of objects (JSON) or multiple children tags (XML). All elements either have a field <code>"taal"</code> (Dutch) or all have a field <code>"language"</code> (English) with a value conforming [[RFC5646]] and all have a field <code>"waarde"</code> (Dutch) or have a field <code>"value"</code> (English) with the lingual content.
         <aside class="example">
            The following example shows a response for a resource with multilingual content in an API with Dutch as its <a href="#/core/interface-language">interface language</a>.
            <pre><code class="json">{
  "ondertitel": [
     {
      "taal": "nl-NL",
      "waarde": "Een blogpost over API's"
    },
    {
      "taal": "en-GB",
      "waarde": "A blogpost about API's"
    }
  ]
}
</code></pre>
         </aside>
         <aside class="example">
            The following example shows a response for a resource with multilingual content in an API with English as its <a href="#/core/interface-language">interface language</a>.
            <pre><code class="json">{
  "subtitle": [
     {
      "language": "nl-NL",
      "value": "Een blogpost over API's"
     },
     {
       "language": "en-GB",
       "value": "A blogpost about API's"
     }
  ]
}
</code></pre>
         </aside>
         <p class="warning">[[?ISO3166-1]] concerns identifiers of countries and MUST NOT be used to denote languages, since countries and languages are not equivalent.
         <p class="note">Following [[RFC4647]] a language code in [[?ISO-639-1]] format matches a language tag in [[RFC5646]] regardless of language subtag.
      </dd>
      <dt>Rationale</dt>
      <dd>
         Standardized language codes removes ambiguity in language handling between systems, potentially present in separate regions with different (spoken) languages.
      </dd>
      <dt>How to test</dt>
      <dd>
         <ul>
            <li>Analyse all fields and if the field represents a language and ensure either one of the following options applies:
            <ul>
               <li>In case of monolingual content, ensure it is an object (JSON) or tag (XML). It has two fields <code>"taal"</code> and <code>"waarde"</code> or it has two fields <code>"language"</code> and <code>"value"</code>.
               <li>In case of multilingual content, ensure it is an array consisting of objects (JSON) or multiple children tags (XML). Either all objects/children have two fields <code>"taal"</code> and <code>"waarde"</code> or all objects/children have two fields <code>"language"</code> and <code>"value"</code>.
            </ul>
            <li>Confirm each field <code>"taal"</code> or <code>"language"</code> has a value in [[RFC5646]] format.
         </ul>
      </dd>
   </dl>
</div>

## Date and time

Handling date and time is tricky and can lead to confusion among clients. The date-time rules remove ambiguity and provide clarity in the API contract between servers and clients.

<aside class="example">
   <p>A child is born on March 20th 2025 in The Netherlands. If a client sends a request with value <code>2025-03-20T00:00:00+01:00</code>, timezone conversion would result in <code>2025-03-19T23:00:00Z</code>. When the client receives this value in a response and incorrectly converts it to a date (by removing the time portion), this would result in <code>2025-03-19</code>.
   <p>Ambiguous date and time handling can therefore lead to misinterpretation and changes of days/months/years depending on which component performs which incorrect conversion. Clients could incorrectly remove a time portion from a datetime value if the value should have been a date in the first place. By specifying which formats are allowed in which fields, the odds of invalid conversion are reduced.
</aside>

<div class="rule" id="/core/date-time/format" data-type="technical">
   <p class="rulelab">Use standard format for date, datetime and time</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>All date, datetime and time fields in requests and responses MUST adhere to [[RFC9557]] and [[ISO8601-1]] format. Each field in the OpenAPI specification MUST set <code class="json">"type": "string"</code> and set <code>"format"</code> to the <a href="https://spec.openapis.org/registry/format/">OpenAPI format</a> as listed in the following table:
         <table>
            <thead>
               <tr>
                  <th scope="col">Field type</th>
                  <th scope="col">ISO8601 format</th>
                  <th scope="col">OpenAPI format</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Date</td>
                  <td>full-date</td>
                  <td><code class="json">"format": "date"</code></td>
               </tr>
               <tr>
                  <td>Datetime</td>
                  <td>date-time</td>
                  <td><code class="json">"format": "date-time"</code></td>
               </tr>
               <tr>
                  <td>Time</td>
                  <td>partial-time</td>
                  <td><code class="json">"format": "time-local"</code></td>
               </tr>
            </tbody>
         </table>
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Implementing RFC9557 and ISO 8601 removes ambiguity in date handling between systems and timezones.
         <div class="note">RFC9557 is a profile on ISO8601, but is not a strict subset of allowed notations. Practically, to adhere to both, the following limitations MUST be applied to RFC9557:
           <ul>
              <li>In a field with a date-time value, the date and time component MUST be separated by a "T" in uppercase.
              <li>The timezone offset "Z" MUST be uppercase.
              <li>"-00:00" MUST NOT be used as timezone offset.
           </ul>
         </div>
      </dd>
      <dt>How to test</dt>
      <dd>
         Analyse all fields and if the field represents a date, date-time or time, ensure it has the correct format according to the table above.
      </dd>
   </dl>
</div>

<div class="rule" id="/core/date-time/timezone" data-type="functional">
   <p class="rulelab">Allow all timezone offsets in requests and use UTC in responses</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>APIs MUST accept any timezone offset in fields in requests containing a datetime. Fields in responses containing a datetime SHOULD be in UTC (e.g. <code>Z</code> as timezone offset).
         <aside class="example">
            <p>A field "meetingStartTime" containing a datetime value to denote the start time of a meeting. Depending on the local timezone of the client, the UTC datetime value is converted to that local timezone.
            <p>For example, a Dutch government worker travels to Ottowa in Canada and has an online meeting with their Dutch colleagues in The Netherlands. Instead of showing the meeting start time in the timezone of The Netherlands, it is shown in the relevant local timezone in Ottowa.
         </aside>
         <p>If the original timezone is relevant for users (such as the timezone in which a value is registered), the timezone offset MUST be stored and published as a separate field in [[ISO8601-1]] format <code>time-offset</code>.
         <aside class="example">
            <p>A response containing a field "timeOfBirth" with a datetime value to denote the time of birth of a child in The Netherlands also has a field "timeOfBirthTimezone" with the relevant timezone offset (<code>+01:00</code> or <code>+02:00</code>).
         </aside>
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Allowing clients to use any timezone offset in requests results in flexibility and less complexity for users. Using UTC in responses results in clarity and removes ambiguity.
         <p class="note">While storage formats are outside the scope of this specification, it is recommended to use appropriate temporal datatypes (such as <code>DATE</code> and <code>TIMESTAMPTZ</code>). Many database systems store these values internally in UTC and handle timezone conversion automatically on read/write.
      </dd>
   </dl>
</div>

<div class="rule" id="/core/date-time/date-omit-time-portion" data-type="technical">
   <p class="rulelab">Omit time portion for date fields</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>If the time portion is not relevant, <code>date</code> format MUST be used instead of <code>date-time</code> format.
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Appending a default or irrelevant time portion to a date field can lead to interpretation errors. A publish date of <code>2025-07-24T00:00:00Z</code> could for instance be rendered as July 23 in Ireland. A default time of 23:59 would in turn cause date confusion east of Greenwich.
         <p class="note">To prevent conversion errors between storage and API, it is recommended to also store date values without a time portion (i.e. not as a timestamp).
         <aside class="example">
            <p>A response containing a field "birthDate" with a date value to denote the date of birth of a child in The Netherlands.
         </aside>
      </dd>
      <dt>How to test</dt>
      <dd>
         Analyse all fields that set format to "date-time" and ensure that the fields do not represent solely a date.
      </dd>
   </dl>
</div>

## HTTP methods

Although the REST architectural style does not impose a specific protocol, REST APIs are typically implemented using HTTP [[RFC9110]].

<span id="api-03"></span>
<div class="rule" id="/core/http-methods" data-type="functional">
   <p class="rulelab">Only apply standard HTTP methods</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         An API MUST adhere to the HTTP method semantics defined in [[RFC9110]] and [[RFC5789]].
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
         <aside class="example">The following table shows some examples of the use of standard HTTP methods:
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
   </aside>
   <p class="note">The HTTP specification [[RFC9110]] and the later introduced <code>PATCH</code> method specification [[RFC5789]] offer a set of standard methods, where every method is designed with explicit semantics. HTTP also defines other methods, e.g. <code>HEAD</code>, <code>OPTIONS</code>, <code>TRACE</code>, and <code>CONNECT</code>.<br>
   The OpenAPI Specification 3.0 <a href="https://spec.openapis.org/oas/v3.0.1#path-item-object">Path Item Object</a> also supports these methods, except for <code>CONNECT</code>.<br>
  According to <a href="https://www.rfc-editor.org/rfc/rfc9110#name-overview">RFC 9110 9.1</a> the <code>GET</code> and <code>HEAD</code> HTTP methods MUST be supported by the server, all other methods are optional.<br>
  In addition to the standard HTTP methods, a server may support other optional methods as well, e.g. <code>PROPFIND</code>, <code>COPY</code>, <code>PURGE</code>, <code>VIEW</code>, <code>LINK</code>, <code>UNLINK</code>, <code>LOCK</code>, <code>UNLOCK</code>, etc.<br>
  If an optional HTTP request method is sent to a server and the server does not support that HTTP method for the target resource, an HTTP status code <code>405 Method Not Allowed</code> shall be returned and a list of allowed methods for the target resource shall be provided in the <code>Allow</code> header in the response as stated in <a href="https://www.rfc-editor.org/rfc/rfc9110#name-405-method-not-allowed">RFC 9110 15.5.6</a>.</p>
      </dd>
      <dt>How to test</dt>
      <dd>
         Analyse the OpenAPI Description to confirm all supported methods are either `post`, `put`, `get`, `delete`, or `patch`.
      </dd>
   </dl>
</div>

<span id="api-01"></span>
<div class="rule" id="/core/http-safety" data-type="functional">
   <p class="rulelab">Adhere to HTTP safety and idempotency semantics for operations</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         The following table describes which HTTP methods MUST behave as safe and/or idempotent:</p>
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
         <p>
            The HTTP protocol [[RFC9110]] specifies whether an HTTP method SHOULD be considered safe and/or idempotent. These characteristics are important for clients and middleware applications, because they SHOULD be taken into account when implementing caching and fault tolerance strategies.
         </p>
         <p>
            Request methods are considered <i>safe</i> if their defined semantics are essentially read-only; i.e., the client does not request, and does not expect, any state change on the origin server as a result of applying a safe method to a target resource. A request method is considered <i>idempotent</i> if the intended effect on the server of multiple identical requests with that method is the same as the effect for a single such request.
         </p>
      </dd>
   </dl>
</div>

<div class="rule" id="/core/http-response-code" data-type="functional">
   <p class="rulelab">Adhere to HTTP status codes to convey appropriate errors</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         An API MUST use the semantically appropriate HTTP <a href="https://www.rfc-editor.org/rfc/rfc9110#name-status-codes">status code</a> ([[RFC9110]]) for the response.
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>The server SHOULD NOT only use `200` for success and `404` for error states. Use the semantically appropriate status code for success or failure.
         <p>In case of an error, the server SHOULD NOT pass technical details (e.g. call stacks or other internal hints) to the client. The error message SHOULD be generic to avoid revealing additional details and expose internal information which can be used with malicious intent.
      </dd>
   </dl>
</div>

## Statelessness

One of the key constraints of the REST architectural style is stateless communication between client and server. It means that every request from client to server must contain all of the information necessary to understand the request. The server cannot take advantage of any stored session context on the server as it didn’t memorize previous requests. Session state must therefore reside entirely on the client.

To properly understand this constraint, it is important to make a distinction between two different kinds of state:

* *Session state*: information about the interactions of an end user with a particular client application within the same user session, such as the last page being viewed, the login state or form data in a multi-step registration process. Session state must reside entirely on the client (e.g. in the user's browser).
* *Resource state*: information that is permanently stored on the server beyond the scope of a single user session, such as the user's profile, a product purchase or information about a building. Resource state is persisted on the server and must be exchanged between client and server (in both directions) using  representations as part of the request or response payload. This is actually where the term *REpresentational State Transfer (REST)* originates from.

<p class="note">It is a misconception that there should be no state at all. The stateless communication constraint should be seen from the server's point of view and states that the server should not be aware of any <em>session state</em>.</p>

Stateless communication offers many advantages, including:

* *Simplicity* is increased because the server does not have to memorize or retrieve session state while processing requests
* *Scalability* is improved because not having to incorporate session state across multiple requests enables higher concurrency and performance
* *Observability* is improved since every request can be monitored or analyzed in isolation without having to incorporate session context from other requests
* *Reliability* is improved because it eases the task of recovering from partial failures since the server does not have to maintain, update or communicate session state. One failing request does not influence other requests (depending on the nature of the failure of course).

<span id="api-02"></span>
<div class="rule" id="/core/stateless" data-type="functional">
   <p class="rulelab">Do not maintain session state on the server</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         In the context of REST APIs, the server MUST NOT maintain or require any notion of the functionality of the client application and the corresponding end user interactions.
      </dd>
      <dt>Rationale</dt>
      <dd>
         To achieve full decoupling between client and server, and to benefit from the advantages mentioned above, session state MUST NOT reside on the server. Session state MUST therefore reside entirely on the client.
      </dd>
   </dl>
   <p class="note">The client of a REST API could be a variety of applications such as a browser application, a mobile or desktop application and even another server serving as a backend component for another client. REST APIs should therefore be completely client-agnostic.</p>
</div>

## Relationships

Resources are often interconnected by relationships. Relationships can be modelled in different ways depending on the cardinality, semantics and more importantly, the use cases and access patterns the REST API needs to support.

<span id="api-06"></span>
<div class="rule" id="/core/nested-child" data-type="functional">
  <p class="rulelab">Use nested URIs for child resources</p>
  <dl>
      <dt>Statement</dt>
      <dd>
         When having a child resource which can only exist in the context of a parent resource, the [=URI=] SHOULD be nested.
      </dd>
      <dt>Rationale</dt>
      <dd>
         In this use case, the child resource does not necessarily have a top-level collection resource. The best way to explain this design rule is by example.
         <aside class="example">
            When modelling resources for a news platform including the ability for users to write comments, it might be a good strategy to model the [=collection resources=] hierarchically:
            <pre class="nohighlight">https://api.example.org/v1/articles/123/comments</pre>
            The platform might also offer a photo section, where the same commenting functionality is offered. In the same way as for articles, the corresponding sub-collection resource might be published at:
            <pre class="nohighlight">https://api.example.org/v1/photos/456/comments</pre>
            These nested sub-collection resources can be used to post a new comment (<code>POST</code> method) and to retrieve a list of comments (<code>GET</code> method) belonging to the parent resource, i.e. the article or photo. An important consideration is that these comments could never have existed without the existence of the parent resource.
            <p>From the consumer's perspective, this approach makes logical sense, because the most obvious use case is to show comments below the parent article or photo (e.g. on the same web page) including the possibility to paginate through the comments. The process of posting a comment is separate from the process of publishing a new article. Another client use case might also be to show a global <em>latest comments</em> section in the sidebar. For this use case, an additional resource could be provided:
            <pre class="nohighlight">https://api.example.org/v1/comments</pre>
            If this would have not been a meaningful use case, this resource should not exist at all. Because it does not make sense to post a new comment from a global context, this resource would be read-only (only <code>GET</code> method is supported) and may possibly provide a more compact representation than the parent-specific sub-collections.
            <p>The [=singular resources=] for comments, referenced from all 3 collections, could still be modelled on a higher level to avoid deep nesting of URIs (which might increase complexity or problems due to the URI length):
            <pre class="nohighlight">https://api.example.org/v1/comments/123
https://api.example.org/v1/comments/456</pre>
            <p>Although this approach might seem counterintuitive from a technical perspective (we simply could have modelled a single <code>/comments</code> resource with optional filters for article and photo) and might introduce partially redundant functionality, it makes perfect sense from the perspective of the consumer, which increases developer experience.
         </aside>
      </dd>
</div>

## Operations

<span id="api-10"></span>
<div class="rule" id="/core/resource-operations" data-type="functional">
  <p class="rulelab">Model resource operations as a sub-resource or dedicated resource</p>
  <dl>
      <dt>Statement</dt>
      <dd>
         Resource operations MUST be modelled as a sub-resource or dedicated resource</a>.
      </dd>
      <dt>Rationale</dt>
      <dd>
         There are resource operations which might not seem to fit well in the CRUD interaction model. For example, approving a submission or notifying a customer. Depending on the type of the operation, there are three possible approaches:
      <ol>
         <li>Re-model the resource to incorporate extra fields supporting the particular operation. For example, an approval operation can be modelled in a boolean attribute <code>goedgekeurd</code> that can be modified by issuing a <code>PATCH</code> request against the resource. A drawback of this approach is that the resource does not contain any metadata about the operation (when and by whom was the approval given? Was the submission rejected in an earlier stage?). Furthermore, this requires a fine-grained authorization model, since approval might require a specific role.</li>
         <li>Treat the operation as a sub-resource. For example, model a sub-collection resource <code>/inzendingen/12/beoordelingen</code> and add an approval or rejection by issuing a <code>POST</code> request. To be able to retrieve the review history (and to consistently adhere to the REST principles), also support the <code>GET</code> method for this resource. The <code>/inzendingen/12</code> resource might still provide a <code>goedgekeurd</code> boolean attribute (same as approach 1) which gets automatically updated in the background after adding a review. This attribute SHOULD however be read-only.</li>
         <li>In exceptional cases, the approaches above still do not offer an appropriate solution. An example of such an operation is a global search across multiple resources. In this case, the creation of a dedicated resource, possibly nested under an existing resource, is the most obvious solution. Use the imperative mood of a verb, maybe even prefix it with a underscore to distinguish these resources from regular resources. For example: <code>/search</code> or <code>/_search</code>. Depending on the operation characteristics, <code>GET</code> and/or <code>POST</code> method MAY be supported for such a resource.</li>
      </ol>
      </dd>
   </dl>
</div>

## Error handling

<div class="rule" id="/core/error-handling/problem-details" data-type="technical">
   <p class="rulelab">Use problem details for error responses</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>Error responses with HTTP status codes <code>4xx</code> or <code>5xx</code> MUST use either <code>application/problem+json</code> or <code>application/problem+xml</code> as the <code>Content-Type</code> header, and the response body MUST conform to the structure defined in [[RFC9457]].
         <p>The following fields MUST be present: <code>status</code>, <code>title</code>, and <code>detail</code>.
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Providing problem details in a machine-readable format aids automation and debugging. By using a common error format, APIs do not need to define their own or misuse existing HTTP status codes.</p>
         <aside class="example">
            The following example shows the head and body of a detailed error response.
            <pre><code class="http">HTTP/1.1 404 Not Found
Content-Type: application/problem+json</code><code class="json">{
  "status": 404,
  "title": "Resource Not Found",
  "detail": "No building found with id 12345."
}
</code></pre>
         </aside>
      </dd>
      <dt>How to test</dt>
      <dd>
         Verify all responses with status code <code>4xx</code> or <code>5xx</code> have <code>Content-Type</code> set to <code>application/problem+json</code> or <code>application/problem+xml</code> and the body contains fields <code>status</code>, <code>title</code>, and <code>detail</code>.
      </dd>
   </dl>
</div>

<div class="rule" id="/core/error-handling/invalid-input" data-type="technical">
  <p class="rulelab">Use status code 400 for invalid input</p>
  <dl>
    <dt>Statement</dt>
    <dd>
      <p>API requests containing invalid input MUST result in HTTP status code <code>400</code> (Bad Request).
      Invalid input includes syntax errors, missing or invalid query parameters.
      <p>The request payload SHOULD be validated with a schema. A request payload with schema validation errors MUST be treated as invalid input.
    </dd>
    <dt>Rationale</dt>
    <dd>
      <p>The semantics of status code <code>400</code> ("the server cannot or will not process the request due to something that is perceived to be a client error") match validation failures more closely than status code <code>422</code>, which historically originates from WebDAV and introduces no added interoperability benefit.</p>
    </dd>
    <dt>How to test</dt>
    <dd>
      Verify that operations accepting query parameters and/or a request body contain a response with status code <code>400</code>.
    </dd>
  </dl>
</div>

<div class="rule" id="/core/error-handling/all-errors" data-type="functional">
  <p class="rulelab">Return all errors together for bad requests</p>
  <dl>
    <dt>Statement</dt>
    <dd>
      <p>API requests with HTTP status code <code>400</code> (Bad Request) SHOULD include all applicable schema validation errors and MAY include additional errors.
    </dd>
    <dt>Rationale</dt>
    <dd>
      <p>To reduce the amount of roundtrips between client and server, all applicable schema validation errors SHOULD be returned together.
      This allows a client to present validation errors to a user in one go, reducing user friction with multiple retries.
      <p>It depends on a validation technique whether this is possible or not.
      For example, when a client provides a date in the weekend, where only dates on weekdays are allowed, it depends on which service performs these validation checks.
      In these cases, include the additional validation errors together with other errors whenever feasible.
    </dd>
  </dl>
</div>

## Documentation

An API is as good as the accompanying documentation. The documentation has to be easily findable, searchable and publicly accessible. Most developers will first read the documentation before they start implementing. Hiding the technical documentation in PDF documents and/or behind a login creates a barrier for both developers and search engines.

<span id="api-16"></span>
<div class="rule" id="/core/doc-openapi" data-type="technical">
  <p class="rulelab">Use OpenAPI Specification for documentation</p>
  <dl>
      <dt>Statement</dt>
      <dd>
         API documentation MUST be provided in the form of an OpenAPI definition document which conforms to the OpenAPI Specification (from v3 onwards).
      </dd>
      <dt>Rationale</dt>
      <dd>
         The OpenAPI Specification (OAS) [[OPENAPIS]] defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic.
         API documentation MUST be provided in the form of an OpenAPI definition document which conforms to the OpenAPI Specification (from v3 onwards). As a result, a variety of tools can be used to render the documentation (e.g. Swagger UI or ReDoc) or automate tasks such as testing or code generation. The OAS document SHOULD provide clear descriptions and examples.
      </dd>
      <dt>How to test</dt>
      <dd>
         Parse the resource at the provided location as an OpenAPI Description and confirm all $refs are resolvable and paths are defined.
      </dd>
   </dl>
</div>

<div class="rule" id="/core/doc-openapi-contact" data-type="technical">
  <p class="rulelab">Document contact information for publicly available APIs</p>
  <dl>
      <dt>Statement</dt>
      <dd>
         OpenAPI definition document SHOULD include the <a href="https://spec.openapis.org/oas/v3.0.1.html#contact-object"><code>info.contact</code></a> object for publicly available APIs. Contact information SHOULD NOT be a generic contact address for the whole organisation.
      </dd>
      <dt>Rationale</dt>
      <dd>
         The OpenAPI Specification (OAS) [[OPENAPIS]] can include contact information to make clear how to reach out to API owners in case of issues or questions. This is relevant for publicly available APIs (such as OData) where no pre-existing communication channel exists between provider and consumer of the API. For internal APIs (where communication channels such as chat or issue trackers are likely already known), the <code>info.contact</code> MAY be provided.
         <aside class="example">
            Relevant contact information can include an email address and issue tracker.
            <pre><code class="json">{
  "name": "Gebouwen API beheerder",
  "url": "https://www.github.com/ministerie/gebouwen/issues",
  "email": "teamgebouwen@ministerie.nl"
}</code></pre>
         </aside>
      </dd>
      <dt>How to test</dt>
      <dd>
         Parse the OpenAPI Description to confirm the <code>info.contact</code> object is present.
      </dd>
   </dl>
</div>

<span id="api-17"></span>
<div class="rule" id="/core/doc-language" data-type="functional">
  <p class="rulelab">Publish documentation in Dutch unless there is existing documentation in English</p>
  <dl>
      <dt>Statement</dt>
      <dd>
         You SHOULD write the OAS document in Dutch.
      </dd>
      <dt>Rationale</dt>
      <dd>
         In line with design rule <a href="#/core/interface-language">/core/interface-language</a>, the OAS document (e.g. descriptions and examples) SHOULD be written in Dutch. If relevant, you MAY refer to existing documentation written in English.
      </dd>
   </dl>
</div>

<span id="api-51"></span>
<div class="rule" id="/core/publish-openapi" data-type="technical">
  <p class="rulelab">Publish OAS document at a standard location in JSON-format</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         To make the OAS document easy to find and to facilitate self-discovering clients, there SHOULD be one standard location where the OAS document is available for download.
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>It MUST be possible for clients (such as Swagger UI or ReDoc) to retrieve the document without having to authenticate. Furthermore, the CORS policy for this [=URI=] MUST allow external domains to read the documentation from a browser environment.</p>
         <p>The standard location for the OAS document is a URI called <code>openapi.json</code> or <code>openapi.yaml</code> within the base path of the API. This can be convenient, because OAS document updates can easily  become part of the CI/CD process.</p>
         <p>At least the JSON format MUST be supported. When having multiple (major) versions of an API, every API version SHOULD provide its own OAS document(s).</p>
         <aside class="example">
            An API having base path <code>https://api.example.org/v1</code> MUST publish the OAS document at:
            <pre class="nohighlight">https://api.example.org/v1/openapi.json</pre>
            Optionally, the same OAS document MAY be provided in YAML format:
            <pre class="nohighlight">https://api.example.org/v1/openapi.yaml</pre>
         </aside>
      </dd>
      <dt>How to test</dt>
      <dd>
         <ul>
            <li> Step 1: The API MUST meet the prerequisites to be tested. These include that an OAS file (openapi.json) is publicly available, parsable, all $refs are resolvable and paths are defined.</li>
            <li> Step 2: The openapi.yaml document MAY be available. If available it MUST contain YAML, be readable and parsable.</li>
            <li> Step 3: The openapi.yaml document MUST contain the same OpenAPI Description as the openapi.json document.</li>
            <li> Step 4: The CORS header Access-Control-Allow-Origin MUST allow all origins.</li>
         </ul>
      </dd>
   </dl>
</div>

## Versioning

Changes in APIs are inevitable. APIs should therefore always be versioned, facilitating the transition between changes.

<span id="api-18"></span>
<div class="rule" id="/core/deprecation-schedule" data-type="functional">
  <p class="rulelab">Include a deprecation schedule when deprecating features or versions</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         The API owner SHOULD implement well-documented deprecation schedules that are communicated in a timely fashion.
      </dd>
      <dt>Rationale</dt>
      <dd>
         Managing change is important. In general, good documentation and timely communication regarding deprecation schedules are the most important for API users. When deprecating features or versions, a deprecation schedule MUST be published. This document SHOULD be published on a public web page. Furthermore, active clients SHOULD be informed by e-mail once the schedule has been updated or when versions have reached end-of-life.
      </dd>
   </dl>
</div>

<span id="api-19"></span>
<div class="rule" id="/core/transition-period" data-type="functional">
  <p class="rulelab">Schedule a fixed transition period for a new major API version</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         Old versions MUST remain available for a limited and fixed deprecation period.
      </dd>
      <dt>Rationale</dt>
      <dd>
         When releasing a new major API version, the old version MUST remain available for a limited and fixed deprecation period. Offering a deprecation period allows clients to carefully plan and execute the migration from the old to the new API version, as long as they do this prior to the end of the deprecation period. A maximum of 2 major API versions MAY be published concurrently.
      </dd>
   </dl>
</div>

<span id="api-20"></span>
<div class="rule" id="/core/uri-version" data-type="technical">
  <p class="rulelab">Include the major version number in the URI</p>
    <dl>
      <dt>Statement</dt>
      <dd>
         The [=URI=] of an API MUST include the major version number.
      </dd>
      <dt>Rationale</dt>
      <dd>
         The [=URI=] of an API (base path) MUST include the major version number, prefixed by the letter <code>v</code>. This allows the exploration of multiple versions of an API in the browser. The minor and patch version numbers are not part of the [=URI=] and MAY not have any impact on existing client implementations.
         <aside class="example">
            An example of an <code class="nohighlight">openapi.yaml</code> for an API with a base path <code class="nohighlight">https://api.example.org/v1</code> and current version 1.0.2:
            <pre><code class="yaml">openapi: 3.0.0
   info:
      version: '1.0.2'
   servers:
      - description: test environment
      url: https://api.test.example.org/v1
      - description: production environment
      url: https://api.example.org/v1</code></pre>
         </aside>
      </dd>
      <dt>How to test</dt>
      <dd>
         Parse the `url` field in the `servers` mentioned in the OpenAPI Description to confirm that a version number is present with prefix <code>v</code> and only contains the *major* version number.
      </dd>
   </dl>
</div>

<span id="api-55"></span>
<div class="rule" id="/core/changelog" data-type="functional">
  <p class="rulelab">Publish a changelog for API changes between versions</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         A changelog MUST be publised for every API version.
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>When releasing new (major, minor or patch) versions, all API changes MUST be documented properly in a publicly available changelog.</p>
      </dd>
   </dl>
</div>

<span id="api-56"></span>
<div class="rule" id="/core/semver" data-type="technical">
  <p class="rulelab">Adhere to the Semantic Versioning model when releasing API changes</p>
  <dl>
      <dt>Statement</dt>
      <dd>
         Semantic Versioning MUST be used for API versioning.
      </dd>
      <dt>Rationale</dt>
      <dd>
         Version numbering MUST follow the Semantic Versioning [[SemVer]] model to prevent breaking changes when releasing new API versions. Release versions are formatted using the <code>major.minor.patch</code> template (examples: 1.0.2, 1.11.0). Pre-release versions MAY be denoted by appending a hyphen and a series of dot separated identifiers (examples: 1.0.2-rc.1, 2.0.0-beta.3). When releasing a new version which contains backwards-incompatible changes, a new major version MUST be released. Minor and patch releases MUST only contain backwards compatible changes (e.g. the addition of an endpoint or an optional attribute).
      </dd>
      <dt>How to test</dt>
      <dd>
         Parse the `info.version` field in the OpenAPI Description to confirm it adheres to the Semantic Versioning format.
      </dd>
   </dl>
</div>

<span id="api-57"></span>
<div class="rule" id="/core/version-header" data-type="technical">
  <p class="rulelab">Return the full version number in a response header</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         The API-Version header MUST be returned in a response header in every response.
      </dd>
      <dt>Rationale</dt>
      <dd>
         Since the URI only contains the major version, it is useful to provide the full version number in the response headers for every API call. This information could then be used for logging, debugging or auditing purposes. In cases where an intermediate networking component returns an error response (e.g. a reverse proxy enforcing access policies), the version number MAY be omitted.
         <p>The version number MUST be returned in an HTTP response header named <code>API-Version</code> (case-insensitive) and SHOULD NOT be prefixed.
         <aside class="example">
            An example of an API version response header:
            <pre class="nohighlight">API-Version: 1.0.2</pre>
         </aside>
      </dd>
      <dt>How to test</dt>
      <dd>
         A response includes a header "API-Version" with a number matching the version number set in the `info.version` field of the OpenAPI Description.
      </dd>
   </dl>
</div>

## Transport Security

This section describes security principles, concepts and technologies to apply when working with APIs.
Controls need to be applied for the security objectives of integrity, confidentiality and availability of the API (which includes the services and data provided thereby).
The [architecture section of the API strategy](https://docs.geostandaarden.nl/api/API-Strategie-architectuur/) contains architecture patterns for implementing transport security.

The scope of this section is limited to generic security controls that directly influence the visible parts of an API.
Effectively, only security standards directly applicable to interactions are discussed here.

In order to meet the complete security objectives, every implementer MUST also apply a range of controls not mentioned in this section.

Note: security controls for signing and encrypting of application level messages are part of separate extensions: [Signing](https://geonovum.github.io/KP-APIs/API-strategie-modules/signing-jades/) and [Encryption](https://geonovum.github.io/KP-APIs/API-strategie-modules/encryption/).

<span id="api-11"></span>
<div class="rule" id="/core/transport/tls" data-type="technical">
  <p class="rulelab">Secure connections using TLS</p>
  <dl>
    <dt>Statement</dt>
    <dd>
      <p>Information exchanged by APIs MUST be secured using TLS-based connections. No exceptions, so everywhere and always. This is <a href="https://wetten.overheid.nl/BWBR0048156/2023-07-01">required by law</a>.
      <p>One MUST follow the latest NCSC guidelines [[NCSC 2025]].
    </dd>
    <dt>Rationale</dt>
    <dd>
        <p>Since the connection is always secured, the access method can be straightforward. This allows the application of basic access tokens instead of encrypted access tokens.
    </dd>
    <dt>How to test</dt>
    <dd>
        <p>The usage of TLS is machine testable. Follow the latest NCSC guidelines on what is required to test. The serverside is what will be tested, only control over the server is assumed for testing. A testing client will be employed to test adherence of the server. Supporting any protocols, algorithms, key sizes, options or ciphers that are deemed insufficient or phased out by NCSC will lead to failure on the automated test. Both positive and negative scenarios are part of the test: testing that a subset of *Good* and *Sufficient* configurations are supported and configurations deemed  *Insufficient* or marked for *Phase out*. A manual exception to the automated test results can be made when configurations designated for *Phase out* are supported; The API provider will have to provide clear documentation regarding the phase out schedule.  
    </dd>
  </dl>
</div>

<span id="api-58"></span>
<div class="rule" id="/core/transport/no-sensitive-uris" data-type="functional">
  <p class="rulelab">No sensitive information in URIs</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         <p>Sensitive information MUST NOT be part of URIs
         <p class="note">The term sensitive is deliberately left undefined in this document.</p>
         <p>In case of REST-API's for system to system communication on a closed network, this rule applies only when there is logging involved in systems that are not under control of the organizations involved in the exchange
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>When using TLS connections, the path and query information in URIs are secured just like the message headers and body. However, URIs can be cached and logged, as can headers and bodies in the following situations:
         <ul>
           <li>before the TLS connection starts on the server
           <li>after the TLS connection ends on the client
           <li>whenever the TLS protocol is terminated and newly initiated in between
         </ul>
         <p class="note">Be aware that queries (anything after the '?' in a URI) are also part of a URI.
         <p>For REST API's that are accessed directly from user devices, like web browsers, do not put client secrets used for authentication and other sensitive information in the URI. These are directly visible to users, are stored in the web browser's history and cache and can be bookmarked and sent to others.
         <p>For REST API's that are only used for system-to-system integration on closed networks where all systems are under control of the organizations involved in the exchange, do not put client secrets used for authentication in the URI and be careful to put sensitive information in the URI. Intermediate network components that terminate and newly initiate TLS could log or otherwise store URIs. Consider the consequences, advantages and disadvantages of using sensitive information in the URI and be deliberate about which information is logged, for which purposes and who has access.
      </dd>
   </dl>
</div>

### HTTP-level Security

The guidelines and principles defined in this section are client agnostic.
When implementing a client agnostic API, one SHOULD at least facilitate that multi-purpose generic HTTP-clients like browsers are able to securely interact with the API.
When implementing an API for a specific client it may be possible to limit measures as long as it ensures secure access for this specific client.
Nevertheless it is advised to review the following security measures, which are mostly inspired by the [OWASP REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html).

Even while remaining client agnostic, clients can be classified in four major groups.
This is in line with common practice in [[[?OAuth2]]].
The groups are:

1. Web applications.
2. Native applications.
3. Browser-based applications.
4. System-to-system applications.

This section contains elements that apply to the generic classes of clients listed above.
Although not every client implementation has a need for all the specifications referenced below, a client agnostic API SHOULD provide these to facilitate any client to implement relevant security controls.

Most specifications referenced in this section are applicable to the first three classes of clients listed above.
Security considerations for native applications are provided in [[[RFC8252]]], much of which can help non-OAuth2 based implementations as well.
For browser-based applications a subsection is included with additional details and information.
System-to-system (sometimes called machine-to-machine) may have a need for the listed specifications as well.
Note that different usage patterns may be applicable in contexts with system-to-system clients, see above under Client Authentication.

Realizations may rely on internal usage of HTTP-Headers.
Information for processing requests and responses can be passed between components, that can have security implications.
For instance, this is common practice between a reverse proxy or TLS-offloader and an application server.
Additional HTTP headers are used in such example to pass an original IP-address or client certificate.

Implementations MUST consider filtering both inbound and outbound traffic for HTTP-headers used internally.
The primary focus of inbound filtering is to prevent injection of malicious headers on requests.
For outbound filtering, the main concern is leaking of information.

<div class="rule" id="/core/transport/security-headers" data-type="technical">
  <p class="rulelab">Use mandatory security headers in all API responses</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         API security headers MUST be returned in all server responses to instruct the client to act in a secure manner
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>There are a number of security related headers that can be returned in the HTTP responses to instruct browsers to act in specific ways. However, some of these headers are intended to be used with HTML responses, and as such may provide little or no security benefits on an API that does not return HTML. The following headers SHOULD be included in all API responses:
         <table>
            <thead>
               <tr>
                  <th scope="col">Header</th>
                  <th scope="col">Rationale</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>`Cache-Control: no-store`</td>
                  <td>Prevent sensitive information from being cached.</td>
               </tr>
               <tr>
                  <td>`Content-Security-Policy: frame-ancestors &#39;none&#39;`</td>
                  <td>To protect against drag-and-drop style clickjacking attacks.</td>
               </tr>
               <tr>
                  <td>`Content-Type`</td>
                  <td>To specify the content type of the response. This SHOULD be `application/json` for JSON responses.</td>
               </tr>
               <tr>
                  <td>`Strict-Transport-Security`</td>
                  <td>To require connections over HTTPS and to protect against spoofed certificates.</td>
               </tr>
               <tr>
                  <td>`X-Content-Type-Options: nosniff`</td>
                  <td>To prevent browsers from performing MIME sniffing, and inappropriately interpreting responses as HTML.</td>
               </tr>
               <tr>
                  <td>`X-Frame-Options: DENY`</td>
                  <td>To protect against drag-and-drop style clickjacking attacks.</td>
               </tr>
               <tr>
                  <td>`Access-Control-Allow-Origin`</td>
                  <td>To relax the &#39;same origin&#39; policy and allow cross-origin access. See <a href="#/core/transport/cors">/core/transport/cors</a> for more information.</td>
               </tr>
            </tbody>
         </table>
         <p>The headers below are only intended to provide additional security when responses are rendered as HTML. As such, if the API will never return HTML in responses, then these headers may not be necessary. You SHOULD include the headers as part of a defense-in-depth approach if there is any uncertainty about the function of the headers, the types of information that the API returns or information it may return in the future.
         <table>
            <thead>
               <tr>
                  <th scope="col">Header</th>
                  <th scope="col">Rationale</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>`Content-Security-Policy: default-src &#39;none&#39;`</td>
                  <td>The majority of CSP functionality only affects pages rendered as HTML.</td>
               </tr>
               <tr>
                  <td>`Feature-Policy: &#39;none&#39;`</td>
                  <td>Feature policies only affect pages rendered as HTML.</td>
               </tr>
               <tr>
                  <td>`Referrer-Policy: no-referrer`</td>
                  <td>Non-HTML responses should not trigger additional requests.</td>
               </tr>
            </tbody>
         </table>
         <p>In addition to the above listed HTTP security headers, web- and browser-based applications SHOULD apply [[[SRI]]]. When using third-party hosted contents, e.g. using a Content Delivery Network, this is even more relevant. While this is primarily a client implementation concern, it may affect the API when it is not strictly segregated or for example when shared supporting libraries are offered.
      </dd>
      <dt>How to test</dt>
      <dd>
         <p>The presence of the mandatory security headers can be tested in an automated way. A test client makes a call to the API root. The response is tested for the presence of mandatory headers.
      </dd>
   </dl>
</div>

<span id="api-50"></span>
<div class="rule" id="/core/transport/cors" data-type="technical">
  <p class="rulelab">Use CORS to control access</p>
   <dl>
      <dt>Statement</dt>
      <dd>
         CORS MUST be used to restrict access from other domains for applicable resources
      </dd>
      <dt>Rationale</dt>
      <dd>
         <p>Different resources can have different uses, as some resources are publicly available whereas others are restricted to several domains.
         Modern web browsers use Cross-Origin Resource Sharing (CORS) to minimize the risk associated with cross-site HTTP-requests.
         <p>By default browsers only allow 'same origin' access to resources.
         This means that responses on requests to another `[scheme]://[hostname]:[port]` than the `Origin` request header of the initial request will not be processed by the browser.
         To enable cross-site requests APIs can return a `Access-Control-Allow-Origin` response header.
         <p>An allowlist SHOULD be used to determine the validity of different cross-site requests.
         To do this, check the `Origin` header of the incoming request and check if the domain in this header is on the allowlist.
         If this is the case, set the incoming `Origin` header in the `Access-Control-Allow-Origin` response header.
         <div class="note">
            Using a wildcard `*` in the `Access-Control-Allow-Origin` response header is NOT RECOMMENDED, because it disables CORS-security measures.
            However, if the resource has to be accessed by numerous other origins that are not known up front (such as all resources in an open API, or the `openapi.json` as required by <a href="#/core/publish-openapi">/core/publish-openapi</a>), you MAY use `*`.
         </div>
      </dd>
      <dt>How to test</dt>
      <dd>
         <p>Tests of this design rule can only be performed when the intended client is known to the tester. A test can be performed when this information is provided by the API provider. Otherwise no conclusive test result can be reached.
      </dd>
   </dl>
</div>

### Browser-based applications

A specific subclass of clients are browser-based applications, that require the presence of particular security controls to facilitate secure implementation.
Clients in this class are also known as _user-agent-based_ or _single-page-applications_ (SPA).
All browser-based applications SHOULD follow the best practices specified in [OAuth 2.0 for Browser-Based Apps](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps-22).
These applications can be split into three architectural patterns:

* JavaScript applications with a backend; with this class of applications, the backend is the confidential client and should intermediate any interaction, with tokens never ending up in the browser.
  Effectively, these are not different from regular web-application for this security facet, even though they leverage JavaScript for implementation.
* JavaScript applications that share a domain with the API (resource server); these can leverage cookies marked as HTTP-Only, Secure and SameSite.
* JavaScript applications without a backend; these clients are considered public clients, and are potentially more vulnerable to several types of attacks, including Cross-Site Scripting (XSS), Cross Site Request Forgery (CSRF) and OAuth token theft.
  In order to support these clients, the Cross-Origin Resource Sharing (CORS) policy mentioned above is critical and MUST be supported.

### Validate content types

A REST request or response body SHOULD match the intended content type in the header. Otherwise this could cause misinterpretation at the consumer/producer side and lead to code injection/execution.

* Requests containing unexpected or missing content type headers MUST be rejected with HTTP response status `406 Not Acceptable` or `415 Unsupported Media Type`.
* Accidentally exposing unintended content types MUST be avoided by explicitly defining content types e.g. Jersey (Java) `@consumes("application/json"); @produces("application/json")`.
  This avoids XXE-attack vectors for example.

It is common for REST services to allow multiple response types (e.g. `application/xml` or `application/json`) in which case then the client specifies the preferred order of response types by the Accept header in the request.

* Do not simply copy the `Accept` header to the `Content-type` header of the response.
* Reject the request (ideally with a `406 Not Acceptable` response) if the Accept header does not specifically contain one of the allowable types.

Services (potentially) including script code (e.g. JavaScript) in their responses MUST be especially careful to defend against header injection attacks.

* Ensure the intended Content-Type headers are sent in the response, matching the body content, e.g. `application/json` and not `application/javascript`.

## Normative modules

The following modules are normative for all REST API's.

<div class="rule" id="/core/modules/geospatial" data-type="functional">
  <p class="rulelab">Apply the geospatial module for geospatial data</p>
  <dl>
    <dt>Statement</dt>
    <dd>
       <p>The [[[ADR-GEO]]] version 1.0.x MUST be applied when providing geospatial data or functionality.
       <p class="note">Geospatial data refers to information that is associated with a physical location on Earth, often expressed by its 2D/3D coordinates.
    </dd>
    <dt>Rationale</dt>
    <dd>
      The [[[ADR-GEO]]] formalizes as set of rules regarding:
      <ol>
         <li>How to encode geospatial data in request and response payloads.</li>
         <li>How resource collections can be filtered by a given bounding box.</li>
         <li>How to deal with different coordinate systems (CRS).</li>
      </ol>
    </dd>
  </dl>
</div>

<div class="rule" id="/core/modules/signing" data-type="functional">
  <p class="rulelab">Apply the signing module for signing payloads</p>
  <dl>
    <dt>Statement</dt>
    <dd>
       <p>The [[[ADR-signing]]] version 1.0.x MUST be applied when signing payloads.
       <p class="note">This rule does not dictate signing.
       Instead, it only applies in situations where there is a need for assurance of end to end message integrity and authenticity between client application and server application.
       In those situations, [[[ADR-signing]]] specifies how to sign.
    </dd>
    <dt>Rationale</dt>
    <dd>
      The [[[ADR-signing]]] formalizes as set of rules regarding:
      <ol>
         <li>How to sign data in request and response payloads.</li>
         <li>Which header to specify the signature.</li>
      </ol>
    </dd>
  </dl>
</div>

<div class="rule" id="/core/modules/encryption" data-type="functional">
  <p class="rulelab">Apply the encryption module for encrypting payloads</p>
  <dl>
    <dt>Statement</dt>
    <dd>
       <p>The [[[ADR-encryption]]] version 1.0.x MUST be applied when encrypting payloads.
       <p class="note">This rule does not dictate encryption.
       Instead, it only applies in situations where there is a need for end to end message payload confidentiality between client application and server application.
       In those situations, [[[ADR-encryption]]] specifies how to encrypt.
    </dd>
    <dt>Rationale</dt>
    <dd>
      The [[[ADR-encryption]]] formalizes as set of rules regarding:
      <ol>
         <li>How to encrypt data in request and response payloads.</li>
         <li>The flow of operations between client and server.</li>
      </ol>
    </dd>
  </dl>
</div>

If both the signing and encryption modules apply, use the following flow of operations:

<figure>
   <div class="mermaid" data-figure-name="signing-in-combination-with-encryption.mermaid">
   </div>
   <figcaption>Signing in combination with encryption</figcaption>
</figure>
