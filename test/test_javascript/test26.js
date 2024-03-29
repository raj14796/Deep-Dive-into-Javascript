// You are given a string s and an array of string words. You should add a closed pair of bold tag <b> and </b> to wrap the substrings in s that exist in words. If two such substrings overlap, you should wrap them together with only one pair of closed bold-tag. If two substrings wrapped by bold tags are consecutive, you should combine them.
// Return s after adding the bold tags.
 
// Example 1:
// Input: s = "abcxyz123", words = ["abc","123"]
// Output: "<b>abc</b>xyz<b>123</b>"

// Example 2:
// Input: s = "aaabbcc", words = ["aaa","aab","bc"]
// Output: "<b>aaabbc</b>c"

 
// Constraints:
// 1 <= s.length <= 1000
// 0 <= words.length <= 100
// 1 <= words[i].length <= 1000
// s and words[i] consist of English letters and digits.
// All the values of words are unique.

function fn(s, words) {
    let indices = [];
    words.forEach((word, index) => {
      indices[index] = [s.indexOf(word), s.indexOf(word)+ word.length]
    })
    // console.log(indices)
    const arr = s.split("")
    let count = 0
    let overlappingIndices = []
    for (let i=0; i< indices.length; i++) {
      let ele = indices[i]
      // console.log('ele >>>', ele)
      while(indices[i+1] && ele[1] >= indices[i+1][0]) {
        ele[1] = indices[i+1][1]
        i++;
      }
      overlappingIndices.push(ele)
    }
    // console.log('overlappingIndices >>>', overlappingIndices)
  
    overlappingIndices.forEach(ind => {
      arr.splice(ind[0]+count, 0, '<b>')
      count++;
      arr.splice(ind[1]+count, 0, '</b>')
      count++
    })
    return arr.join('')
  }
  // console.log(fn("abcxyz123", ["abc","123"]))
  console.log(fn("aaabbcc", ["aaa","aab","bc"]))