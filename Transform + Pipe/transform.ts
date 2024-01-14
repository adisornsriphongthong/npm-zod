import { z } from 'zod'

const x = z.number()
           .transform((e) => e + 10)
           .pipe(z.number().min(20, {message: 'error 404'}))

const currentX = x.safeParse(1)

if(currentX.success) {
    console.log(currentX.data)
} else {
    console.log(currentX.error.errors[0].message)
}