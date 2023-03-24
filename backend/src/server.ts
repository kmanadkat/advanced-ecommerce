import express from 'express';
import cors from 'cors';
import registerApolloServer from './graphql/apolloServer';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	return res.status(200).json({ message: 'Ecommerce Merch API' });
});

registerApolloServer(app);

export default app;
