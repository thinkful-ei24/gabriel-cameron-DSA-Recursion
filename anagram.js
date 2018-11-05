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

function swap(chars, i, j) {
  var tmp = chars[i];
  chars[i] = chars[j];
  chars[j] = tmp;
}

function iterativeAnagrams(input) {
  var counter = [],
    anagrams = [],
    chars = input.split(''),
    length = chars.length,
    i;

  for (i = 0; i < length; i++) {
    counter[i] = 0;
  }

  anagrams.push(input);
  i = 0;
  while (i < length) {
    if (counter[i] < i) {
      swap(chars, i % 2 === 1 ? counter[i] : 0, i);
      counter[i]++;
      i = 0;
      anagrams.push(chars.join(''));
    } else {
      counter[i] = 0;
      i++;
    }
  }

  return anagrams;
}

console.log(iterativeAnagrams('abc'));