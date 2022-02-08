import FastifyCors from 'fastify-cors'
import Fastify from 'fastify'
import $server from './$server';

const fastify = Fastify();

fastify.register(FastifyCors, {
  // put your options here
})

// fastify.get('/', (req, reply) => {
//   reply.send({hello: 'world'})
// })
// 
// fastify.get('/hi', (req, reply) => {
//   reply.send({hello: 'how are you?'})
// })
$server(fastify);

fastify.listen(8888, '0.0.0.0')
