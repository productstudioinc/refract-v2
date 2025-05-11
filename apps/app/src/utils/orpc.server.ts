import { createRouterClient } from "@orpc/server";
import { appRouter } from "../../../server/src/routers";

globalThis.$client = createRouterClient(appRouter, {
	context: async () => ({
		session: null,
	}),
});
