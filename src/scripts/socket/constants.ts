import {MODULE_KEY, TokenState} from '../module/constants'

export const MODULE_EVENT = `module.${MODULE_KEY}`

export enum SocketEvents {
  toggle,
}

export interface SocketData {
  event: SocketEvents
  tokenId: string
  state: TokenState
}
