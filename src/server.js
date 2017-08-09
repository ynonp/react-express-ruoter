import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';

import addRoutes from './routes';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/about', function(req, res, next) {
  res.locals.initialState = { text: 'I can see the mountains' };
  next();
});

addRoutes(server);

server.use(function(req, res, next) {
  const { component, initialState } = res.locals;
  if (!component) {
    return next();
  }

  res.format({
    'text/html': function() {
      const appString = renderToString(React.createElement(component, initialState));
      res.send(template({
        body: appString,
        title: 'Hello World from the server',
        initialState: JSON.stringify(initialState)
      }));
    },

    'application/json': function() {
      res.send(initialState);
    },
  });

  next();
});

server.listen(8080);
console.log('listening');
