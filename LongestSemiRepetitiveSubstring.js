// PROBLEM -

/*You are given a 0-indexed string s that consists of digits from 0 to 9.
A string t is called a semi-repetitive if there is at most one consecutive pair of the same digits inside t. For example, 0010, 002020, 0123, 2002, and 54944 are semi-repetitive while 00101022, and 1101234883 are not.
Return the length of the longest semi-repetitive substring inside s.
A substring is a contiguous non-empty sequence of characters within a string. */

// EXAMPLE-1
/* Input: s = "52233"
Output: 4
Explanation: The longest semi-repetitive substring is "5223", which starts at i = 0 and ends at j = 3. */

// EXAMPLE-2

/* Input: s = "1111111"
Output: 2
Explanation: The longest semi-repetitive substring is "11", which starts at i = 0 and ends at j = 1. */

function longestSemiRepetitiveSubstring(s) {
  let ans = 0;
  let n = s.length;

  for (let i = 0; i < n; i++) {
    let pair = 0;
    for (let j = i + 1; j < n; j++) {
      if (s[j] === s[j - 1]) pair++;
      if (pair > 1) break;
      ans = Math.max(ans, j - i + 1);
    }
  }
  return ans;
}

console.log(longestSemiRepetitiveSubstring("1111111")); //2
console.log(longestSemiRepetitiveSubstring("52233")); //4
