import { MathOutOfBounds } from '../../test/contracts/Math.errors'
import { BN, BNLike } from './index'

export const add = (max: BNLike) => (a: BN, b: BN) => {
  const result = a.add(b)
  if (result.gt(max)) {
    throw new MathOutOfBounds('add')
  } else {
    return result
  }
}

export const sub = (min: BNLike) => (a: BN, b: BN) => {
  const result = a.sub(b)
  if (result.lt(min)) {
    throw new MathOutOfBounds('sub')
  } else {
    return result
  }
}
