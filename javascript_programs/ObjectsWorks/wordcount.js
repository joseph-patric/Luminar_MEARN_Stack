var text="hello hi hello hi hello hi bye"

// get count of each words

// var words=text.split(" ")

var count={}

// for (let word of words)
// {
//     if (word in count)
//     {
//         count[word]+=1
//     }
//     else
//     {
//         count[word]=1
//     }
// }

// console.log(count);

text.split(" ").map(word=>word in count? count[word]+=1:count[word]=1)

console.log(count);