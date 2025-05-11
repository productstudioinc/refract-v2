import { orpc } from "@/utils/orpc";
import { HydrateClient, getQueryClient } from "@/utils/tanstack-query.utils";
import Client from "./client";

export default async function Home() {
	const queryClient = getQueryClient();

	queryClient.prefetchQuery(
		orpc.healthCheck.queryOptions({
			queryKey: ["healthCheck"],
		}),
	);

	return (
		<HydrateClient>
			<Client />
		</HydrateClient>
	);
}
