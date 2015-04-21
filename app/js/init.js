/**
 * Created by michaelt on 4/13/15.
 */

//Using Mustache for template engine
_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

//creating the global variable object
var app = {};