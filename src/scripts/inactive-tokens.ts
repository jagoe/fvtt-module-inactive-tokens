import {libWrapper} from './lib/libWrapper'
import {initialize} from './module'
import {MODULE_KEY} from './module/constants'
import {canUserHover} from './module/handlers/canUserHover'

Hooks.once('socketlib.ready', () => {
  initialize()
})

Hooks.once('setup', () => {
  libWrapper.register(MODULE_KEY, 'Token.prototype._canHover', canUserHover)
})
