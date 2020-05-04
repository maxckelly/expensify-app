import React from 'react';

// Enzyme 
import {shallow} from 'enzyme';

// enzyme to json - this allows the snapshots to be in json format
import {Header} from './../../components/Header';

test('Should render Header correctly', () => {
  const wrapper = shallow(<Header startLogOut={() => {}}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should click the logout button', () => {
  const startLogout = jest.fn();
  
  const wrapper = shallow(<Header startLogOut={startLogout} />);
  wrapper.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled();
})