import { describe, expect, test } from 'vitest'

import { sum, subtract, multiply, divide } from '@/Utils/math'

describe('math', () => {
    test('sum', () => expect(sum(1, 2)).toBe(3))

    test('subtract', () => expect(subtract(2, 1)).toBe(1))

    test('multiply', () => expect(multiply(2, 3)).toBe(6))

    test('divide', () => expect(divide(6, 3)).toBe(2))
})
