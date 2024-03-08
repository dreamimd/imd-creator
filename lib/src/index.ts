import { createApp } from 'vue'
import ImdCreator from './imd-creator.vue'

export function imdCreator(selector: HTMLElement | string) {
  createApp(ImdCreator).mount(selector)
}

export { ImdCreator }
