module.exports = {

  client: {
    pageTitle: "Bug Tracker",
    faviconLink: 'https://reactbugtracker.com/favicon.ico'
  },

  globalHeader: {
    headerTitle: "BugTracker",
    headerColor: "rgba(0,0,0,0.125)",
    headerFontSize: "30px",
    fontWeight: "400",
    fontFamily: "segoe ui",
    fontColor: "#212529",
    imageSize: "30x30",
    textAlign: "center"
  },

  loginPageFunctionality: {
    minLength: 1,
    midLength: 22,
    maxLength: 45,
    noLoginOrPassError: 'Specify email and password',
    wrongLoginError: 'User with this email does not exist'
  },

  registrationPageFunctionality: {
    minLength: 1,
    maxLength: 20,
    emptyFieldError: 'Please fill all the fields'
  },

  navigationBarFunctionality:{
    length: "flex",
    navBarColor: "rgba(0,0,0,0.03)",
    navBarFont: "segoe ui",
    navBarFontSize: "16px",
    navBarFontWeight: "400",
    navBarButtonsFontColor: "rgba(255,255,255,1)",
    BackgroundColor1: "rgba(23,162,184,1)",
    BackgroundColor2: "rgba(108,117,125,1)"

  }
};