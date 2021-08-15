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
  let i = 0 
  let song;
  while (i === 2){
   song[i] = bottels.toString() + " bottles of beer on the wall, " + bottels.toString() + " bottles of beer." ;
    lyrics.push(song[i])
    i++
    
  }
  return lyrics
};

console.log(sing())