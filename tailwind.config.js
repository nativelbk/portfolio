import {nextui} from "@nextui-org/react";

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: "#fff",
        whiteBorder: "rgba(255,255,255,0.19)",
        whiteText: "rgba(255,255,255,0.8)",
        yellow: '#FFD600',
        blue: "#3A86FF",
        frame: "rgba(141,132,132,0.08)",
        red: "#EF080F"
      }
    },
  },
  plugins: [nextui({
    themes: {
      light: {
        // ...
        colors: {
          foreground: "#fff"
        },
      },
      dark: {
        // ...
        colors: {
          foreground: "#fff"
        }
        
      },
      // ... custom themes
    },
  })],
}
export default config
