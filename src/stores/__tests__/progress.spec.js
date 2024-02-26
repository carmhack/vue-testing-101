import { createPinia, setActivePinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest'
import { useProgressStore } from '../progress';

describe('Progress Store', () => {
  let progress;

  beforeEach(() => {
    setActivePinia(createPinia());
    progress = useProgressStore();
  })

  it('starts at zero', () => {
    expect(progress.counter).toBe(0);
  })

  it('increments by 1', () => {
    progress.increment()
    expect(progress.counter).toBe(1);
    expect(progress.counter).toMatchSnapshot();
  })
  
  it('updates percentage', () => {
    progress.$patch({
      max: 10,
      counter: 5,
    })

    expect(progress.percentage).toBe(50);
  })
});