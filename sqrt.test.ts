import { test } from '@jest/globals'
import { expect } from '../chai/init'
import { BN } from './index'
import { sqrt } from './sqrt'
import { bn } from './utils'

const expectSqrt = (num: BN) => expect(sqrt(num.mul(num)).eq(num)).to.be.true

test(sqrt.name, () => {
  expectSqrt(bn(3))
  expectSqrt(bn(4))
  expectSqrt(bn(10))
  expectSqrt(bn(15))
})
