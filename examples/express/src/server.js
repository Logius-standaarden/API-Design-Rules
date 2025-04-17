const express = require('express');
const openapi = require('@wesleytodd/openapi');
const app = express();
const port = 8080;

const API_VERSION_HEADER_NAME = 'API-Version';
const API_VERSION_HEADER_SCHEMA_NAME = 'apiVersionHeader';
const API_VERSION_HEADER_SCHEMA = {
  description: 'De huidige versie van de applicatie',
  style: 'simple',
  schema: {
    type: 'string'
  }
};

const oapi = openapi({
  openapi: '3.0.0',
  info: {
    title: 'Express example',
    description: 'Example project gebouwd met Express',
    version: '0.0.1',
    contact: {
      name: 'API Support',
      url: 'https://example.com/api/support',
      email: 'apisupport@example.com'
    }
  },
  servers: [
    {
      url: 'https://example.com/api/v1'
    }
  ],
  tags: [
    {
      name: 'openapi'
    },
    {
      name: 'landing-pagina'
    }
  ]
});

oapi.headers(API_VERSION_HEADER_SCHEMA_NAME, API_VERSION_HEADER_SCHEMA);

oapi.document.paths['/openapi.json'] = {
  get: {
    tags: [
      'openapi'
    ],
    description: 'OpenAPI specification document',
    operationId: 'getOpenapiJSON',
    responses: {
      200: {
        description: 'OK',
        headers: {
          [API_VERSION_HEADER_NAME]: oapi.headers(API_VERSION_HEADER_SCHEMA_NAME),
          'access-control-allow-origin': {
            description: 'Alle origins mogen bij deze resource',
            schema: {
              type: 'string'
            }
          }
        }
      }
    }
  }
};

app.use(oapi);

app.get('/', oapi.path({
  description: 'Landing pagina',
  tags: [
    'landing-pagina'
  ],
  operationId: 'getLandingPage',
  responses: {
    200: {
      description: 'Landing pagina',
      content: {
        'text/plain': {}
      },
      headers: {
        [API_VERSION_HEADER_NAME]: oapi.headers(API_VERSION_HEADER_SCHEMA_NAME)
      }
    }
  }
}), (req, res) => {
  res.send('Dit is de landing pagina van deze API');
});

app.listen(port, () => {
  console.log(`Example express app beschikbaar op poort ${port}`);
});
