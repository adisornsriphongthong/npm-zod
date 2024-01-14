import { literal, z } from 'zod'

// Example
const literalsString = z.literal('hello world')
console.log(literalsString.value)

const tuna = z.literal("tuna");
const twelve = z.literal(12);
const twobig = z.literal(2n); // bigint literal
const tru = z.literal(true);

const terrificSymbol = Symbol("terrific");   
const terrific = z.literal(terrificSymbol);

// retrieve literal value
tuna.value; // "tuna"