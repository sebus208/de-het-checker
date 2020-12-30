<template>
  <div>
    <p>{{ textData == '' ? '' : tokenize(textData) }}</p>
  </div>
</template>

<script>
const WinkTokenizer = require('wink-tokenizer');
const wink = new WinkTokenizer(); // we'll be using the tokenize method on this one later.

export default {
  name: 'Output',
  props: ['textData'],
  methods: {
    /**
     * this method returns an array of each word or punctuation mark of the inputted sentence.
     *
     * Input: Hoi! hoe gaat het?
     * Output: [ { "value": "Hoi", "tag": "word" }, { "value": "!", "tag": "punctuation" },
     *            { "value": "hoe", "tag": "word" }, { "value": "gaat", "tag": "word" },
     *          { "value": "het", "tag": "word" }, { "value": "?", "tag": "punctuation" } ]
     */
    tokenize: function (value) {
      return wink.tokenize(value);
    },
  },
};
</script>

<style scoped></style>
