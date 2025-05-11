"use client";

import { createContext, use } from "react";
import type { ORPCReactUtils } from "./orpc";

export const ORPCContext = createContext<ORPCReactUtils | undefined>(undefined);

export function useORPC(): ORPCReactUtils {
	const orpc = use(ORPCContext);
	if (!orpc) {
		throw new Error("ORPCContext is not set up properly");
	}
	return orpc;
}
