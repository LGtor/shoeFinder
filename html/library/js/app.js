/*jslint browser: true */
/*global $, jQuery, alert, console, Foundation5Boilerplate:true */

var console = console || { log: function() { 'use strict'; } };



window.shoeFinder = window.shoeFinder || {};

(function (s) {

    'use strict';

    s.App = function () {

        return {
            initialized: false,
            elements: {},
            settings: {
                debug: false,
                host_url: 'http://' + window.location.hostname + '/'
            },

            init: function () {


                if (this.settings.debug) { console.log('init()'); }

                if (this.initalized) { return false; }
                this.initialized = true;

                //dom elements
                this.elements.body =  $('body', 'html');
                this.elements.debug = $('#txtDebug', this.elements.body);
                // this.elements.currentYear = $('.current-year', this.elements.footer);

                //configure debug based on config file
                if (this.elements.debug.val()) {
                    this.settings.debug = true;
                    this.initDebug();
                }

                //initialize foundation
                $(document).foundation();


            },

       
            initDebug: function () {

                if (this.settings.debug) { console.log('initDebug()'); }

                $(this.elements.body).append('<div id="debug-message"></div>');
                $('#debug-message').append('<p class="small">small</p><p class="medium">medium</p><p class="large">large</p><p class="exlarge">extra large</p>');
                $(window).resize(function () {
                    $('#debug-message').empty();
                    $('#debug-message').append('<p class="small">small</p><p class="medium">medium</p><p class="large">large</p><p class="exlarge">extra large</p>');
                    $('#debug-message').append('<p>width: ' + window.innerWidth + '</p>');
                });

            }

        };

    };

}(shoeFinder));



$(document).ready(function() {
    'use strict';
    shoeFinder.App().init();
});

/* ==========================================================================
    START ANGULAR APP
 ========================================================================== */


   var app = angular.module('myApp', []);


   app.controller('mainController', ['$scope', function($scope) {

       $scope.selectedShoes = [];

       $scope.process = function() {

           $scope.selectedShoes = [];

           var userSelected = $scope.userSelected;

           for (var i = 0; i < $scope.shoes.length; i++) {
               if ($scope.shoes[i].brand === userSelected) {
                   $scope.selectedShoes.push($scope.shoes[i]);
               }
           }

       };

       $scope.shoes = [

            {
               brand: "Nike",
               gender: "male",
               model: "Free 5.0",
               color: "black",
               activity: "running",
               price: 129.99,
               image: "../html/library/images/nikeFree5.0.jpg"
           },

           {
               brand: "Nike",
               gender: "male",
               model: "Flyknit 4.0",
               color: "black",
               activity: "running",
               price: 159.99,
               image: "../html/library/images/nikeFlyknit.jpg"
           },

            {
               brand: "Nike",
               gender: "male",
               model: "Free 5.0",
               color: "black",
               activity: "running",
               price: 129.99,
               image: "../html/library/images/nikeFree5.0.jpg"
           },

           {
               brand: "Nike",
               gender: "male",
               model: "Flyknit 4.0",
               color: "black",
               activity: "running",
               price: 159.99,
               image: "../html/library/images/nikeFlyknit.jpg"
           },

            {
               brand: "Nike",
               gender: "male",
               model: "Free 5.0",
               color: "black",
               activity: "running",
               price: 129.99,
               image: "../html/library/images/nikeFree5.0.jpg"
           },

           {
               brand: "Nike",
               gender: "male",
               model: "Flyknit 4.0",
               color: "black",
               activity: "running",
               price: 159.99,
               image: "../html/library/images/nikeFlyknit.jpg"
           },

           {
               brand: "Reebok",
               gender: "male",
               model: "Z Pump Fusion ",
               color: "black /yellow",
               activity: "running",
               price: 139.99,
               image: "../html/library/images/reebokZPump.jpg"
           },

          {
              brand: "Reebok",
              gender: "male",
              model: "Z Pump Fusion ",
              color: "black /yellow",
              activity: "running",
              price: 139.99,
              image: "../html/library/images/reebokZPump.jpg"
          },

          {
              brand: "Reebok",
              gender: "male",
              model: "Z Pump Fusion ",
              color: "black /yellow",
              activity: "running",
              price: 139.99,
              image: "../html/library/images/reebokZPump.jpg"
          },

          {
              brand: "Reebok",
              gender: "male",
              model: "Z Pump Fusion ",
              color: "black /yellow",
              activity: "running",
              price: 139.99,
              image: "../html/library/images/reebokZPump.jpg"
          },

          {
              brand: "Reebok",
              gender: "male",
              model: "Z Pump Fusion ",
              color: "black /yellow",
              activity: "running",
              price: 139.99,
              image: "../html/library/images/reebokZPump.jpg"
          },

          {
              brand: "Reebok",
              gender: "male",
              model: "Z Pump Fusion ",
              color: "black /yellow",
              activity: "running",
              price: 139.99,
              image: "../html/library/images/reebokZPump.jpg"
          },

          {
              brand: "Reebok",
              gender: "male",
              model: "Z Pump Fusion ",
              color: "black /yellow",
              activity: "running",
              price: 139.99,
              image: "../html/library/images/reebokZPump.jpg"
          }




       ]



   }]);


