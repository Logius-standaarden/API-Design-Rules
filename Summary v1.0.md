## Summary

<aside class="note">
Design rules have unique and permanent numbers. In the event of design rules being deprecated or restructured, they are removed from the list. Therefore, gaps in the sequence can occur. New design rules will always get a new and higher number.
</aside>

### Normative Design Rules

* <a href="#api-01">API-01</a>: Operations are safe and/or idempotent
* <a href="#api-02">API-02</a>: Do not maintain session state on the server
* <a href="#api-03">API-03</a>: Only apply standard HTTP methods
* <a href="#api-04">API-04</a>: Define interfaces in Dutch unless there is an official English glossary available
* <a href="#api-05">API-05</a>: Use nouns to name resources
* <a href="#api-06">API-06</a>: Use nested URIs for child resources
* <a href="#api-10">API-10</a>: Implement operations that do not fit the CRUD model as sub-resources
* <a href="#api-16">API-16</a>: Use OpenAPI Specification for documentation
* <a href="#api-17">API-17</a>: Publish documentation in Dutch unless there is existing documentation in English
* <a href="#api-18">API-18</a>: Include a deprecation schedule when publishing API changes
* <a href="#api-19">API-19</a>: Schedule a fixed transition period for a new major API-version
* <a href="#api-20">API-20</a>: Include the major version number only in ihe URI
* <a href="#api-48">API-48</a>: Leave off trailing slashes from URIs
* <a href="#api-51">API-51</a>: Publish OAS document at a standard location in JSON-format
* <a href="#api-53">API-53</a>: Hide irrelevant implementation details
* <a href="#api-54">API-54</a>: Use plural nouns to name collection members
* <a href="#api-55">API-55</a>: Publish a changelog for API changes between versions
