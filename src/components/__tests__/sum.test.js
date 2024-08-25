import { sum } from "../sum";

test("sum function should calculate the sum of two numbers",  ()=> {
   const res =  sum(2,3);
   expect(res).toBe(5); //this line i known as assertion
});