import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AdvancedTest from '../AdvancedTest.vue'

describe('AdvancedTest', () => {
  it('renders homepage link', async () => {
    const wrapper = mount(AdvancedTest);
    const homepageLink = wrapper.get('#homepage');
    expect(homepageLink.text()).toEqual('homepage');
  })
  it('doesnt render admin link', async () => {
    const wrapper = mount(AdvancedTest);
    expect(wrapper.find("#admin").exists()).toBe(false);
  })
  it('render admin link if isAuthenticated', async () => {
    const wrapper = mount(AdvancedTest, {
      props: {
        isAuthenticated: true,
      }
    });
    expect(wrapper.get("#admin").text()).toEqual('admin panel');
  })
})
