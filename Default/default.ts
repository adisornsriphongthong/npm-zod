import { z } from 'zod';

const x = z.object({
    username: z.string(),
    age: z.number().default(0)
})

type X = z.infer<typeof x>

const current = x.parse({username: 'adisorn sriphongthong'})

console.log(current)

