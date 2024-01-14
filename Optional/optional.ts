import { z } from 'zod';

// Define a Zod schema with an optional property
const PersonSchema = z.object({
  name: z.string().optional(),
  age: z.number().optional() // Making the 'age' property optional
});

// Use the schema
const validPerson = {  age: 25 };
const invalidPerson = { name: 'Alice' };

console.log(PersonSchema.safeParse(validPerson))
console.log(PersonSchema.safeParse(invalidPerson))
