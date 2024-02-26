import { useProgressStore } from "@/stores/progress";
import { describe, expect, it, beforeEach, vitest } from "vitest"
import {mount} from "@vue/test-utils";
import {createTestingPinia} from "@pinia/testing";
import ProgressTest from "../ProgressTest.vue";

describe('Progress Component', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(ProgressTest, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vitest.fn,
        })]
      }
    })
  })

  it('displays the percentage', () => {
    expect(wrapper.find('#percentage').text()).toBe('0 %');
  })

  it('increments the progress', async () => {
    const progress = useProgressStore();

    await wrapper.find("#increment-btn").trigger("click");
    expect(progress.increment).toHaveBeenCalledOnce();
  })
})