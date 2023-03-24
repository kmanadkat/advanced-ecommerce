import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

interface AuthContext {
	user?: { id: String; role: String };
}

const registerApolloServer = async (app) => {
	const server = new ApolloServer<AuthContext>({
		typeDefs,
		resolvers,
	});
	await server.start();

	app.use(
		'/graphql',
		expressMiddleware(server, {
			context: async ({ req, res }) => {
				return {};
			},
		})
	);
	console.log('✅ GraphQL Server Running');
};

export default registerApolloServer;
