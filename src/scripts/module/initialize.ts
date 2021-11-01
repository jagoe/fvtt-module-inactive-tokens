import {libWrapper} from '../lib/libWrapper'
import {socket, SocketEvents} from '../socket'
import {InactiveTokensModule} from './api'
import {MODULE_KEY} from './constants'
import {canUserHover} from './handlers/canUserHover'
import {setTokenHoverabilityOnToggle} from './handlers/setTokenHoverabilityOnToggle'

export function initialize(): void {
  global.InactiveTokensModule = InactiveTokensModule

  libWrapper.register(MODULE_KEY, 'Token.prototype._canHover', canUserHover)

  socket.on(SocketEvents.toggle, setTokenHoverabilityOnToggle)
}
