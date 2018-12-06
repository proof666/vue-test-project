import { mount } from '@vue/test-utils';
import Sidebar from '@/components/Sidebar';

describe('sidebar.vue', () => {
  const wrapper = mount(Sidebar, {
    stubs: ['router-link'],
  });
  const elements = wrapper.findAll('router-link-stub');

  it('renders a sidebar with 3 router-link elements', () => {
    expect(elements.length).toBe(3);
  });
  it('has li with "Logs" at 1 position', () => {
    expect(elements.at(0).text()).toBe('Logs');
  });
  it('has li with "Data" at 2 position', () => {
    expect(elements.at(1).text()).toBe('Data');
  });
  it('has li with "Add Data" at 3 position', () => {
    expect(elements.at(2).text()).toBe('Add Data');
  });
});
