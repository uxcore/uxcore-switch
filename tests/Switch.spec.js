import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Switch from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Switch', () => {
  it ('should be render correctly', () => {
    mount(<Switch />);
  });
});