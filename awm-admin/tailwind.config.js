module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#1D4ED8",
        customGray: "#6B7280",
      },
      animation:{
        'loader-spin': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};

