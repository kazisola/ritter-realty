import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary-color)",
                secondary: "var(--secondary-color)",
            },
            backgroundColor: {
                primary: "var(--primary-color)",
                secondary: "var(--secondary-color)"
            },
            textColor: {
                primary: "var(--primary-color)",
                secondary: "var(--secondary-color)"
            },
        },
    },
    plugins: [],
};

export default config;
