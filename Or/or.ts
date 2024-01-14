import { z } from 'zod'

const y = z.string().or(z.number()).or(z.boolean())
type Y = z.infer<typeof y>

const currentY: Y = true