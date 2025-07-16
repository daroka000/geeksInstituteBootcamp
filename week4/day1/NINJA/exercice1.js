const mergeWord=()=> console.log("hello")
mergeWord()
const mergeWords = (str = '') =>
    (next) => next === undefined ? str.trim()
        : mergeWords(`${str} ${next}`.trim());
  
  console.log(mergeWords('There')('is')('no')('spoon.')());
  