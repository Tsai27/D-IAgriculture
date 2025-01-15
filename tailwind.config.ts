import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			// 12/17添加的团队成员部分的卡片颜色 --> 用于深色模式的颜色
			dark: {			// 使用方法： bg-dark-2/3/4/5...
				DEFAULT: '#111928',
				2: '#1f2a37',			// Team模块背景色 (暗色主题)
				3: '#374151',
				4: '#4B5563',
				5: '#457b9d',			// Footer模块背景色 (暗色主题)
				6: '#9CA3AF',
				7: '#D1D5DB',
				8: '#c2d7db',
				9: '#48adca'
			  },
			gray:{
				1:'#f9fafb',     // Team模块背景色-灰 (亮色主题)
				2:'#f4f8fc'		// Team模块背景色-偏蓝 (亮色主题)
			  },

			"custom-blue":'#008fc0',		// 默认蓝色
			"custom-white":"#ffecd1",			// footer标题
			"custom-blue1":"#7FC6DF"			// 按钮悬停色

  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'fade-up': 'fadeUp 0.5s ease-out forwards',
  			'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			'marquee': 'marquee 60s linear infinite',
			slideUp: "slideUp 0.5s",
			slideUpEaseInOut: "slideUp 0.5s ease-in-out",
			slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
  		},
		animationDelay: {
			0: "0s",
			2: "0.2s",
			4: "0.4s",
			6: "0.6s",
		  },
  		keyframes: {
  			fadeUp: {
  				'0%': { opacity: '0', transform: 'translateY(10px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' },
  			},
			  marquee: {
				'0%': { transform: 'translateX(0)' },
  				'100%': { transform: 'translateX(-50%)' },
  			},
			slideUp: {
				from: { transform: "translateY(100%)" },
				to: { transform: "translateY(0)" },
			},
  		},
  	}
  },
  plugins: [require("tailwindcss-animate"),require('@tailwindcss/typography')],
};
export default config;
