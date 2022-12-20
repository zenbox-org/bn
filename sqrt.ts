import { BN } from './index'

export const sqrt = (num: BN): BN => {
  if (num.lt(BN.from(0))) {
    throw new Error('Sqrt only works on non-negtiave inputs')
  }
  if (num.lt(BN.from(2))) {
    return num
  }

  const smallCand = sqrt(num.shr(2)).shl(1)
  const largeCand = smallCand.add(BN.from(1))

  if (largeCand.mul(largeCand).gt(num)) {
    return smallCand
  } else {
    return largeCand
  }
}
