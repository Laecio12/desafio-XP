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
        url: 'https://desafio-xp.herokuapp.com',
        description: 'Heroku server',
      },
      {
        url: 'http://localhost:3333',
        description: 'Local server',
      },
    ],

    paths: {
      '/users': {
        post: {
          tags: ['Usuários'],
          summary: 'Criar uma pessoa usuária',
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
      '/users/session': {
        post: {
          tags: ['Usuários'],
          summary: 'Fazer login',
          description: 'Faz login da pessoa',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    cpf: {
                      type: 'string',
                    },
                    password: {
                      type: 'string',
                    },
                  },
                  example: {
                    cpf: '00000000000',
                    password: '123456',
                  },
                },
              },
            },
          },
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

      '/users/ativos': {
        get: {
          tags: ['Usuários'],
          summary: 'Buscar todos os ativos da pessoa usuária',
          description: 'Para buscar os ativos clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
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
      '/users/ativos/{CodAtivo}': {
        get: {
          tags: ['Usuários'],
          summary: 'Buscar um ativo específico',
          description: 'Para buscar os ativos clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
          security: [
            { bearerAuth: [] },
          ],
          parameters: [
            {
              name: 'CodAtivo',
              in: 'path',
              description: 'Código do ativo',
              required: true,
              schema: {
                type: 'string',
              },
            },
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
      '/conta/saldo': {
        get: {
          tags: ['Conta'],
          summary: 'Pegar saldo da conta',
          description: 'Para pegar o saldo clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
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
      '/conta/deposito': {
        post: {
          tags: ['Conta'],
          summary: 'Fazer um depósito na conta',
          description: 'Para fazer o depósito clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
          security: [
            { bearerAuth: [] },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    value: {
                      type: 'number',
                    },
                  },
                  example: {
                    value: 100,
                  },
                },
              },
            },
          },

          responses: {
            200: {
              description: 'Success',
            },
            400: {
              description: 'Bad Request',
            },
            401: {
              description: 'Unauthorized',
            },
            422: {
              description: 'Unprocessable Entity',
            },
            500: {
              description: 'Internal Server Error',
            },
          },
        },

      },
      '/conta/saque': {
        post: {
          tags: ['Conta'],
          summary: 'Fazer um saque',
          description: 'Para fazer o saque clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
          security: [
            { bearerAuth: [] },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    value: {
                      type: 'number',
                    },
                  },
                  example: {
                    value: 100,
                  },
                },
              },
            },
          },

          responses: {
            200: {
              description: 'Success',
            },
            400: {
              description: 'Bad Request',
            },
            401: {
              description: 'Unauthorized',
            },
            422: {
              description: 'Unprocessable Entity',
            },
            500: {
              description: 'Internal Server Error',
            },
          },
        },

      },
      '/investimentos/listar': {
        get: {
          tags: ['Investimentos'],
          summary: 'Listar os ativos disponíveis na corretora',
          description: 'Ativos disponíveis na corretora',

          responses: {
            200: {
              description: 'Success',
            },
            500: {
              description: 'Internal Server Error',
            },
          },
        },

      },

      '/investimentos/comprar': {
        post: {
          tags: ['Investimentos'],
          summary: 'Comprar um ativo',
          description: 'Para comprar um ativo clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
          security: [
            { bearerAuth: [] },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    CodAtivo: {
                      type: 'string',
                    },
                    QtdeAtivo: {
                      type: 'number',
                    },
                  },
                  example: {
                    CodAtivo: 'XPBR31',
                    QtdeAtivo: 100,
                  },
                },
              },
            },
          },

          responses: {
            200: {
              description: 'Success',
            },
            400: {
              description: 'Bad Request',
            },
            401: {
              description: 'Unauthorized',
            },
            422: {
              description: 'Unprocessable Entity',
            },
            500: {
              description: 'Internal Server Error',
            },
          },
        },

      },
      '/investimentos/vender': {
        post: {
          tags: ['Investimentos'],
          summary: 'Vender um ativo',
          description: 'Para vender um ativo clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
          security: [
            { bearerAuth: [] },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    CodAtivo: {
                      type: 'string',
                    },
                    QtdeAtivo: {
                      type: 'number',
                    },
                  },
                  example: {
                    CodAtivo: 'XPBR31',
                    QtdeAtivo: 10,
                  },
                },
              },
            },
          },

          responses: {
            200: {
              description: 'Success',
            },
            400: {
              description: 'Bad Request',
            },
            401: {
              description: 'Unauthorized',
            },
            422: {
              description: 'Unprocessable Entity',
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
