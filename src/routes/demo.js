'use strict';
import express from 'express';
import Demo from '../models/demo';
import DemoSerializer from '../serializers/demo';

const router = express.Router();

// render a html page
//
router.get('/:id',  (req, res) => {
  let name = req.query.name;
  let id = req.params.id;
  let demo = new Demo(name);
  res.render('./demo/index', { demoId: id, demo: demo.demoMessage });
});

router.post('/', (req, res) => {
  let message = req.body.message;
  let demo = new Demo(message);
  res.json(DemoSerializer.serialize(demo));
});

export default router;
