import { expect } from 'chai';
import helloWorld from '../src/index';

describe('Hello World', function() {
  it('should work', async function() {
    const res = await helloWorld();
    expect(res).to.equal('Hello world');
  });
});
