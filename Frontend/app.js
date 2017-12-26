var app = angular.module("iClinical", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/")
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/login.html",
      controller: "loginController"
    })
    .state("dashboard", {
      url: "/dashboard",
      templateUrl: "./views/dashboard.html",
      controller: "dashboardController"
    })
    .state("userSignup", {
      url: "/usersignup",
      templateUrl: "./views/userSignup.html",
      controller: "userController"
    })
    .state("companySignup", {
      url: "/companysignup",
      templateUrl: "./views/companySignup.html",
      controller: "companyController"
    })
    .state("matches", {
      url: "/matches",
      templateUrl: "./views/matches.html",
      controller: "matchController"
    })
    .state("companyDashboard", {
      url: "/companydashboard",
      templateUrl: "./views/companyDashboard.html",
      controller: "companyController"
    })
    .state("successPage", {
      url: "/successpage",
      templateUrl: "./views/successPage.html",
      controller: "companyController"
    })
    .state("userSuccessPage", {
      url: "/usersuccesspage",
      templateUrl: "./views/userSuccessPage.html",
      controller: "userController"
    })
    .state("companyLogin", {
      url: "/companylogin",
      templateUrl: "./views/companyLogin.html",
      controller: "loginController"
    })

})