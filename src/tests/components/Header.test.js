import React from 'react';
// Enzyme 
import {shallow} from 'enzyme';
// enzyme to json - this allows the snapshots to be in json format
import Header from './../../components/Header';

test('Should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
