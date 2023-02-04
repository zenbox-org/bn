import { one, zero } from './constants'
import { BN, BNLike } from './index'

// BN.prototype[inspect.custom] = function () {
//   return this.toString()
// }

export const bn = BN.from

export function sumBNs(nums: BN[]) {
  return nums.reduce((acc, num) => acc.add(num), BN.from(0))
}

export function neg(num: BN) {
  return zero.sub(num)
}

export function getShare(value: BNLike, numerator: BNLike, denominator: BNLike) {
  return bn(value).mul(numerator).div(denominator)
}

/**
 * numerator must be lte 100
 */
export function getPercent(value: BNLike, numerator: BNLike) {
  return bn(value).mul(numerator).div(100)
}

export function rangeBN(from: BNLike, to: BNLike, step: BNLike = one) {
  let fromBN = bn(from)
  const result: BN[] = []
  while (fromBN.lt(to)) {
    result.push(fromBN)
    fromBN = fromBN.add(step)
  }
  return result
}

export const maxBN = (a: BN, b: BN) => a.gt(b) ? a : b

export function rangeBNS(to: BNLike, step: BNLike = one) {
  return rangeBN(0, to, step)
}

export const isEqualBN = (a: BN) => (b: BN) => a.eq(b)

export const isPositive = (n: BN) => n.gt(0)
