import {InactiveTokensModule} from './api'
import {MODULE_KEY, TOGGLE_HOVERABILITY_EVENT} from './constants'
import {setTokenHoverabilityOnToggle} from './handlers/setTokenHoverabilityOnToggle'

export function initialize(): void {
  global.InactiveTokensModule = InactiveTokensModule
  InactiveTokensModule.singleton.socket = socketlib.registerModule(MODULE_KEY)

  InactiveTokensModule.singleton.socket.register(TOGGLE_HOVERABILITY_EVENT, setTokenHoverabilityOnToggle)
}
