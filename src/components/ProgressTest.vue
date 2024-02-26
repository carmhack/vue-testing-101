<script setup>
import { useProgressStore } from '@/stores/progress';

const progress = useProgressStore();
</script>

<template>
  <main>
    <div id="percentage">{{ progress.percentage }} %</div>
    <button id="increment-btn" @click="progress.increment()">+1</button>
  </main>
</template>