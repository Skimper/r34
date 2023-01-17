import 'mocha';
import { assert } from 'chai';

import { helloWorld } from '../src/index.js';
import npmPackage from '../src/index.js';

describe('NPM Package', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a helloWorld property', () => {
    assert.property(npmPackage, 'helloWorld');
  });
});

describe('Hello World Function', () => {
  it('should be a function', () => {
    assert.isFunction(helloWorld);
  });

  it('should return the hello world message', () => {
    const expected = 'Rule #34 There is porn of it. No exceptions!';
    const actual = helloWorld();
    assert.equal(actual, expected);
  });
});