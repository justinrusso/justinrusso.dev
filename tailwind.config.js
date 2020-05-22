module.exports = {
  purge:
    process.env.NODE_ENV === "production"
      ? ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"]
      : undefined,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
