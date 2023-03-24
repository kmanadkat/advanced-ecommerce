import prisma from '../db';

export default {
	Query: {
		users: async () => {
			return await prisma.user.findMany();
		},
	},

	Mutation: {
		createUser: async (parent, args, contextValue) => {
			const { displayName, email, password } = args;
			try {
				const newUser = await prisma.user.create({
					data: { displayName, email, password },
				});
				return newUser;
			} catch (error) {
				console.log(error);
			}
		},
	},
};
