import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';
import { shallow } from 'enzyme';

describe('HomePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});