import {setHoverability} from '../../foundry'
import {InactiveTokensModule} from '../api'

export function canUserHover(this: Token, wrapped: typeof Token.prototype._canHover, user?: User, event?: PIXI.InteractionEvent): boolean {
  let canHover: boolean

  if (!InactiveTokensModule.singleton.isTokenActiveForPlayers(this)) {
    canHover = user?.isGM ?? false
  } else {
    canHover = true
  }

  setHoverability(this, canHover)

  return canHover && wrapped.call(this, user, event)
}
