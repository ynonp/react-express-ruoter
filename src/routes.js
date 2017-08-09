import Home from './app/pages/home';
import About from './app/pages/about';

export default function addRoutes(router) {
  router.get('/', (req, res, next) => {
    res.locals.component = Home;
    res.locals.initialState = { name: 'ynon' };
    next();
  });

  router.get('/about', (req, res, next) => {
    res.locals.component = About;
    next();
  });
}
