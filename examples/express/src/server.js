// @ts-check

import express from 'express';
import openapi from '@wesleytodd/openapi';

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
const BAD_REQUEST_RESPONSE = {
  'application/problem+json': {
    schema: {
      type: 'object',
      properties: {
        status: {
          type: 'integer'
        },
        title: {
          type: 'string'
        },
        detail: {
          type: 'string'
        },
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              in: {
                type: 'string'
              },
              location: {
                type: 'string'
              },
              code: {
                type: 'string'
              },
              detail: {
                type: 'string'
              },
              index: {
                type: 'integer'
              }
            }
          }
        }
      }
    }
  }
}

/**
 * @typedef {{ in: "body"|"query", detail: string, location?: string, index?: number, code?: string }} BadRequestError
 */

class BadRequestResponseWithErrors extends Error {
  /**
   * @param {string} title
   * @param {string} detail
   * @param {Array<BadRequestError>} errors
   */
  constructor(title, detail, errors) {
    super();

    this.title = title;
    this.detail = detail;
    this.errors = errors;
  }
  toJSON() {
    const {
      title,
      detail,
      errors
    } = this;
    return {
      status: 400,
      title,
      detail,
      errors,
    };
  }
}

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

app.post('/input', oapi.path({
  description: 'Input method',
  tags: [
    'input'
  ],
  operationId: 'postInput',
  responses: {
    200: {
      description: 'Input',
      content: {
        'text/plain': {}
      },
      headers: {
        [API_VERSION_HEADER_NAME]: oapi.headers(API_VERSION_HEADER_SCHEMA_NAME)
      }
    },
    400: {
      description: 'Invalid input',
      content: BAD_REQUEST_RESPONSE,
      headers: {
        [API_VERSION_HEADER_NAME]: oapi.headers(API_VERSION_HEADER_SCHEMA_NAME)
      }
    }
  }
}), (req, res) => {
  /**
   * @type {Array<BadRequestError>}
   */
  const errors = [];
  const queryInput = req.query.queryInput;
  if (!queryInput) {
    errors.push({
      in: 'query',
      detail: 'Missing query parameter',
      location: 'queryInput',
      code: 'input.query.missing',
    })
  } else {
    let params;
    if (typeof queryInput === 'string') {
      params = [queryInput];
    } else {
      params = queryInput;
    }
    for (const [index, param] of params.entries()) {
      if (param !== '42') {
        errors.push({
          in: 'query',
          detail: 'Invalid query parameter. Expected 42, but was ' + param,
          location: 'queryInput',
          index,
          code: 'input.query.invalid',
        });
      }
    }
  }

  if (errors.length > 0) {
    throw new BadRequestResponseWithErrors('title', 'detail', errors);
  }

  res.send('Succesvolle response');
});

app.use((err, req, res, next) => {
  if (err instanceof BadRequestResponseWithErrors) {
    return res.status(400).json(err.toJSON());
  }

  next();
});

app.listen(port, () => {
  console.log(`Example express app beschikbaar op poort ${port}`);
});
