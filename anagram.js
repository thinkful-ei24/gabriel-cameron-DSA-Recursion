const allAnagrams = word => {
  const results = {};
  const anagram = (word, ana = '') => {
    if (word === '') {
      results[ana] = '';
      return;
    }
    // loop through word so each letter is a prefix
    for (let i = 0; i < word.length; i++) {
      let newStr = word.slice(0, i) + word.slice(i + 1, word.length);
      anagram(newStr, ana + word[i]);
    }
  };
  anagram(word, '');
  console.log(Object.keys(results));
};

allAnagrams('east');
