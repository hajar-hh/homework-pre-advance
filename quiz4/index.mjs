// 🔑 question4 🔑

import { generate } from "random-words";

console.log(
  generate({
    exactly: 5,
    formatter: (word) => word.toUpperCase(),
  })
);

// ✏✏✏✏✏✏✏✏✏✏✏✏✏✏✏✏✏✏✏✏✏✏✏✏

// 🔑 question5 🔑

import moment from "moment";

const parsedDate = moment([1999, 3, 15]);

console.log(parsedDate.format("YYYY-MM-DD"));

console.log(parsedDate.fromNow());
