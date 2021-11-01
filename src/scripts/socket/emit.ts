import {MODULE_EVENT, SocketData} from './constants'

export function emit(data: SocketData): void {
  socket?.emit(MODULE_EVENT, data)
}
