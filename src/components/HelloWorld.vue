<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-skeleton-loader v-if="loading" :loading="loading" v-bind="attrs" transition="scale-transition"></v-skeleton-loader>

        <v-textarea v-show="loaded" v-bind="attrtxt" transition="scale-transition" v-model="attrtxt.textValue"></v-textarea>

        <!-- TODO this should be it's own component. -->
        <!-- For now let's just fill this in with the following text. We still need to work the text and output it nicely. -->
        <p>{{ attrtxt.textValue == '' ? '' :  winkTokenize(attrtxt.textValue) }}</p>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Imports
const WinkTokenizer = require('wink-tokenizer');
const wink = new WinkTokenizer(); // we'll be using the tokenize method on this one later.

export default {
  name: 'HelloWorld',

  data: () => ({

    // For skeleton loaders
    loading: true,
    loaded: false,

    // TextContent
    textContent: '',

    // styling, TODO should this be here?
    attrs: {
      elevation: 2,
      class: 'mx-auto',
      maxWidth: 500,
      loading: true,
      type: 'article',
      // transition: "scale-transition"
    },

    // Styling for the text, should this be here?
    attrtxt: {
      textValue: "Dit boek is het enige dat de brand heeft overleefd.",
      class: 'mx-auto',
      autoFocus: true,
      autoGrow: true,
      clearable: true,
      counter: true,
      elevation: 1,
      hideDetails: true,
      rounded: false,
      outlined: true,
      noResize: true,
    },
  }), // data

  methods: {
    /**
     * this method returns an array of each word or punctuation mark of the inputted sentence.
     * 
     * Input: Hoi! hoe gaat het?
     * Output: [ { "value": "Hoi", "tag": "word" }, { "value": "!", "tag": "punctuation" }, 
     *            { "value": "hoe", "tag": "word" }, { "value": "gaat", "tag": "word" }, 
     *          { "value": "het", "tag": "word" }, { "value": "?", "tag": "punctuation" } ]
     */
    winkTokenize: function (value) {
      return wink.tokenize(value);
    },
  }, // methods

  // This is for the skeleton loader, but it's stupid.
  // It doesn't properly wait for the data to load, it just waits a second before loading the actual text box.
  created: function () {
    const readyHandler = () => {
      if (document.readyState == 'complete') {
        setTimeout(() => {
          this.loading = false;
          this.loaded = true;
          document.removeEventListener('readystatechange', readyHandler);
        }, 100);
      }
    };

    document.addEventListener('readystatechange', readyHandler);

    readyHandler();
  }, // created
};
</script>

<style lang="sass">
$skeleton-loader-loading-animation: loading 2.5s infinite !default
</style>
>
