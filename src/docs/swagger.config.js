const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Api desafio XP',
      version: '1.0.0',
      description: 'API documentation',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
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
            409: {
              description: 'Conflict',
            },
            500: {
              description: 'Internal Server Error',
            },
          },
        },

      },
      '/conta/saldo': {
        get: {
          tags: ['Conta'],
          summary: 'Pegar saldo da conta',
          description: 'Para pegar o saldo clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZGRkYWU0ZDktZTcxZC00Y2ZkLWIxMjEtYzU2NjYzYzQ1NjNjIn0sImlhdCI6MTY1ODA4MTc5OCwiZXhwIjoxNjY2NzIxNzk4fQ.0A8sRTTyMAlybMzFGf4rhUogUH66Z2p_2YAftuQEHZg',
          security: [
            { bearerAuth: [] },
          ],

          responses: {
            200: {
              description: 'Success',
            },
            401: {
              description: 'Unauthorized',
            },
            500: {
              description: 'Internal Server Error',
            },
          },
        },

      },
    },
  },
  apis: ['./src/routes/index.js'],
};

export default swaggerConfig;
