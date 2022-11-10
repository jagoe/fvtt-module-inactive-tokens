import {InactiveTokensModule} from '../../scripts/module'

export {}

declare global {
  namespace NodeJS {
    interface Global {
      InactiveTokensModule: typeof InactiveTokensModule
    }
  }
}
