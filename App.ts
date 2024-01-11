import { z } from 'zod'
import { errorMessage } from './error'

const UserSchema = z.object({
    username: z.string(),
    age: z.number(),
    //birstDay: z.date(),
    isProgrammer: z.boolean().nullish()
    //void nerver, undefind, unknow 

    // min(), max()
    // optional()
    // gt(1) - -1 < 1 = false
    // nullable - if age is null, it's true
    //
})


type User = z.infer<typeof UserSchema>

const user = { username : "hello", age: 1, isProgrammer: undefined}

console.log(UserSchema.safeParse(user))

//.safeParse { success: true, data: { username: 'adisorn' } }