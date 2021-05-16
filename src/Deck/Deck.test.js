import React from 'react';
import { render } from '@testing-library/react';
import Deck from './Deck';
import { shallow } from 'enzyme';

describe('Deck', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Deck />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});