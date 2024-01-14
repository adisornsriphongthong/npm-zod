import { z } from 'zod'

const obj = z.object({
    username: z.nullable(z.string()),
    age: z.number()
})

type OBJ = z.infer<typeof obj>

const currentObject: OBJ = {
    username: null,
    age: 10
}

console.log(currentObject)