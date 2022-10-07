const path = require("path");
require('dotenv').config()
const fastify = require('fastify')({
    logger: {
      transport: {
        target: 'pino-pretty'
      },
      serializers: {
        res (reply) {
          // The default
          return {
            statusCode: reply.statusCode
          }
        },
        req (request) {
          return {
            method: request.method,
            url: request.url,
            path: request.routerPath,
            parameters: request.params,

          };
        }
      }
    }
  });
const cors = require('@fastify/cors')


const get_twitch = require('./services/twitch')
const get_discord = require('./services/discord')
const get_server = require('./services/mc')
const get_trovo = require('./services/trovo')

fastify.register(require("@fastify/formbody"));

await fastify.register(cors, {
  origin: (origin, cb) => {
    const hostname = new URL(origin).hostname
    if(hostname === "https://curly.team"){
      //  Request from localhost will pass
      cb(null, true)
      return
    }
    // Generate an error on other origins, disabling access
    cb(new Error("Not allowed"), false)
  }
})


fastify.get('/twitch/:user', async (req, reply) => {
  let user = req.query.user;
  let info = await get_twitch(user)

    reply.send(info);
});

fastify.get('/trovo/:user', async (req, reply) => {
  let user = req.query.user;
  let info = await get_trovo(user)

    reply.send(info.data);
});


fastify.get('/discord/:user_id', async (req, reply) => {
    let user_id = req.query.user_id;
    let info = await get_discord(user_id)

    reply.send(info);
});

fastify.get('/mc', async (req, reply) => {
  let user_id = req.query.user_id;
  let info = await get_server()

  reply.send(info);
});



fastify.post('/', (req, reply) => {
    reply.send(req.body)
  })

  fastify.listen({ port: 8000 }, (err) => {
    if (err) throw err
  })