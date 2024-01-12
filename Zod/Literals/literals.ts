import { literal, z } from 'zod'

// Example
const literalsString = z.literal('hello world')
console.log(literalsString.value)

