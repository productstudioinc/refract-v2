import { protectedProcedure, publicProcedure } from "../lib/orpc";

export const appRouter = {
	healthCheck: publicProcedure.handler(() => {
		return "OK";
	}),
	privateData: protectedProcedure.handler(({ context }) => {
		return {
			message: "This is private",
			user: context.session?.user,
		};
	}),
	getSession: publicProcedure.handler(({ context }) => {
		return context.session ?? null;
	}),
};
export type AppRouter = typeof appRouter;
