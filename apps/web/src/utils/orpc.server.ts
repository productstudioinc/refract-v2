"use server";

import { createRouterClient } from "@orpc/server";
import { appRouter } from "../../../server/src/routers";
import { headers } from "next/headers";
import { auth } from "../../../server/src/lib/auth";

globalThis.$client = createRouterClient(appRouter, {
	context: async () => ({
		session: await auth.api.getSession({
			headers: await headers(),
		}),
	}),
});
