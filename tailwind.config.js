// /** @type {import('tailwindcss').Config} */
// export const darkMode = ["class"];
// export const content = [
//   "./pages/**/*.{ts,tsx}",
//   "./components/**/*.{ts,tsx}",
//   "./app/**/*.{ts,tsx}",
//   "./index.html",
//   "./src/**/*.{js,ts,jsx,tsx}",
// ];
// export const theme = {
//   container: {
//     center: true,
//     padding: "2rem",
//     screens: {
//       "newLg": "1210px",
//       "2xl": "1400px",
//     },
//   },
//   extend: {
//     fontFamily: {
//       bangers: ["Bangers", "sans-serif"],
//       marker: ["Permanent Marker"],
//     },
//     colors: {
//       border: "#000",   // Black border color
//       input: "#F7FAFC", // Cool Gray-Light for input background
//       ring: "#4A5568",  // Gray-Dark for rings
//       background: "#F7FAFC", // Cool Gray-Light for background
//       foreground: "#000",   // Black text for better visibility
//       primary: {
//         DEFAULT: "#F7FAFC", // Cool Gray-Light for primary background
//         foreground: "#000",   // Black text for better visibility
//       },
//       secondary: {
//         DEFAULT: "#F7FAFC", // Cool Gray-Light for secondary background
//         foreground: "#000",   // Black text for better visibility
//       },
//       destructive: {
//         DEFAULT: "#F7FAFC", // Cool Gray-Light for destructive background
//         foreground: "#000",   // Black text for better visibility
//       },
//       muted: {
//         DEFAULT: "#F7FAFC", // Cool Gray-Light for muted background
//         foreground: "#000",   // Black text for better visibility
//       },
//       accent: {
//         DEFAULT: "#F7FAFC", // Cool Gray-Light for accent background
//         foreground: "#000",   // Black text for better visibility
//       },
//       popover: {
//         DEFAULT: "#000000", // Cool Gray-Light for popover background
//         foreground: "#000",   // Black text for better visibility
//       },
//       card: {
//         DEFAULT: "#F7FAFC", // Cool Gray-Light for card background
//         foreground: "#000",   // Black text for better visibility
//       },
//     },
//     borderRadius: {
//       lg: "var(--radius)",
//       md: "calc(var(--radius) - 2px)",
//       sm: "calc(var(--radius) - 4px)",
//     },
//     keyframes: {
//       "accordion-down": {
//         from: { height: 0 },
//         to: { height: "var(--radix-accordion-content-height)" },
//       },
//       "accordion-up": {
//         from: { height: "var(--radix-accordion-content-height)" },
//         to: { height: 0 },
//       },
//     },
//     animation: {
//       "accordion-down": "accordion-down 0.2s ease-out",
//       "accordion-up": "accordion-up 0.2s ease-out",
//     },
//   },
// };
// export const plugins = [require("tailwindcss-animate")];


/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "newLg":"1210px",
      "2xl": "1400px",
    },
  },
  extend: {
    fontFamily: {
      bangers: ["Bangers","sans-serif"],
      marker:["Permanent Marker"]
    },
    colors: {
            border: "#000",   // Black border color
            input: "#F7FAFC", // Cool Gray-Light for input background
            ring: "#4A5568",  // Gray-Dark for rings
            background: "#F7FAFC", // Cool Gray-Light for background
            foreground: "#000",   // Black text for better visibility
            primary: {
              DEFAULT: "#F7FAFC", // Cool Gray-Light for primary background
              foreground: "#000",   // Black text for better visibility
            },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};
export const plugins = [require("tailwindcss-animate")];