var sing = function () {
  // return the lyrics as a string ...
  let lyrics = [];
  let bottels = 99; 
  //let song0 = bottels.toString() + " bottles of beer on the wall, " + bottels.toString() + " bottles of beer.";
  //lyrics.push(song0)
  /*
  for (let i = 0; i <= bottels; i++){
    song0[i] = bottels.toString() + " bottles of beer on the wall, " + bottels.toString() + " bottles of beer.";
    lyrics.push(song0[i])
    song1[i] = "Take one down and pass it around, " + (bottels-(i+1)).toString() + " bottles of beer on the wall."
    lyrics.push(song1[i])
    song2[i] = (bottels-(i+1)).toString() + " bottles of beer on the wall, " + (bottels-(i+1)).toString() + " bottles of beer.";
    lyrics.push(song2[i])
  }
  */
  let i = bottels
  while (i >= 0){
    if (i === 99){
      song0 = i + " bottles of beer on the wall, " + i + " bottles of beer.";
      lyrics.push(song0);
    }else if (i >= 1){
      song1 = "Take one down and pass it around, " + (i)+ " bottles of beer on the wall.";
      lyrics.push(song1)
      song2 = (i) + " bottles of beer on the wall, " + (i) + " bottles of beer.";
      lyrics.push(song2)
    }else if (i === 1){
      song1 = "Take one down and pass it around, " + (i) + " bottle of beer on the wall.";
      lyrics.push(song1)
      song2 = (i) + " bottle of beer on the wall, " + (i) + " bottle of beer.";
      lyrics.push(song2)
    }else{
      lyrics.push("Take one down and pass it around, no more bottles of beer on the wall.", "No more bottles of beer on the wall, no more bottles of beer.", "Go to the store and buy some more, 99 bottles of beer on the wall.")
      
    }
    i--;
  }
  return lyrics
};

let a = sing()
let b = a[196]
console.log(b)