## Summary

<aside class="note">
Design rules have unique and permanent numbers. In the event of design rules being deprecated or restructured, they are removed from the list. Therefore, gaps in the sequence can occur. New design rules will always get a new and higher number.
</aside>

### Normative Design Rules

Design rules can be technical rules, which should be tested automatically and functional rules which should be considerd when designing and building the api. 

* <a href="#api-01">API-01</a>: Adhere to HTTP safety and idempotency semantics for operations - *Functional rule*
* <a href="#api-02">API-02</a>: Do not maintain session state on the server - *Functional rule*
* <a href="#api-03">API-03</a>: Only apply standard HTTP methods - *Technical rule*
* <a href="#api-04">API-04</a>: Define interfaces in Dutch unless there is an official English glossary available - *Functional rule*
* <a href="#api-05">API-05</a>: Use nouns to name resources - *Functional rule*
* <a href="#api-06">API-06</a>: Use nested URIs for child resources - *Functional rule*
* <a href="#api-10">API-10</a>: Model resource operations as a sub-resource or dedicated resource - *Functional rule*
* <a href="#api-16">API-16</a>: Use OpenAPI Specification for documentation - *Technical rule*
* <a href="#api-17">API-17</a>: Publish documentation in Dutch unless there is existing documentation in English - *Functional rule*
* <a href="#api-18">API-18</a>: Include a deprecation schedule when publishing API changes - *Functional rule*
* <a href="#api-19">API-19</a>: Schedule a fixed transition period for a new major API version - *Functional rule*
* <a href="#api-20">API-20</a>: Include the major version number in the URI - *Technical rule*
* <a href="#api-48">API-48</a>: Leave off trailing slashes from URIs - *Technical rule*
* <a href="#api-51">API-51</a>: Publish OAS document at a standard location in JSON-format - *Technical rule*
* <a href="#api-53">API-53</a>: Hide irrelevant implementation details - *Functional rule*
* <a href="#api-54">API-54</a>: Use plural nouns to name collection resources - *Functional rule*
* <a href="#api-55">API-55</a>: Publish a changelog for API changes between versions - *Functional rule*
* <a href="#api-56">API-56</a>: Adhere to the Semantic Versioning model when releasing API changes - *Technical rule*
* <a href="#api-57">API-57</a>: Return the full version number in a response header - *Technical rule*
