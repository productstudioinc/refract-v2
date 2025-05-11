import { authClient } from "@/lib/auth-client";
import { useORPC } from "@/utils/orpc.client";
import { useQuery } from "@tanstack/react-query";

export default function DashboardClient() {
	const orpc = useORPC();
	const privateData = useQuery(orpc.privateData.queryOptions());
	const { data: session } = authClient.useSession();

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Welcome {session?.user.name}</p>
			<p>privateData: {privateData.data?.message}</p>
		</div>
	);
}
