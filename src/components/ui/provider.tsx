"use client";

import {
	ChakraProvider,
	createSystem,
	defaultConfig,
	defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { ThemeProviderProps } from "next-themes";

const config = defineConfig({
	globalCss: {
		html: {
			colorPalette: "purple",
		},
	},
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ThemeProviderProps) {
	return (
		<ChakraProvider value={system}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
}
