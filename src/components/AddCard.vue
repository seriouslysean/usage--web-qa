<script setup>
import { ref, computed } from 'vue';

const INITIAL_COUNT = 0;
const MAX_COUNT = 10;
const count = ref(INITIAL_COUNT);

function updateCount() {
  // Not allowed to increment more than 10
  if (count.value >= MAX_COUNT) {
    return;
  }
  count.value++;
}

const hasMaxCount = computed(() => {
  return count.value === MAX_COUNT;
});
</script>

<template>
    <div
        :class="{ 'card--error': hasMaxCount }"
        class="card card--add"
    >
        <h2>Add on Click ({{ count }})</h2>
        <button
            type="button"
            :disabled="hasMaxCount"
            @click="updateCount"
        >
            {{ hasMaxCount ? 'DISABLED' : count }}
        </button>
        <p>Should start at {{ INITIAL_COUNT }} and stop at {{ MAX_COUNT }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card--error {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 5%;
}
</style>
