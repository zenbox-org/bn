/**
 * Renaming to BN to avoid the name clash between bn.js and bignumber.js
 */
export { BigNumber as BN } from 'ethers'

export type { BigNumberish as BNLike } from 'ethers'
