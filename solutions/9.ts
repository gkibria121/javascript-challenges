// **Flatten a deeply nested array**
// Flatten a nested array of arbitrary depth into a single-level array.
const nestedArray = [
  [
    [
      [
        [
          [
            [
              [
                [
                  [10, 11, 12],
                  [13, 14, 15],
                ],
                [16, 17, 18],
              ],
              [19, 20, 21],
            ],
            [22, 23, 24],
          ],
          [25, 26, 27],
        ],
        [28, 29, 30],
      ],
      [31, 32, 33],
    ],
    [34, 35, 36],
  ],
  [37, 38, 39],
];

const flatNestedArray = (arr: any, depth = 1) => {
  if (depth <= 0) return arr;

  return flatNestedArray(arr.flat(), depth - 1);
};
const flattedArray = flatNestedArray(nestedArray, 10);
console.log(flattedArray);
