import {getGame} from './getGame'

export function isUserGM(): boolean {
  const game = getGame()
  return game.user?.isGM ?? false
}
