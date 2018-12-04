import { mount } from '@vue/test-utils';
import AddData from '@/views/AddData';

describe('AddData.vue', () => {
  const wrapper = mount(AddData);
  it('renders a H1 with text "AddData"', () => {
    expect(wrapper.contains('H1')).toBe(true);
    expect(wrapper.find('H1').text()).toBe('Add Data');
  });

  it('renders a input', () => {
    expect(wrapper.contains('input')).toBe(true);
  });
  it('renders a textarea', () => {
    expect(wrapper.contains('textarea')).toBe(true);
  });
  it('renders a button', () => {
    expect(wrapper.contains('button')).toBe(true);
  });

  it('renders a button with text "Add', () => {
    expect(wrapper.contains('button')).toBe(true);
    expect(wrapper.find('button').text()).toBe('Add');
  });
});
