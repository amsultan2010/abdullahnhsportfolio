/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment:       '#F9F5EE',
        'parchment-deep':'#F2EDE3',
        'parchment-card':'#FFFFFF',
        'border-warm':   '#D4C9A8',
        'border-subtle': '#E8E0D0',
        espresso:        '#2C1A0A',
        cognac:          '#8B5A2B',
        gold:            '#C4922A',
        'text-primary':  '#1A0E04',
        'text-secondary':'#5C4430',
        'text-muted':    '#9A8570',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        body:  ['var(--font-garamond)',  'EB Garamond',        'Georgia', 'serif'],
        mono:  ['var(--font-courier)',   'Courier Prime',      'Courier New', 'monospace'],
      },
      maxWidth: {
        content: '1400px',
      },
      fontSize: {
        'display': ['clamp(64px,8.5vw,110px)', { lineHeight: '1.03', letterSpacing: '-0.025em' }],
        'display-sm': ['clamp(44px,6vw,80px)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        'section-title': ['clamp(28px,3vw,40px)', { lineHeight: '1.2' }],
        'card-title': ['clamp(22px,2.2vw,30px)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'body-lg': ['20px', { lineHeight: '1.8' }],
        'body-md': ['18px', { lineHeight: '1.75' }],
        'label':   ['13px', { lineHeight: '1', letterSpacing: '0.18em' }],
        'label-sm':['11px', { lineHeight: '1', letterSpacing: '0.2em' }],
      },
    },
  },
  plugins: [],
}
