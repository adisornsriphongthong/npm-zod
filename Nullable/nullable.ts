import { z } from 'zod'

const nullableString = z.nullable(z.number());
type E = z.infer<typeof nullableString>

const currentNullableString: E = null

console.log(currentNullableString)