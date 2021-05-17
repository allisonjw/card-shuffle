import React from 'react';
import { render } from '@testing-library/react';
import Deck from './Deck';
import { shallow } from 'enzyme';

describe('Deck', () => {
  it('should return one parent section', () => {
    const wrapper = shallow(<Deck />);
    expect(wrapper.find('.deck_section')).toHaveLength(1);
  });
});