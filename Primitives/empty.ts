import { z } from 'zod';

// Create a schema for void (undefined)
const voidSchema = z.void();

// Function that returns undefined
const myFunction = (): void => {
  console.log('Hello from myFunction');
};

// Parse the result of the function using the void schema
const result = voidSchema.safeParse(myFunction());

if (result.success) {
  console.log('Parsing successful');
} else {
  console.error('Parsing failed:', result.error);
}
