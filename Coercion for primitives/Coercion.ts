import { z } from 'zod'

//String
const coercionString = z.coerce.string()
export const currentCoercionString = coercionString.parse(true)
console.log(currentCoercionString)

//Number
const coerceNumber = z.coerce.number()
export const currentCoerceNumber = coerceNumber.parse('15')
console.log(currentCoerceNumber + 10)

//Boolean
const coerceBoolean = z.coerce.boolean()
export const currentCoerceBoolean = coerceBoolean.parse('true')
console.log(currentCoerceBoolean && true)


// Email
const email = z.coerce.string().email().min(5)
export const currentEmail = email.safeParse('adisornsriphongthong@gmail.com')
console.log(currentEmail)

/*
z.coerce.boolean().parse("tuna"); // => true
z.coerce.boolean().parse("true"); // => true
z.coerce.boolean().parse("false"); // => true
z.coerce.boolean().parse(1); // => true
z.coerce.boolean().parse([]); // => true

z.coerce.boolean().parse(0); // => false
z.coerce.boolean().parse(undefined); // => false
z.coerce.boolean().parse(null); // => false
*/