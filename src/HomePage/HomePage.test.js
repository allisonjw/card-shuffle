import React from 'react';
import HomePage from './HomePage';
import { shallow } from 'enzyme';

describe('HomePage', () => {
  it('should call handleSubmit when button is clicked', () => {
    const wrapper = shallow(<HomePage />);
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.find('.player_form').simulate('click', { preventDefault: jest.fn() });
    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();

  });
  it('should return one parent section', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('.section_form')).toHaveLength(1);
  });
});