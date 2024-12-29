/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html", // Для HTML-файла
		"./src/**/*.{js,jsx,ts,tsx,scss}", // Для файлов исходного кода
	],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

