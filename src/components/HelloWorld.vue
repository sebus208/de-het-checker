<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        
        <v-skeleton-loader v-if="loading" :loading="loading" v-bind="attrs" transition="scale-transition"></v-skeleton-loader>

        <v-textarea v-show="loaded" v-bind="attrtxt" transition="scale-transition" v-model="attrtxt.textValue"></v-textarea>

        <Output :textData="attrtxt.textValue"></Output>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Output from './Output.vue';

export default {
  components: { Output },
  name: 'HelloWorld',

  data: () => ({

    // For skeleton loaders
    loading: true,
    loaded: false,

    // TextContent
    textContent: '',

    // styling for the skeletonLoader
    attrs: {
      elevation: 2,
      class: 'mx-auto',
      maxWidth: 500,
      loading: true,
      type: 'article',
      // transition: "scale-transition"
    },

    // Styling for the textbox. 
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
