import React from "react";

function Saqi({ value }) {
  return <li> i value id {value} </li>;
}

export default function Pr() {
  const ali = [12, 65, 76, 34, 23, 23];
  ali.map((e) => {
    <p>e</p>;
    //   console.log(e)
  });

  const all = ["apple ", "banan", "banaban"];
  let [a, b, c] = all;

  //  console.log(a ,b ,c)

  //   i have a array
  //   this isa practices of rest operator in js
  function ass([a, s, ...other]) {
    // console.log(other);
    // console.log(a, s);
  }
  ass([12, 34, 56, 45, 34, 34, 4, 5, 67]);

  //   thsi is a practices  of the spread operator
  let arr1 = [1.4, 4, 5, 7, 6, 5, 7, 3, 2, 2, 2];
  let arr2 = [6, 5, 4, 3, 6, 5, 4, 6, 5];
  let arr3 = [...arr1, ...arr2];
  //   console.log(arr3)

  return (
    <div>
      <h1>hello world</h1>
      <ul>
        {arr3.map((e) => {
          <Saqi value={e} />;
        })}
      </ul>
    </div>
  );
}
