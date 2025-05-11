import type { RouterUtils } from "@orpc/react-query";

import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { createORPCReactQueryUtils } from "@orpc/react-query";
import type { RouterClient } from "@orpc/server";
import type { appRouter } from "../../../server/src/routers";

declare global {
	var $client: RouterClient<typeof appRouter> | undefined;
}

export type ORPCReactUtils = RouterUtils<RouterClient<typeof appRouter>>;

export const link = new RPCLink({
	url: `${process.env.NEXT_PUBLIC_SERVER_URL}/rpc`,
	fetch(url, options) {
		return fetch(url, {
			...options,
			credentials: "include",
		});
	},
});

export const client: RouterClient<typeof appRouter> =
	globalThis.$client ?? createORPCClient(link);

export const orpc = createORPCReactQueryUtils(client);
