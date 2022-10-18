<script setup>
import { ref } from 'vue';

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import AddCard from './components/AddCard.vue';
import SubtractCard from './components/SubtractCard.vue';
import LoginModal from './components/LoginModal.vue';

const showLoginModal = ref(false);

function handleModalOpen() {
    showLoginModal.value = true;
}

function handleModalClose() {
    showLoginModal.value = false;
}
</script>

<template>
    <div
        class="app__inner"
        :class="{
            'has-modal': showLoginModal === true,
        }"
    >
        <header class="site-header">
            <button @click="handleModalOpen">
                Login
            </button>
        </header>

        <h1>Web QA Usage</h1>
        <AddCard />
        <SubtractCard />

        <LoginModal
            v-if="showLoginModal"
            @close="handleModalClose"
        />
    </div>
</template>

<style lang="scss">
.app__inner {

    &.has-modal {
        overflow: hidden;
    }

}

.site-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    text-align: right;
    padding: 1em;
}
</style>
