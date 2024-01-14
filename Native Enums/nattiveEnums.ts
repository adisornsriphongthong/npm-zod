import { z } from 'zod'

enum Fruits {
    Apple = "apple",
    Banana = "banana",
    //Cantaloupe // you can mix numerical and string enums
  }
  
  const FruitEnum = z.nativeEnum(Fruits);
  type FruitEnum = z.infer<typeof FruitEnum>; // Fruits
  
  FruitEnum.parse(Fruits.Apple); // passes
  //FruitEnum.parse(Fruits.Cantaloupe); // passes
  FruitEnum.parse("apple"); // passes
  FruitEnum.parse("banana"); // passes
  console.log(FruitEnum.parse(0))// passes)
  FruitEnum.parse("Cantaloupe"); // fails