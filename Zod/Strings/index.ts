import { z } from 'zod'

const url = z.string().url()
export const currentUrL = url.safeParse('https://fadsdasds')

console.log(currentUrL)