import { defineConfig } from "vite-plugin-windicss";
import typography from "windicss/plugin/typography";
import colors from "windicss/colors";

export default defineConfig({
  attributify: true,
  darkMode: "class",
  plugins: [typography()],
  shortcuts: {
    container: "w-full relative -xl:px-4",
    layout: "mx-auto max-w-screen-xl relative -xl:w-full",
    btn: "rounded border border-gray-300 text-gray-600 px-4 py-2 m-2 inline-block hover:shadow",
  },
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
});
