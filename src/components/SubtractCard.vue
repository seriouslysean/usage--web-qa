<script setup>
import { ref, computed } from 'vue'

const INITIAL_COUNT = 10
const MIN_COUNT = 0;
const count = ref(INITIAL_COUNT);

function updateCount() {
    // Not allowed to increment more than 10
    if (count.value <= MIN_COUNT) {
        return;
    }
    count.value--;
}

const hasMinCount = computed(() => {
    return count.value === MIN_COUNT;
})
</script>

<template>
    <div
        :class="{ 'card--error': hasMinCount }"
        class="card card--subtract"
    >
        <h2>Subtract on Click ({{ count }})</h2>
        <button
            type="button"
            :disabled="hasMinCount"
            @click="updateCount"
        >
            {{ hasMinCount ? 'DISABLED' : count }}
        </button>
        <p>Should start at {{ INITIAL_COUNT }} and stop at {{ MIN_COUNT }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card--error {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 5%;
}
</style>
