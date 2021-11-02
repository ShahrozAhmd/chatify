module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        githubIcon: "url('/src/Assets/images/icons/github_icon.png')",
        googleIcon: "url('/src/Assets/images/icons/google_icon.png')",
        spinner:"url('/src/Assets/images/icons/spinner.gif')"
      },
      backgroundSize: {},
    },

    screens: {
      msm: "320px",
      // => @media (min-width: 640px) { ... }

      mmd: "375px",
      // => @media (min-width: 768px) { ... }

      mlg: "425px",
      // => @media (min-width: 1024px) { ... }

      tbl: "768px",
      // => @media (min-width: 1280px) { ... }

      lpt: "1024px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
