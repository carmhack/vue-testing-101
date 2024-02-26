<script setup>
import { ref, watchEffect } from 'vue';
import axios from "axios";

const pokemonList = ref([]);
const offset = ref(0);
const LIMIT = 15;
const BASE_URL = `https://pokeapi.co/api/v2`;

const getPokemonList = async (offset) => {
  const response = await axios.get(`${BASE_URL}/pokemon?limit=${LIMIT}&offset=${offset}`);
  pokemonList.value = response.data.results;
}

const onPreviousPage = () => {
  if (offset.value >= LIMIT) {
    offset.value -= LIMIT;
  }
}

const onNextPage = () => {
  offset.value += LIMIT;
}

watchEffect(async () => {
  await getPokemonList(offset.value);
})
</script>

<template>
  <div>
    <button id="prevBtn" @click="onPreviousPage">Previous page</button>
    <button id="nextBtn" @click="onNextPage">Next page</button>
    <p data-test="pokemon" v-for="pokemon in pokemonList" :key="pokemon.id">
      {{ pokemon.name }}
    </p>
  </div>
</template>