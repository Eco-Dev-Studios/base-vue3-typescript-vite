import { defineConfig } from "vite-plugin-windicss";
import typography from "windicss/plugin/typography";
import colors from "windicss/colors";

export default defineConfig({
  darkMode: "class",
  plugins: [typography],
  shortcuts: {
    btn:
      "rounded border border-gray-300 text-gray-600 px-4 py-2 m-2 inline-block hover:shadow",
  },
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
});
