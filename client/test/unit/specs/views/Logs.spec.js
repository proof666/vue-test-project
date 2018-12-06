import { mount } from '@vue/test-utils';
import Logs from '@/views/Logs';

describe('AddData.vue', () => {
  it('renders a H1 with text "Logs"', () => {
    const wrapper = mount(Logs);
    expect(wrapper.contains('H1')).toBe(true);
    expect(wrapper.find('H1').text()).toBe('Logs');
  });
});
