function titleCase(str) {
  let splitting = str.toLowerCase().split(" ");
  let result = []
  for (let i=0; i<splitting.length; i++) {
    let sentence = splitting[i]
    result.push(sentence.replace(sentence[0], sentence[0].toUpperCase()))
  }
    return result.join(" ")
}

titleCase("I'm a little tea pot");
