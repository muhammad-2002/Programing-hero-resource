const { Cardo } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
       carDoctorPro: {
        ...require('daisyui/src/theming/themes')['light'],
          "primary": "#FF3811",
          "secondary": "#f6d860",
         '.btn-primary':{
          "color":"#fff"
         },
         ".btn-outline.btn-primary:hover":{
          "color":"#fff"
         }
        },
      },
      "dark",
      "light",
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
