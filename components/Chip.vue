<template>
    <div class="bg-blue-500 text-white p-2 mr-2 w-24 rounded-md cursor-pointer inline-flex items-center">
      {{ text }}
      <span @click="remove" class="ml-2">×</span>
    </div>
  </template>
  
  <script>
  export default {
    props: ['text'],
    methods: {
      remove() {
        this.$emit('remove');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS classes can be used here */
  </style>
  