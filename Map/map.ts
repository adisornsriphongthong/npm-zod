import { z } from 'zod';

const stringNumberMap = z.map(z.string(), z.number());

type StringNumberMap = z.infer<typeof stringNumberMap>;

//const x: StringNumberMap = { 'one': 42, 'two': 10 };
