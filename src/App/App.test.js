import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should return one parent section', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.app_section')).toHaveLength(1);
  });
});
