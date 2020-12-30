const natural = require('natural/');

/*
    I would realy want to work with this library, but there is an issue with getting it to work properly.
    Not sure what the issue is, but I think it has somehting to do with webworkers.
    This is the issue that I'm getting at the moment. 
    Uncaught Error: Module build failed: Error: ENOENT: no such file or directory, open '/home/djmbritt/Desktop/de-het-checker/node_modules/webworker-threads/index.js'

    Tokenizing allows you to split up sentences into individual words and add them to an array.
    There are a couple of options when it comes to tokenizing. 
    You can use the following:

    Tokenizer 	            Language 	Explanation
    WordTokenizer 	        Any 	    Splits on anything except alphabetic characters, digits and underscore
    WordPunctTokenizer 	    Any 	    Splits on anything except alphabetic characters, digits, punctuation and underscore
    SentenceTokenizer 	    Any 	    Break string up into parts based on punctation and quotation marks
    SentenceTokenizerNew 	Any 	    Break string up into parts based on punctation and quotation marks (grammar/parser based)
    CaseTokenizer 	        Any? 	    If lower and upper case are the same, the character is assumed to be whitespace or something else (punctuation)
    RegexpTokenizer 	    Any 	    Splits on a regular expression that either defines sequences of word characters or gap characters
    AggressiveTokenizerNL   Dutch       Aggresive tokenization for Dutch.

*/

const tokenizer = new natural.AggressiveTokenizerNl();

export default {
  data: function () {
    return {
      language: 'Dutch',
    };
  },

  computed: function (value) {
    tokenizer.tokenizer(value);
  },
};
