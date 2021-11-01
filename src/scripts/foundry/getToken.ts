import {getGame} from './getGame'

export function getToken(id: string): Token | undefined {
  const game = getGame()

  return game.canvas.tokens?.get(id)
}
