import { shallowMount } from '@vue/test-utils';
import DataTableInfo from '@/components/datatable/DataTableInfo';

const factory = (values = {}) => shallowMount(DataTableInfo, {
  propsData: { ...values },
});

const length = 10;
const lastUpdate = '2018-12-05T22:01:29.408Z';

describe('DataTableInfo.vue', () => {
  it('table render expexted (5) rows when data contain 5 objects', () => {
    const wrapper = factory({
      length,
      lastUpdate,
    });

    expect(wrapper.find('span').text()).toEqual(`${length} line(s) shown. Data retrieved: ${lastUpdate}.`);
  });
});
