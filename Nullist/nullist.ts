import { z } from 'zod'

const x = z.string().nullish()
type X = z.infer<typeof x>

const currentX: X = 'fdfs'

console.log(currentX)