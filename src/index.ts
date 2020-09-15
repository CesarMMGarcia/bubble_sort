import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersColl = new NumbersCollection([10, 9, 6, 2, 5, 3]);

// const sorter = new Sorter(numbersColl);

// sorter.sort();
// console.log(numbersColl.data);

const charactersCollection = new CharactersCollection("Xaayb");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
