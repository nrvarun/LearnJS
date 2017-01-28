"use strict";

console.log("Module 1 loaded");

var $  = require('jquery');

$("p").html("Viola damn bro, it works :D");
console.log($("p").addClass("active"));

const obj = {};
var name = 'varun';

[obj.a,obj.b] = ["varun","26"];

console.log(obj.a);