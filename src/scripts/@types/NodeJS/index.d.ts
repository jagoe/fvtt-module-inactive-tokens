import {InactiveTokensModule} from '../../module'

export {}

declare global {
  namespace NodeJS {
    interface Global {
      InactiveTokensModule: typeof InactiveTokensModule
    }
  }
}
