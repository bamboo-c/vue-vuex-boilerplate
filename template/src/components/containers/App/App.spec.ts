import { expect } from 'chai';
import { AppContainer } from './';
import { ComponentTest } from '../../../utils/component-test';

describe('Home component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><app></app></div>', { 'app': AppContainer });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      debugger;
      const mode = process.env.ENV;
      expect(vm.$el.querySelector('.mode').textContent).to.equal(`${mode} mode`);
      expect(vm.$el.querySelector('.package').textContent).to.equal('vue-vuex-boillerplate');
    });
  });
});
