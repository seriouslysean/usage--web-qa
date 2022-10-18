<script setup>
import { ref } from 'vue';

import SiteHeader from '@/components/SiteHeader.vue';
import LoginModal from '@/components/LoginModal.vue';

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
        <SiteHeader @login="handleModalOpen" />

        <router-view />

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
