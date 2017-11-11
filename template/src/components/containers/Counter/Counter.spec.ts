import Component from 'vue-class-component';
import { expect } from 'chai';
import { CounterContainer } from './';
import { ComponentTest } from '../../../utils/component-test';

@Component({
  template: require('./counter.html')
})
class MockCounterComponent extends CounterContainer {
  constructor() {
    super()
  }
}

describe('Counter component', () => {
  let directiveTest: ComponentTest;

  beforeEach(async () => {
    directiveTest = new ComponentTest('<div><counter></counter></div>', { 'app': MockCounterComponent });

    await directiveTest.execute((vm) => {
      let anchor = <HTMLAnchorElement>vm.$el.querySelector('.btn-success');
      anchor.click();
    });
  });

  it('should render correct contents', async () => {
    await directiveTest.execute((vm) => {
      expect(vm.$el.querySelector('.lead').textContent).to.equal('2');
    });
  });
});
