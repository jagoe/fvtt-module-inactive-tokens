import {MODULE_EVENT, SocketData, SocketEvents} from './constants'

type Callback = (data: SocketData) => void
interface Listeners {
  [key: string]: Callback[]
}

const _listeners: Listeners = Object.keys(SocketEvents)
  .map((key) => ({key, listeners: [] as Callback[]}))
  .reduce((map, {key, listeners}) => ({...map, [key]: listeners}), {})

export function on(event: SocketEvents, callback: (data: SocketData) => void): void {
  _listeners[event].push(callback)
}

socket?.on(MODULE_EVENT, (data: SocketData) => {
  _listeners[data.event].forEach((fn) => fn(data))
})
