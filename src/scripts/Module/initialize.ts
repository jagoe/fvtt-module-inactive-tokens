import {InactiveTokensModule} from './api'
import {libWrapper} from '../lib/libWrapper'
import {MODULE_KEY, SocketEvents, MODULE_EVENT} from './constants'

export function initialize(): void {
  global.InactiveTokensModule = InactiveTokensModule

  libWrapper.register(MODULE_KEY, 'Token.prototype._canHover', canUserHover)

  // TODO: move to separate file
  const g = game as Game
  // TODO: extract specific fn from generic one
  // TODO: define interface for socket data
  g.socket?.on(MODULE_EVENT, ({event, tokenId, state}: {event: SocketEvents; tokenId: string; state: boolean}) => {
    if (g.user?.isGM) {
      return // GM doesn't need to deactivate tokens
    }

    const token = g.canvas.tokens?.get(tokenId)
    if (!token) {
      return
    }

    token.buttonMode = state
  })
}

function canUserHover(this: Token, wrapped: typeof Token.prototype._canHover, user?: User, event?: PIXI.InteractionEvent) {
  if (!InactiveTokensModule.singleton.isTokenActiveForPlayers(this)) {
    // TODO: hacky :( use _onHover?
    this.buttonMode = false
    return user?.isGM ?? false
  }

  // TODO: hacky :(
  this.buttonMode = true

  return wrapped.call(this, user, event)
}
