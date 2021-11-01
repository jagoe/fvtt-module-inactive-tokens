// import {expect} from 'chai'
// import {createSandbox} from 'sinon'

// import {SquadsModule} from '@src/Module'
// import * as addSquadMember from '@src/Token/addSquadMember'
// import * as getSquadSize from '@src/Token/getSquadSize'
// import * as removeSquadMember from '@src/Token/removeSquadMember'

// import {cast} from '@util'

// export function apiTests(): void {
//   const sandbox = createSandbox()

//   afterEach(() => {
//     sandbox.reset()
//   })

//   after(() => {
//     sandbox.restore()
//   })

//   describe('API', () => {
//     const api = SquadsModule.singleton

//     describe('addSquadMember', () => {
//       it('should call the addSquadMember function', () => {
//         // Arrange
//         const stub = sandbox.stub(addSquadMember, 'addSquadMember')
//         const token: Token = cast(sandbox.stub())
//         const amount = 42

//         // Act
//         api.addSquadMember(token, amount)

//         // Assert
//         expect(stub.calledOnce, 'addSquadMember function has not been called').to.be.true
//         const [actualToken, actualAmount] = stub.lastCall.args
//         expect(actualToken).to.equal(token)
//         expect(actualAmount).to.equal(amount)
//       })
//     })

//     describe('removeSquadMember', () => {
//       it('should call the removeSquadMember function', () => {
//         // Arrange
//         const stub = sandbox.stub(removeSquadMember, 'removeSquadMember')
//         const token: Token = cast(sandbox.stub())
//         const amount = 42

//         // Act
//         api.removeSquadMember(token, amount)

//         // Assert
//         expect(stub.calledOnce, 'removeSquadMember function has not been called').to.be.true
//         const [actualToken, actualAmount] = stub.lastCall.args
//         expect(actualToken).to.equal(token)
//         expect(actualAmount).to.equal(amount)
//       })
//     })

//     describe('getSquadSize', () => {
//       it('should call the getSquadSize function', () => {
//         // Arrange
//         const amount = 42
//         const stub = sandbox.stub(getSquadSize, 'getSquadSize').returns(amount)
//         const token: Token = cast(sandbox.stub())

//         // Act
//         const actualAmount = api.getSquadSize(token)

//         // Assert
//         expect(stub.calledOnce, 'getSquadSize function has not been called').to.be.true
//         const [actualToken] = stub.lastCall.args
//         expect(actualToken).to.equal(token)
//         expect(actualAmount).to.equal(amount)
//       })
//     })
//   })
// }
