import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Nature theme colors
				'fresh-green': 'hsl(var(--fresh-green))',
				'fresh-green-light': 'hsl(var(--fresh-green-light))',
				'warm-orange': 'hsl(var(--warm-orange))',
				'cream': 'hsl(var(--cream))',
				'earth-brown': 'hsl(var(--earth-brown))',
				'sage-green': 'hsl(var(--sage-green))',
				'sage': 'hsl(var(--sage))',
				'natural-beige': 'hsl(var(--natural-beige))',
				'forest-green': 'hsl(var(--forest-green))',
				'sunshine-yellow': 'hsl(var(--sunshine-yellow))',
				// Trade theme colors
				'trade-blue': 'hsl(var(--trade-blue))',
				'trade-blue-light': 'hsl(var(--trade-blue-light))',
				'trade-gold': 'hsl(var(--trade-gold))',
				'trade-green': 'hsl(var(--trade-green))',
				// Luxury theme colors
				'luxury-gold': 'hsl(var(--luxury-gold))',
				'luxury-gold-light': 'hsl(var(--luxury-gold-light))',
				'luxury-navy': 'hsl(var(--luxury-navy))',
				'luxury-cream': 'hsl(var(--luxury-cream))',
				'luxury-dark': 'hsl(var(--luxury-dark))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			backgroundImage: {
				'gradient-trade': 'var(--gradient-trade)',
				'gradient-luxury': 'var(--gradient-luxury)',
				'gradient-luxury-subtle': 'var(--gradient-luxury-subtle)',
			},
			boxShadow: {
				'luxury': '0 10px 40px -10px hsl(var(--luxury-shadow))',
				'luxury-lg': '0 20px 60px -15px hsl(var(--luxury-shadow-lg))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
