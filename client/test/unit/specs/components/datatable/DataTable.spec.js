import { shallowMount } from '@vue/test-utils';
import DataTable from '@/components/datatable/DataTable';

const factory = (values = {}) => shallowMount(DataTable, {
  propsData: { ...values },
});

describe('DataTable.vue', () => {
  it('render table', () => {
    const wrapper = factory({
      headers: ['a', 'b', 'c'],
      data: [
        { type: 'a', datetime: 'b', eventData: { c: 'c' } },
      ],
    });

    expect(wrapper.findAll('table').exists()).toBe(true);
    expect(wrapper.findAll('thead').exists()).toBe(true);
    expect(wrapper.findAll('tbody').exists()).toBe(true);
  });

  it('table render expexted (5) rows when data contain 5 objects', () => {
    const wrapper = factory({
      headers: ['a', 'b', 'c'],
      data: [
        { type: 'a', datetime: 'b', eventData: { c: 'c' } },
        { type: 'a', datetime: 'b', eventData: { c: 'c' } },
        { type: 'a', datetime: 'b', eventData: { c: 'c' } },
        { type: 'a', datetime: 'b', eventData: { c: 'c' } },
        { type: 'a', datetime: 'b', eventData: { c: 'c' } },
      ],
    });

    expect(wrapper.findAll('tbody tr').length).toEqual(5);
  });
});
