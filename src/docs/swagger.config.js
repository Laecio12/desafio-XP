const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Api desafio XP',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:3333',
        description: 'Local server',
      },
    ],
    paths: {
      '/users': {
        post: {
          tags: ['Users'],
          summary: 'Criar um usuário',
          description: 'Cria um novo usuário',
          security: [
            { bearerAuth: [] },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                    },
                    cpf: {
                      type: 'string',
                    },
                    password: {
                      type: 'string',
                    },
                  },
                  example: {
                    name: 'laecio silva',
                    cpf: '00000000000',
                    password: '123456',
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Created',
            },
            400: {
              description: 'Bad Request',
            },
          },
        },

      },
    },
  },
  apis: ['./src/routes/index.js'],
};

export default swaggerConfig;
