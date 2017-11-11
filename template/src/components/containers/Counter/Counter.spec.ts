import { expect } from 'chai';
import { CounterContainer } from './';
import { ComponentTest } from '../../../utils/component-test';

describe('Home component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><counter></counter></div>', { 'app': CounterContainer });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      debugger;

    });
  });
});
