import {isUserGM} from '../foundry'
import {MODULE_KEY, TOGGLE_HOVERABILITY_EVENT, TokenState, TokenStates} from './constants'

export class InactiveTokensModule {
  public static singleton: InactiveTokensModule = new InactiveTokensModule()

  public socket: socketlib.Socket

  public async activateTokenForPlayers(token: Token | TokenDocument): Promise<void> {
    await this._setTokenStateForPlayers(token, TokenStates.active)
  }

  public async deactivateTokenForPlayers(token: Token | TokenDocument): Promise<void> {
    await this._setTokenStateForPlayers(token, TokenStates.inactive)
  }

  public isTokenActiveForPlayers(token: Token | TokenDocument): boolean {
    const document = token instanceof Token ? token.document : token

    const isActive = document.getFlag(MODULE_KEY, 'isActive')

    return isActive !== false // because undefined means the token is active
  }

  private async _setTokenStateForPlayers(token: Token | TokenDocument, state: TokenState): Promise<void> {
    if (!isUserGM()) {
      return // only GMs can access this API
    }

    const document = token instanceof Token ? token.document : token

    if (token.id === null) {
      return // no id, can't use this
    }

    await document.setFlag(MODULE_KEY, 'isActive', state)

    await this.socket.executeForEveryone(TOGGLE_HOVERABILITY_EVENT, {tokenId: token.id, state})
  }
}
