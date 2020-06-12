import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import graphqlHTTP from 'express-graphql';
import schema from './src/graphql/schema';
import cors from 'cors';


const env = process.env.NODE_ENV || 'local';
console.log(`=======================> start ${env} mode`);
dotenv.config({ silent: true, path: path.resolve(__dirname, '.env') });

const port = process.env.PORT;
import connMongo from './connMongo';
import Todo from "./src/models/todo";

const app = express();
app.use(cors());

app.use(`/graphql`, graphqlHTTP({
    schema,
    graphiql: true
}))
process.on('uncaughtException', (err) => {
    console.log('================== uncauchtgException ocurred ==================');
    console.error(err);
    console.log('================================================================');
});
app.listen(port, () => {
    console.log(`서버실행 ${port}`)
})
