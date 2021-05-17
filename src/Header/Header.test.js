import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('should return one parent section', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header_section')).toHaveLength(1);
  });
});