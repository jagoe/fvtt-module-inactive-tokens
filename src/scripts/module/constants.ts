export const MODULE_KEY = 'inactive-tokens'
export const TOGGLE_HOVERABILITY_EVENT = 'toggle-hoverability'

export type TokenState = true | false
export const TokenStates: {active: TokenState; inactive: TokenState} = {
  active: true,
  inactive: false,
}
