import { mount } from '@vue/test-utils';
import Data from '@/views/Data';

describe('Data.vue', () => {
  it('renders a H1 with text "Data"', () => {
    const wrapper = mount(Data);
    expect(wrapper.contains('H1')).toBe(true);
    expect(wrapper.find('H1').text()).toBe('Data');
  });
});
