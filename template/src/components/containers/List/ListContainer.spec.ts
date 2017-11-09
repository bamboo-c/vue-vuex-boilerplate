import Component from 'vue-class-component';
import { expect } from 'chai';
import { ComponentTest } from '../../../utils/component-test';
import { ListContainer } from './';
import { State } from '../../../store/state' 

@Component({
  template: require('./list.html')
})
class MockListComponent extends ListContainer {
  listItems: State.listItem = [{id: 0, name: 'test'}, {id: 1, name: 'test'}]

  constructor() {
    super();
  }
}

describe('List component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><list></list></div>', { 'list': MockListComponent });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();

    await directiveTest.execute((vm) => { // ensure Vue has bootstrapped/run change detection
      debugger;
      console.log(vm.$el.querySelectorAll('.container ul li'));
      expect(vm.$el.querySelectorAll('.container ul li').length).to.equal(3);
    });
  });
});
