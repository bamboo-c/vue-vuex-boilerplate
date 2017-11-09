import Component from 'vue-class-component';
import { expect } from 'chai';
import { ComponentTest } from '../../../utils/component-test';
import { ListContainer } from './';

@Component({
  template: require('./list.html')
})
class MockListComponent extends ListContainer {
  constructor() {
    super();
  }

  accessor() {
    this.$store.state.listItem.concat([{ id: 0, name: 'test 1' }, { id: 1, name: 'test 2' }, { id: 2, name: 'test 3' }]);
    return this.$store.state.listItem;
  }
}

describe('List component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><list></list></div>', { 'listItem': MockListComponent });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();

    await directiveTest.execute((vm) => { // ensure Vue has bootstrapped/run change detection
      debugger;
      console.log(vm.$el.querySelectorAll('.content ul li'));
      expect(vm.$el.querySelectorAll('.content ul li').length).to.equal(3);
    });
  });
});
