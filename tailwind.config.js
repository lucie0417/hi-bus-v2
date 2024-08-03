/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'black': '#262626',
        'main-blue': '#5468FF',
        'main-red': '#EB7A77',
        'main-yellow': '#EDBA55',
        'main-purple': '#5457A5',
        'beige': '#F3E9D8',
        gray: {
          dark: '#333333',
          default: '#91989F',
        },

        border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
      fontFamily: {
        'sans': ['Noto Sans TC', 'sans-serif'],
        'english': ['Lato'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxHeight: {
        '256': '256px',
        '320': '320px',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "navbar": "navbar 3s ease infinite",
        "bus": "bus 18s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      "keyframes": {
        "navbar": {
          "0%,100%": { backgroundPosition: "0%,50%" },
          "50%": { backgroundPosition: "100%, 50%" }
        },
        "bus": {
          "0%": { transform: "translateX(0) scaleX(1)" },
          "50%": { transform: "translateX(calc(100vw - 100%)) scaleX(1)" },
          "50.01%": { transform: "translateX(calc(100vw - 100%)) scaleX(-1)" },
          "100%": { transform: "translateX(0) scaleX(-1)" },
        },
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}