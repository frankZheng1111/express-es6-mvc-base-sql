'use strict';
import { should as _should } from 'chai';
import Demo from '../../src/models/demo';

const should = _should();

describe('Test demo Class', () => {
  let demo;
  beforeEach(() => {
    demo = new Demo('test');
  });

  it('should return test word', () => {
    demo.demoMessage.should.equal('test');
  });
});
