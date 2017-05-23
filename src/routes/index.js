'use strict';
import demo from './demo';

export default function (app) {
  app.use('/demo', demo);
  app.use((req, res) => {
    res.status(404).render('404',  { layout: false });
  });
}
