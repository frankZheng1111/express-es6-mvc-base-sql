'use strict';
import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';

let DemoSerializer = new JSONAPISerializer('demo', {
  attributes: ['demoMessage'],
  keyForAttribute: 'camelCase'
});

export default DemoSerializer;
