import { z } from 'zod'

//Udefined
let undef = z.undefined()
export const currentUndefined = undef.safeParse(undefined)

//Null
let nll = z.null()
export const currentNull = nll.safeParse(nll)

//Void
const voidSchema = z.void()
const myFunction = (): void => {
    console.log('Hello from myFunction')
}

voidSchema.safeParse(myFunction())
