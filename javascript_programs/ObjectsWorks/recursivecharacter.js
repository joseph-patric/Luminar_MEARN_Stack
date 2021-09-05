var pattern="ABABCC"

// find first recursive character
var character={}

for (let char of pattern){
    if(! char in character){
        character[char]=1;
    }
    else{
        console.log(char);
        break;
    }
}

