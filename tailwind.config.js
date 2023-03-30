function withOpacity(variableName) {
  return ({ opacityValue }) => {
    console.log(opacityValue);
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        light: {
          primary: withOpacity("--color-text"),
          secondary: withOpacity("--color-secondary"),
        },
        dark: {
          primary: withOpacity("--color-textdark"),
          secondary: withOpacity("--color-textdarksecondary"),
        },
      },
      backgroundColor: {
        light: {
          primary: withOpacity("--color-bglight"),
        },
        dark: {
          primary: withOpacity("--color-bgdark"),
        },
        general: {
          violet: withOpacity("--color-bgviolet"),
        },
      },
      ringColor: {
        dark: {
          primary: withOpacity("--color-bgdark"),
        },
        light: {
          primary: withOpacity("--color-secondary"),
        },
      },
      textDecorationColor: {
        general: {
          violet: withOpacity("--color-bgviolet"),
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
