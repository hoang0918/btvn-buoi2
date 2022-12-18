
	// ===================array method============

    // 1: Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
    
    // The function should not modify the array. It should return the new array.
    // let arr = [5, 3, 8, 1];
    
    // let filtered = filterRange(arr, 1, 4);
    
    // console.log( filtered ); // 3,1 (matching values)
    
    // console.log( arr ); // 5,3,8,1 (not modified)
    function filterRange(arr, a, b) {
        // added brackets around the expression for better readability
        return arr.filter(item => (a <= item && item <= b));
      }
      
    // let arr = [5, 3, 8, 1];
      
    let filtered = filterRange(arr, 1, 4);
    console.log("🚀 ~ file: home.js:22 ~ filtered", filtered)


    

    
    // 2: Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
    
    // The function should only modify the array. It should not return anything.
    
    // For instance:
    // let arr = [5, 3, 8, 1];
    
    // filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
    
    // console.log( arr ); // [3, 1]

    function filterRangeInPlace(arr, a, b) {

        for (let i = 0; i < arr.length; i++) {
          let val = arr[i];
      
          // remove if outside of the interval
          if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
          }
        }
      
      }
      
    // let arr = [5, 3, 8, 1];
      
    filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
    console.log("🚀 ~ file: home.js:56 ~ filterRangeInPlace", filterRangeInPlace)



    
    // 3:We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
    
    // Create a function copySorted(arr) that returns such a copy.
    // let arr = ["HTML", "JavaScript", "CSS"];
    
    // let sorted = copySorted(arr);
    
    // console.log( sorted ); // CSS, HTML, JavaScript
    // console.log( arr ); // HTML, JavaScript, CSS (no changes)
    function copySorted(arr) {
        return arr.slice().sort();
      }
      
    let arr = ["HTML", "JavaScript", "CSS"];
      
    let sorted = copySorted(arr);
      console.log("🚀 ~ file: home.js:77 ~ sorted", sorted)
    


    // 4: You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
    
    // For instance:
    // let john = { name: "John", age: 25 };
    // let pete = { name: "Pete", age: 30 };
    // let mary = { name: "Mary", age: 28 };
    
    // let users = [ john, pete, mary ];
    
    // let names = /* ... your code */
    let names = users.map(item => item.name);
    console.log("🚀 ~ file: home.js:92 ~ names", names)
    // console.log( names ); // John, Pete, Mary
    
    
    // 5: You have an array of user objects, each one has name, surname and id.
    
    // Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
    
    // For instance:
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };
    
    let users = [ john, pete, mary ];
    
    // let usersMapped = /* ... your code ... */
    let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
      }));
    console.log("🚀 ~ file: home.js:112 ~ usersMapped ~ usersMapped", usersMapped)
    // /*
    // usersMapped = [
    //   { fullName: "John Smith", id: 1 },
    //   { fullName: "Pete Hunt", id: 2 },
    //   { fullName: "Mary Key", id: 3 }
    // ]
    // */
    
    // console.log( usersMapped[0].id ) // 1
    // console.log( usersMapped[0].fullName ) // John Smith
    
    
    // 6: Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
    
    // For instance:
    // let john = { name: "John", age: 25 };
    // let pete = { name: "Pete", age: 30 };
    // let mary = { name: "Mary", age: 28 };
    
    // let arr = [ pete, john, mary ];
    
    // sortByAge(arr);
    function sortByAge(arr) {
        arr.sort((a, b) => a.age - b.age);
      }
      
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };
      
    let arr = [ pete, john, mary ];
      
    sortByAge(arr);
    // // now: [john, mary, pete]
    // console.log(arr[0].name); // John
    // console.log(arr[1].name); // Mary
    // console.log(arr[2].name); // Pete
    
    
    
    // 7: Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
    
    // Multiple runs of shuffle may lead to different orders of elements. For instance:
    
    
    // let arr = [1, 2, 3];
    
    // shuffle(arr);
    // // arr = [3, 2, 1]
    
    // shuffle(arr);
    // // arr = [2, 1, 3]
    
    // shuffle(arr);
    // // arr = [3, 1, 2]
    // // ...
    // All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
      
      let arr = [1, 2, 3];
      shuffle(arr);


      
    
    // 8*: Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
    
    // The formula for the average is (age1 + age2 + ... + ageN) / N.
    
    // For instance:
    // let john = { name: "John", age: 25 };
    // let pete = { name: "Pete", age: 30 };
    // let mary = { name: "Mary", age: 29 };
    
    // let arr = [ john, pete, mary ];
    
    // console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
    function getAverageAge(users) {
        return users.reduce((prev, user) => prev + user.age, 0) / users.length;
      }
      
      let john = { name: "John", age: 25 };
      let pete = { name: "Pete", age: 30 };
      let mary = { name: "Mary", age: 29 };
      
      let arr = [ john, pete, mary ];
      
      console.log( getAverageAge(arr) ); // 28
    
    // 9: Let arr be an array.
    
    // Create a function unique(arr) that should return an array with unique items of arr.
    
    // For instance:
    // function unique(arr) {
    //   /* your code */
    // }
    
    // let strings = ["Hare", "Krishna", "Hare", "Krishna",
    //   "Krishna", "Krishna", "Hare", "Hare", ":-O"
    // ];
    
    // console.log( unique(strings) ); // Hare, Krishna, :-O
    
    function unique(arr) {
        let result = [];
      
        for (let str of arr) {
          if (!result.includes(str)) {
            result.push(str);
          }
        }
      
        return result;
      }
      
      let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
      ];
      
      console.log( unique(strings) ); // Hare, Krishna, :-O



    // 10*: Let’s say we received an array of users in the form {id:..., name:..., age:... }.
    
    // Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
    
    // For example:
    
    // let users = [
    //   {id: 'john', name: "John Smith", age: 20},
    //   {id: 'ann', name: "Ann Smith", age: 24},
    //   {id: 'pete', name: "Pete Peterson", age: 31},
    // ];
    
    // let usersById = groupById(users);
    
    // /*
    // // after the call we should have:
    
    // usersById = {
    //   john: {id: 'john', name: "John Smith", age: 20},
    //   ann: {id: 'ann', name: "Ann Smith", age: 24},
    //   pete: {id: 'pete', name: "Pete Peterson", age: 31},
    // }
    // */

    function groupById(array) {
        return array.reduce((obj, value) => {
          obj[value.id] = value;
          return obj;
        }, {})
      }
    
    // Such function is really handy when working with server data.
    
    // In this task we assume that id is unique. There may be no two array items with the same id.
    
    // Please use array .reduce method in the solution.
    
    
    
    // ===================================Destructuring assignment===================
    // 1: We have an object:
    // let user = {
    //   name: "John",
    //   years: 30
    // };
    
    // Write the destructuring assignment that reads:
    
    // name property into the variable name.
    // years property into the variable age.
    // isAdmin property into the variable isAdmin (false, if no such property)
    // Here’s an example of the values after your assignment:
    
    // let user = { name: "John", years: 30 };
    
    // // your code to the left side:
    // // ... = user
    
    // console.log( name ); // John
    // console.log( age ); // 30
    // console.log( isAdmin ); // false
    
    
    // 2: There is a salaries object:
    // let salaries = {
    //   "John": 100,
    //   "Pete": 300,
    //   "Mary": 250
    // };
    
    // Create the function topSalary(salaries) that returns the name of the top-paid person.
    
    // If salaries is empty, it should return null.
    // If there are multiple top-paid persons, return any of them.
    // P.S. Use Object.entries and destructuring to iterate over key/value pairs.
    
    