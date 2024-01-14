import { z } from 'zod'

//[Primitives Type]

//String
let str = z.string()
export let currentStr = str.safeParse('hello world')

/*
 'number': This represents the JavaScript number type,
 which is a numeric data type that includes both integers
 and floating-point numbers. It covers values like
 1, 3.14, -42, etc
*/
let num = z.number()
export let currentNum = num.safeParse(10)

/*
 bigint: This represents the JavaScript bigint type,
 introduced in ECMAScript 2020, which allows the
 representation of integers of arbitrary precision.
 bigint values end with the n suffix, like 10n.
*/

let bgn = z.bigint()
export let currentBigInt = bgn.safeParse(10n)

//Boolean
let bln = z.boolean()
export let currentBoolean = bln.safeParse(true)

//Date
let date = z.date()
export let currentDate = date.safeParse(new Date)

//Symbol
let sybo = z.symbol()
export let currentSymbol = sybo.safeParse('+')

//[Empty Type]

// Create a schema for void (undefined)
const voidSchema = z.void();

// Function that returns undefined
const myFunction = (): void => {
  console.log('Hello from myFunction');
};

// Parse the result of the function using the void schema
const result = voidSchema.safeParse(myFunction());

if (result.success) {
  console.log('Parsing successful');
} else {
  console.error('Parsing failed:', result.error);
}

//[Catch-All Type]

//Any
const ay = z.any()
export const currentAny = ay.safeParse('hello')

//Unknow
const unkn = z.unknown()
export const currentUnknow = unkn.safeParse(4)

//[Never Type]
const neverSchema = z.never();
export const currentNever = neverSchema.safeParse(undefined);

console.log(currentNever);