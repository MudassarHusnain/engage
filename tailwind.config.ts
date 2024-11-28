import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGray: "#F8F9FC",
        textColor: "#B3B3B3",
        HiIconColor: "#B2C8F8",
        performanceColor: "#F8F9FC",
        rankeColor: "#1A5CEB",
        rankeBg: "#E7EEFE",
        navBg: "#F8F9FC",
        engageColor: "#1A5CEB",
        navText: "#424242",
        hoverTableRecord: "#F6F6F9",
        logOutColor: "#E42B30",
        linksColor: "#424242",
        slaMWarning: "#ED8B18",
        slaDanger: "Danger/Medium",
        totalLeadColor: "#3C5891",
      },
    },
  },
  plugins: [],
} satisfies Config;
