import Vue from 'apostrophe/vue';

export default function() {
  /* eslint-disable no-new */
  return new Vue({
    el: '#apos-busy',
    template: '<component :is="`TheApostropheBusy`" />',
    computed: {
      apos () {
        return window.apos;
      }
    }
  });
};