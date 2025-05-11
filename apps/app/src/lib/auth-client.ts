import { withRelatedProject } from "@vercel/related-projects";
import { createAuthClient } from "better-auth/react";

const apiHost = withRelatedProject({
	projectName: "refract-v2-web-g9ls",
	defaultHost: process.env.NEXT_PUBLIC_SERVER_URL || "",
});

export const authClient = createAuthClient({
	baseURL: apiHost,
});

export type Session = typeof authClient.$Infer.Session;
