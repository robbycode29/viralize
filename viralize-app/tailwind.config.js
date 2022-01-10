module.exports = {
  content: [
    "./src/app/dashboard/dashboard.component.{html, ts}", 
    "./src/app/dashboard/loginpage/loginpage.component.{html, ts}",
    "./src/app/dashboard/loginpage/login/login.component.{html, ts}",
    "./src/app/dashboard/loginpage/signup/signup.component.{html, ts}"
  ],
  // purge: [],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
