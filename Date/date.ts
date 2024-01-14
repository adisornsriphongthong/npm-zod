import { z } from 'zod'

//Use z.date() to validate Date instances.

z.date().safeParse(new Date()); // success: true
z.date().safeParse("2022-01-12T00:00:00.000Z"); // success: false
//You can customize certain error messages when creating a date schema.

const myDateSchema = z.date({
  required_error: "Please select a date and time",
  invalid_type_error: "That's not a date!",
});
//Zod provides a handful of date-specific validations.

z.date().min(new Date("1900-01-01"), { message: "Too old" });
z.date().max(new Date(), { message: "Too young!" });
//Coercion to Date

//Since zod 3.20, use z.coerce.date() to pass the input through new Date(input).

const dateSchema = z.coerce.date();
type DateSchema = z.infer<typeof dateSchema>;
// type DateSchema = Date

/* valid dates */
console.log(dateSchema.safeParse("2023-01-10T00:00:00.000Z").success); // true
console.log(dateSchema.safeParse("2023-01-10").success); // true
console.log(dateSchema.safeParse("1/10/23").success); // true
console.log(dateSchema.safeParse(new Date("1/10/23")).success); // true

/* invalid dates */
console.log(dateSchema.safeParse("2023-13-10").success); // false
console.log(dateSchema.safeParse("0000-00-00").success); // false
//For older zod versions, use z.preprocess like described in this thread.