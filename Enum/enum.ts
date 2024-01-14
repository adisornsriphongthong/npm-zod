import { z } from 'zod';

const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
type FishEnum = z.infer<typeof FishEnum>;

const currentFish: FishEnum = 'Salmon';

console.log(FishEnum.safeParse(FishEnum.Enum.Salmon))
//console.log(FishEnum.safeParse(0))
