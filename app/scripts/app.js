'use strict';

/**
 * @ngdoc overview
 * @name personalResumeApp
 * @description
 * # personalResumeApp
 *
 * Main module of the application.
 */
angular
  .module('personalResumeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
       .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  'use strict';

/** Resume App **/

var nicResume = angular.module('nicResume', []);

nicResume.controller('ResumeController', ['$scope',
    function($scope) {

        /* Configure your information here */
        var Page = {
            'name': 'Nicholas Boutte',
            'subtitle': 'Full-Stack Web Developer, boba tea and music enthusiast',
            'summary': 'I am a Bay Area native who has been coding for the past 5 years. I originally was introduced to coding through building Personal Web Pages for friends and family. At the time I only had a experience with Front-End, but upon learning RoR through General Assembly I gained a passion for not just Front-End Web Development but Back-End as well.',

            /* Start contact block */
            'contact': [
                {
                    'name': 'Email',
                    'link': 'mailto:nicboutte@gmail.com'
                },
                {
                    'name': 'GitHub',
                    'link': 'https://github.com/johnnycupcakes'
                },
                {
                    'name': 'LinkedIn',
                    'link': 'http://linkedin.com/in/yourlink'
                },
                {
                    'name': 'Twitter',
                    'link': 'https://twitter.com/username'
                },
            ],
            /* End contact block */

            /* Start skills block */
            'skills': [
                { 'text': 'HTML', 'level': 'ultra' },
                { 'text': 'Git', 'level': 'ultra' },
                { 'text': 'Github', 'level': 'ultra' },
                { 'text': 'Bootstrap', 'level': 'ultra' },
                { 'text': 'jQuery', 'level': 'ultra' },
                { 'text': 'CSS', 'level': 'ultra' },
                { 'text': 'Javascript', 'level': 'high' },
                { 'text': 'Ruby', 'level': 'high' },
                { 'text': 'Rails', 'level': 'high' },
                { 'text': 'Node.js', 'level': 'high' },
                { 'text': 'Ruby', 'level': 'high' },
                { 'text': 'AngularJS', 'level': 'medium' },
                { 'text': 'ExpressJS', 'level': 'medium' },
                { 'text': 'BackboneJS', 'level': 'medium' },
                { 'text': 'CoffeeScript', 'level': 'medium' },
                { 'text': 'PHP', 'level': 'low' },
            ],

            /* Start work experience block */
            'experience': [
                {
                    'company': 'General Assembly',
                    'title': 'Full-Stack Web Developer',
                    'location': 'San Francisco, CA',
                    'dates': '2014 - 2015',
                    'description': 'General Assembly WDI is a 12 week full time full stack web development course. The dense curriculum results in 12 hour days of coding in various languages, either alone, in a group, or pair programming. The course began with, JavaScript, Node.js, and Express. We finished by learning RoR, and Angular.',
                },
            ],
            /* End work experience block */

            /* Start recent projects block */
            'projects': [
                {
                    'title': 'Trendr',
                    'tech': 'ROR, JavaScript, AJAX, jQuery, PostgreSQL, Bootstrap',
                    'dates': '2015',
                    'description': 'Trendr is a web application that shows the top 10 trends by country. It uses several APIs including Google Trends, Twitter, Itunes, Youtube and Rotten Tomato Box Office to pull relevant data in real-time.| http://worldtrendr.herokuapp.com',
                },
                {
                    'title': 'Forecast Fits',
                    'tech': 'ROR, AJAX, jQuery, PostgreSQL, SASS',
                    'dates': '2014',
                    'description': 'Forecast Fits is a website I built that helps users decide what to wear based on a specific city’s forecast. Users are able to submit what they are wearing that day as well as comment on their individual outfit. It uses the Wunderground API to provide relevant weather information. |  http://forecastfits.herokuapp.com',
                },
                {
                    'title': 'Photo Finder',
                    'tech': 'Node.js, JavaScript, jQuery, PostgreSQL, Bootstrap',
                    'dates': '2013',
                    'description': 'My first interactive web application, Photo Finder shows where specific uploaded photos were taken with the Google Maps Geocoding API. | https://github.com/johnnycupcakes/photofinder',
                },
            ],
            /* End recent projects block */

            /* Start unrelated experience block */
            'unrelated': [
                {
                    'company': 'Tri-Valley Tutoring Academy',
                    'title': '3rd Grade Teacher',
                    'location': 'Pleasanton, CA',
                    'dates': '2013 - 2014',
                    
                },
                {
                    'company': 'Patterson Unified School District',
                    'title': 'Site Coordinator',
                    'location': 'Patterson, CA',
                    'dates': '2010 - 2013',
                    
                },
                {
                    'company': 'Kaiser Permanente Division of Research',
                    'title': 'Intern',
                    'location': 'Oakland, CA',
                    'dates': '2007 - 2008',
                    
                },
            ],
            /* End work experience block */

            /* Start education block */
            'education': [
                {
                    'name': 'General Assembly',
                    'degree': '',
                    'type': 'Web Development',
                    'dates': '2014 - 2015',
                },
                {
                    'name': 'CSU Stanislaus',
                    'degree': 'AA Equivalent',
                    'type': 'Undergraduate',
                    'dates': '2007 - 2009',
                },
            ],
        };
        $scope.Page = Page;
    }
]);

