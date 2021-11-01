import {isUserGM, getToken, setHoverability} from '../../foundry'
import {SocketData} from '../../socket'

export function setTokenHoverabilityOnToggle(data: SocketData): void {
  if (isUserGM()) {
    return // GM doesn't need to deactivate tokens
  }

  const token = getToken(data.tokenId)
  if (!token) {
    return
  }

  setHoverability(token, data.state)
}
