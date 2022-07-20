const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const schema = require('./schemas')
const PORT = 8080;



const graphqlRouter = require('./routes/graphql');

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.get('/test', (req, res) => {
  res.send({done: true});
})

app.listen(PORT);