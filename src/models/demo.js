'use strict';

class Demo {
  constructor(message) {
    this.id = 'id';
    this.message = message;
  }

  get demoMessage() {
    return this.message;
  }
}

export default Demo;

