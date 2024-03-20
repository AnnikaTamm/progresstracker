/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,svelte,ts}",],
  theme: {


    extend: {
      colors:{
        'custom-green':'#dcf900',
        'custom-blue':'#a9FEEE',
        'custom-teal':'#294B48',
        'custom-teal-light':'#00D4AB',
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },

}

