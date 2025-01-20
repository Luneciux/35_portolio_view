import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
			'woodsmoke': {
				'50': '#f4f7f7',
				'100': '#e3eaea',
				'200': '#c9d5d8',
				'300': '#a4b8bc',
				'400': '#779299',
				'500': '#5c777e',
				'600': '#4f656b',
				'700': '#44545a',
				'800': '#3d484d',
				'900': '#363e43',
				'925': '#1c1f21',
				'950': '#0a0c0d',
			},
			'antique-brass': {
				'50': '#faf5f2',
				'100': '#f3e9e1',
				'200': '#e5d2c3',
				'300': '#d4b49d',
				'400': '#c49378',
				'500': '#b67659',
				'600': '#a8644e',
				'700': '#8c5042',
				'800': '#72433a',
				'900': '#5d3831',
				'950': '#311c19',
			},
    
			
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		// animation: {
		// 'infinite-scroll': 'infinite-scroll 25s linear infinite',
		// },
		// keyframes: {
		// 'infinite-scroll': {
		// 	from: { transform: 'translateX(0)' },
		// 	to: { transform: 'translateX(-100%)' },
		// }
		// }         
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
