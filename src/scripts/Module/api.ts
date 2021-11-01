import {MODULE_EVENT, MODULE_KEY, SocketEvents} from './constants'

export class InactiveTokensModule {
  public static singleton: InactiveTokensModule = new InactiveTokensModule()

  public async deactivateTokenForPlayers(token: Token | TokenDocument) {
    // TODO: move game fetch to separate file
    const g = game as Game
    if (!g.user?.isGM) {
      return // only GMs can access this API
    }

    const tokenActiveState = false
    const document = token instanceof Token ? token.document : token

    await document.setFlag(MODULE_KEY, 'isActive', tokenActiveState)

    // TODO: move to separate file
    g.socket?.emit(MODULE_EVENT, {event: SocketEvents.toggle, tokenId: token.id, state: tokenActiveState})
  }

  public async activateTokenForPlayers(token: Token | TokenDocument) {
    // TODO: move game fetch to separate file
    const g = game as Game
    if (!g.user?.isGM) {
      return // only GMs can access this API
    }

    const tokenActiveState = true
    const document = token instanceof Token ? token.document : token

    await document.setFlag(MODULE_KEY, 'isActive', tokenActiveState)

    // TODO: move to separate file
    g.socket?.emit(MODULE_EVENT, {event: SocketEvents.toggle, tokenId: token.id, state: tokenActiveState})
  }

  public isTokenActiveForPlayers(token: Token | TokenDocument) {
    const document = token instanceof Token ? token.document : token

    const isActive = document.getFlag(MODULE_KEY, 'isActive')

    return isActive !== false // because undefined means the token is active
  }
}
