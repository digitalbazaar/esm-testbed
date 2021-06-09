import { expect } from 'chai';
import { Example } from '../lib';

describe('Example', () => {
  it('calls function', async () => {
    const ex = new Example();
    expect(ex.hello()).to.equal('world');
  });
});
