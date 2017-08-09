import React from 'react';
import { render } from 'react-dom';
import Nighthawk from 'nighthawk';
import addRoutes from '../routes';

const router = Nighthawk();

addRoutes(router);

router.use(function(req, res, next) {
  fetch(req.url, {
    headers: {
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',    
    }
  }).
    then(function(serverResponse) {
      return serverResponse.json();
    }).
    then(function(data) {
      res.locals.initialState = data;
    }).
    then(next);
});

router.use(function(req, res, next) {

  render(
    React.createElement(res.locals.component, res.locals.initialState),
    document.getElementById('root'));

  next();
});

router.listen();
