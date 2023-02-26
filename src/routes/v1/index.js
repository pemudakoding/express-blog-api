const express = require("express");
const expressValidator = require('express-validator')
const blogRoutes = require('./blog.route');

const routes = {
  'blog': blogRoutes
};

module.exports = function (app) {
  app.use(express.json())

  for(const prefix in routes) {
    app.use(`/api/v1/${prefix}`, routes[prefix])
  }
}