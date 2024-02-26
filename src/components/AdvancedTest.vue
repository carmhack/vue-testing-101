<script setup>
import { ref } from 'vue';

defineProps({
  isAuthenticated: Boolean,
});

const pages = ref([
  {
    to: "/",
    name: "homepage",
  },
  {
    to: "/about",
    name: "about",
  },
])
</script>

<template>
  <nav>
    <a
      v-for="page in pages"
      :key="page.name"
      :id="page.name"
      :href="page.to"
    >
      {{ page.name }}
    </a>
    <a v-if="isAuthenticated" id="admin" href="/admin">admin panel</a>
  </nav>
</template>