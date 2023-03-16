import { BN } from './index'

export const zero = BN.from(0)

export const one = BN.from(1)

export const ten = BN.from(10)

export const tenPow18 = ten.pow(18)

export const uint256Max = BN.from(2).pow(256).sub(1)

export const uint128Max = BN.from(2).pow(128).sub(1)

export const int256Max = BN.from(2).pow(255).sub(1) // IMPORTANT: 255, not 256 (because 1 bit is reserved for the sign)

export const int256Min = zero.sub(BN.from(2).pow(255)) // IMPORTANT: 255, not 256 (because 1 bit is reserved for the sign)
