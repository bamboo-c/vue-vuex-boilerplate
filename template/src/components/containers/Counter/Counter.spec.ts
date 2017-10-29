import Vue from 'vue';
import VueRouter from 'vue-router';
import Component from 'vue-class-component';
import { spy, assert } from 'sinon';
import { expect } from 'chai';
import { ComponentTest, MockLogger } from '../../../utils/component-test';
import { CounterContainer } from './';

let loggerSpy = spy();

@Component({
  template: require('./counter.html')
})
