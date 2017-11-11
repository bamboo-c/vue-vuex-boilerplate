import Component from 'vue-class-component';
import { expect } from 'chai';
import { CounterContainer } from './';
import { ComponentTest } from '../../../utils/component-test';

@Component({
  template: require('./counter.html')
})
class MockCounterComponent extends CounterContainer {
  constructor() {
    super();
  }
}

describe('Counter component', () => {
  let directiveTest: ComponentTest;

  before(() => {
    directiveTest = new ComponentTest('<div><counter></counter></div>', { 'counter': MockCounterComponent });
  })

  describe('click simuration', () => {
    beforeEach(async () => {
      directiveTest.createComponent();

      await directiveTest.execute((vm) => {
        const incrementButton = <HTMLButtonElement>vm.$el.querySelector('.btn-success');
        const clickEvent = new window.Event('click');
        incrementButton.dispatchEvent(clickEvent);
        vm._watcher.run();
      }) 
    });

    it('should render correct contents', async () => {
      await directiveTest.execute((vm) => {
        expect(vm.$el.querySelector('.lead').textContent).to.equal('2');
      });
    });
  
  })
});
