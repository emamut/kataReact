import React from 'react';
import {shallow} from 'enzyme';
import Exercise1 from '../Exercise1';

describe('Exercise1', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Exercise1/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });

    fit('generate data array', () => {
      const array = instance.generate_data_array();
      expect(array[0]).toEqual([1, 2, 3]);
      expect(array[1]).toEqual([4, 5, 6]);
      expect(array[2]).toEqual([7, 8, 9]);
    });
  });
});
