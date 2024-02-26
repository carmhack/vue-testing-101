import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloTest from '../HelloTest.vue'

describe('HelloTest', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloTest)
    expect(wrapper.find('h1').text()).toEqual("ciao");
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
    expect(wrapper.find('button').exists()).toBeTruthy();
  })
  it('should change message', async () => {
    const wrapper = mount(HelloTest);
    await wrapper.find('input[type="text"]').setValue('prova');
    await wrapper.find('button').trigger('click');
    expect(wrapper.find('h1').text()).toEqual('prova');
  })
})
