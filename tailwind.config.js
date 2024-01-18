/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-bordered": `linear-gradient(0deg, rgba(255,255,255,0), rgba(255,255,255,0)), url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23637CC7FF' stroke-width='1' stroke-dasharray='10' stroke-dashoffset='6' stroke-linecap='square'/%3e%3c/svg%3e")`,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "Primary/01": "#22315E",
        "Primary/03": "#39519C",
        "Primary/04": "#4462BB",
        "Primary/05": "#637CC7",
        "Secondary/02": "#DB1B3B",
        "Secondary/03": "#E6314F",
        "Neutral/01": "#000000",
        "Neutral/02": "#393939",
        "Neutral/03": "#555555",
        "Neutral/05": "#8E8E8E",
        "Neutral/07": "#E3E3E3",
        "Black/2": "#ABAFB1",
        "Boomaid/yellow": "#FAB446",
        "Alert/red": "#FF0000",
        Green: "#0F8731",
        Light: "rgba(255, 255, 255, 0.60)",
        "Input-active-color": "#3874FF",
        // Gray: "#fbfbfb",
      },
      boxShadow: {
        Gray: "0px 0px 9px 0px rgba(0, 0, 0, 0.15)",
        "Boomaid/yellow": "0px 0px 15px 0px rgba(250, 180, 70, 0.40)",
        "Neutral/07": "0px 0px 15px 0px rgba(0, 0, 0, 0.20)",
        Green: "0px 0px 15px 0px rgba(15, 135, 49, 0.40)",
        Red: "0px 0px 15px 0px rgba(255, 0, 0, 0.40)",
        "Input-active-color":
          "0px 0px 9px 0px rgba(0, 0, 0, 0.15), 0px 0px 0px 2px rgba(38, 132, 255, 0.20)",
        Menu: "1px 3px 29px 0px rgba(0, 0, 0, 0.18)",
        Header: "0px 0px 28px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
