import {InactiveTokensModule} from '../../Module'

export {}

declare global {
  namespace NodeJS {
    interface Global {
      InactiveTokensModule: typeof InactiveTokensModule
    }
  }
}
