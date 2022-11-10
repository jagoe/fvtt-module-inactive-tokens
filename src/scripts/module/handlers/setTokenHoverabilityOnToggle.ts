import {getToken, isUserGM, setHoverability} from '../../foundry'
import {TokenState} from '../constants'

export function setTokenHoverabilityOnToggle({tokenId, state}: {tokenId: string; state: TokenState}): void {
  if (isUserGM()) {
    return // GM doesn't need to deactivate tokens
  }

  const token = getToken(tokenId)
  if (!token) {
    return
  }

  setHoverability(token, state)
}
