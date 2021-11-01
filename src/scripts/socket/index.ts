import {emit} from './emit'
import {on} from './on'
export * from './constants'

export const socket = {
  emit: emit,
  on: on,
}
