import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersColl = new NumbersCollection([10, 9, 6, 2, 5, 3]);
numbersColl.sort();

console.log(numbersColl.data);

const charactersCollection = new CharactersCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(20);
linkedList.add(-100);
linkedList.add(-9);

linkedList.sort();
linkedList.print();
