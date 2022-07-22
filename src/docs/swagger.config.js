const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Api desafio XP',
      version: '1.0.0',
      description: 'Documentação da API desafio XP.',
    },
    components: {
      schemas: {
        Cliente: {
          type: 'object',
          properties: {
            Conta: {
              type: 'string',
              example: '12345-6',
              description: 'Número da conta',
            },
            token: {
              type: 'string',
              example:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
              description: 'Token de autenticação',
            },
          },
        },
        Clientes: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: '99e98dcd-1f48-4ada-ab88-43381f55ae28',
              description: 'ID do cliente',
            },
            name: {
              type: 'string',
              example: 'pedro',
              description: 'Nome do cliente',
            },
            cpf: {
              type: 'string',
              example: '12345678901',
              description: 'CPF do cliente',
            },
            account: {
              type: 'string',
              example: '12345-6',
              description: 'Número da conta',
            },
            admin: {
              type: 'boolean',
              example: 1,
              description: 'pessoa administradora',
            },
          },

        },
        Login: {
          type: 'object',
          properties: {
            token: {
              type: 'string',
              example:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
              description: 'Token de autenticação',
            },
          },
        },
        Ativo: {
          type: 'object',
          properties: {
            CodAtivo: {
              type: 'string',
              example: 'XPBR31',
              description: 'Código do ativo',
            },
            QtdeAtivo: {
              type: 'number',
              example: 100,
              description: 'Quantidade do ativo',
            },
            Valor: {
              type: 'string',
              example: 'R$ 99.00',
              description: 'Cotação do ativo',
            },
          },
        },
        AtivoAdd: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'O ativo ABCD3 foi adicionado com sucesso!',
              description: 'Mensagem de retorno',
            },
          },
        },
        AtivoCliente: {
          type: 'object',
          properties: {
            CodCliente: {
              type: 'string',
              example: '3b44f566-0a52-4c03-9f65-53dfe0eef12d',
              description: 'Código do cliente',
            },
            CodAtivo: {
              type: 'string',
              example: 'XPBR31',
              description: 'Código do ativo',
            },
            QtdeAtivo: {
              type: 'number',
              example: 100,
              description: 'Quantidade do ativo',
            },
            Valor: {
              type: 'string',
              example: 'R$ 99.00',
              description: 'Cotação do ativo',
            },
          },
        },
        Saldo: {
          type: 'object',
          properties: {
            CodCliente: {
              type: 'string',
              example: '3b44f566-0a52-4c03-9f65-53dfe0eef12d',
              description: 'Código do cliente',
            },
            Saldo: {
              type: 'string',
              example: 'R$ 1.000,00',
              description: 'Saldo do cliente',
            },
          },
        },
        Deposito: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Depósito realizado com sucesso!',
              description: 'Mensagem de retorno',
            },
          },
        },
        Saque: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Saque realizado com sucesso!',
              description: 'Mensagem de retorno',
            },
          },
        },
        Compra: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Compra realizado com sucesso!',
              description: 'Mensagem de retorno',
            },
          },
        },
        Venda: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Venda realizado com sucesso!',
              description: 'Mensagem de retorno',
            },
          },
        },
        EditarCliente: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Dados atualizados com sucesso!',
              description: 'Mensagem de retorno',
            },
          },
        },
      },

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
      '/clientes': {
        post: {
          tags: ['Clientes'],
          summary: 'Criar uma pessoa cliente',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    Nome: {
                      type: 'string',
                    },
                    CPF: {
                      type: 'string',
                    },
                    Senha: {
                      type: 'string',
                    },
                  },
                  example: {
                    Nome: 'laecio silva',
                    CPF: '00000000001',
                    Senha: '123456',
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Created',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    $ref: '#/components/schemas/Cliente',
                  },
                },
              },
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
      '/clientes/editar': {
        put: {
          tags: ['Clientes'],
          summary: 'Atualizar os dados da pessoa cliente',
          description:
            'Para atualizar os dados clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
          security: [{ bearerAuth: [] }],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    Nome: {
                      type: 'string',
                    },
                    Senha: {
                      type: 'string',
                    },
                  },
                  example: {
                    Nome: 'laecio pereira',
                    Senha: '1234567',
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Created',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    $ref: '#/components/schemas/EditarCliente',
                  },
                },
              },
            },
            400: {
              description: 'Bad Request',
            },
            500: {
              description: 'Internal Server Error',
            },
          },
        },
      },
      '/clientes/login': {
        post: {
          tags: ['Clientes'],
          summary: 'Fazer login',
          description: 'Faz login da pessoa',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    CPF: {
                      type: 'string',
                    },
                    Senha: {
                      type: 'string',
                    },
                  },
                  example: {
                    CPF: '00000000000',
                    Senha: '123456',
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    $ref: '#/components/schemas/Login',
                  },
                },
              },
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

      '/clientes/ativos': {
        get: {
          tags: ['Clientes'],
          summary: 'Buscar todos os ativos da pessoa cliente',
          description:
            'Para buscar os ativos clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/AtivoCliente',
                    },
                  },
                },
              },
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
      '/clientes/ativos/{CodAtivo}': {
        get: {
          tags: ['Clientes'],
          summary: 'Buscar um ativo específico',
          description:
            'Para buscar os ativos clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: 'CodAtivo',
              in: 'path',
              description: 'Código do ativo',
              required: true,
              schema: {
                type: 'string',
              },
              example: 'XPBR31',
            },
          ],
          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    $ref: '#/components/schemas/AtivoCliente',
                  },
                },
              },
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
          description:
            'Para pegar o saldo clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
          security: [{ bearerAuth: [] }],

          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    $ref: '#/components/schemas/Saldo',
                  },
                },
              },
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
          description:
            'Para fazer o depósito clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
          security: [{ bearerAuth: [] }],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    Valor: {
                      type: 'number',
                    },
                  },
                  example: {
                    Valor: 1000,
                  },
                },
              },
            },
          },

          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    $ref: '#/components/schemas/Deposito',
                  },
                },
              },
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
          description:
            'Para fazer o saque clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
          security: [{ bearerAuth: [] }],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    Valor: {
                      type: 'number',
                    },
                  },
                  example: {
                    Valor: 100,
                  },
                },
              },
            },
          },

          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    $ref: '#/components/schemas/Saque',
                  },
                },
              },
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
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Ativo',
                    },
                  },
                },
              },
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
          description:
            'Para comprar um ativo clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
          security: [{ bearerAuth: [] }],
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
              content: {
                'application/json': {
                  schema: {
                    type: 'array',

                    $ref: '#/components/schemas/Compra',
                  },
                },
              },
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
          description:
            'Para vender um ativo clique no 🔓 e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiM2I0NGY1NjYtMGE1Mi00YzAzLTlmNjUtNTNkZmUwZWVmMTJkIn0sImlhdCI6MTY1ODI3MTQ2MCwiZXhwIjoxNjY2OTExNDYwfQ.pUbS_i8_h2nGl8gNmuC79dm_ZlzUTdUfzgEZGsvwreY',
          security: [{ bearerAuth: [] }],
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
              content: {
                'application/json': {
                  schema: {
                    type: 'array',

                    $ref: '#/components/schemas/Venda',
                  },
                },
              },
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
      '/admin/clientes': {
        get: {
          tags: ['Área Administrativa'],
          summary: 'Listar os clientes',
          description:
            'Para listar todos os clientes precisa está autenticado com uma pessoa admin! \n\n caso já tenha adicionado o token anteriormente  clique no 🔒 faça o logout e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiOTllOThkY2QtMWY0OC00YWRhLWFiODgtNDMzODFmNTVhZTI4In0sImlhdCI6MTY1ODUxMjY1MywiZXhwIjoxNjU4Njg1NDUzfQ.Ml6p81h4ZYPjeVO__EG9buKsLtgP_7ELZyTiQa2DJrk',
          security: [{ bearerAuth: [] }],

          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Clientes',
                    },
                  },
                },
              },
            },
            400: {
              description: 'Bad Request',
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

      '/admin/investimentos/adicionar': {
        post: {
          tags: ['Área Administrativa'],
          summary: 'Adicionar um ativo',
          description:
          'Para adicionar um ativo precisa está autenticado com uma pessoa admin! \n\n caso já tenha adicionado o token anteriormente  clique no 🔒 faça o logout e cole esse token: \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiOTllOThkY2QtMWY0OC00YWRhLWFiODgtNDMzODFmNTVhZTI4In0sImlhdCI6MTY1ODUxMjY1MywiZXhwIjoxNjU4Njg1NDUzfQ.Ml6p81h4ZYPjeVO__EG9buKsLtgP_7ELZyTiQa2DJrk',
          security: [{ bearerAuth: [] }],
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
                    Valor: {
                      type: 'number',
                    },

                  },
                  example: {
                    CodAtivo: 'MODL11',
                    QtdeAtivo: 100,
                    Valor: 8.29,
                  },
                },
              },
            },
          },

          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',

                    $ref: '#/components/schemas/AtivoAdd',
                  },
                },
              },
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
