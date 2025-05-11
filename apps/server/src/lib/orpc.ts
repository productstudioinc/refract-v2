import { os, ORPCError } from "@orpc/server";
import type { Context } from "./context";

export const o = os.$context<Context>();

const optionalSessionMiddleware = o.middleware(async ({ context, next }) => {
	return next({
		context: {
			...context,
			session: context.session,
		},
	});
});

export const publicProcedure = o.use(optionalSessionMiddleware);

const requireAuth = o.middleware(async ({ context, next }) => {
	if (!context.session?.user) {
		throw new ORPCError("UNAUTHORIZED");
	}
	return next({
		context: {
			...context,
			session: context.session,
		},
	});
});

export const protectedProcedure = publicProcedure.use(requireAuth);
