import { z } from 'zod';

const nameAndAge = z.intersection(
  z.object({ name: z.string() }),
  z.object({ age: z.number() })
);

const And = z.object({
    name: z.string()
}).and(z.object({
    age: z.number()
}))

// Example usage
const data = { name: 'John', age: 25 };

const result = nameAndAge.safeParse(data);
const result2 = And.safeParse(data)

console.log(result2)
