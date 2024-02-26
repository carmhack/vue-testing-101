<script setup>
import { ref } from 'vue';

const msg = ref("ciao");
const inputMsg = ref("");
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      <input type="text" v-model="inputMsg" placeholder="Enter a message">
      <button @click="msg = inputMsg">Submit</button>
    </p>
  </div>
</template>

<style scoped>
</style>
