<script setup>
import { defineEmits, ref, onMounted } from 'vue';

import { useUserStore, MOCK_USER } from '@/stores/user';

const emailInput = ref(null);
const email = ref("");
const password = ref("");
const hasError = ref(false);

const emit = defineEmits(['close']);
const userStore = useUserStore();

function handleFormSubmit() {
    userStore.login(email, password);

    if (!userStore.loggedIn) {
        hasError.value = true;
        return;
    }

    emit('close');
}

function handleCloseButtonClick() {
    emit('close');
}

onMounted(() => emailInput.value.focus());
</script>

<template>
    <div class="login-modal__outer">
        <div class="login-modal">
            <button
                class="login-modal__close"
                @click="handleCloseButtonClick"
            >
                Close
            </button>

            <h2 class="login-modal__heading">
                Web QA Login
            </h2>

            <form @submit.prevent="handleFormSubmit">
                <h3 class="login-modal__input-heading">
                    Email
                </h3>
                <input
                    ref="emailInput"
                    type="email"
                    name="email"
                    placeholder="email"
                    v-model="email"
                    autocomplete="email"
                    class="login-modal__input"
                >
                <h3 class="login-modal__input-heading">
                    Password
                </h3>
                <input
                    type="password"
                    v-model="password"
                    placeholder="password"
                    autocomplete="current-password"
                    class="login-modal__input"
                >
                <button
                    type="submit"
                    class="login-modal__submit"
                >
                    Login
                </button>
            </form>

            <div class="login-modal__note">
                <span>Test Email: <code>{{ MOCK_USER.email }}</code></span>
                <span>Test Password: <code>{{ MOCK_USER.password }}</code></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.login-modal {
    margin: 5em auto;
    background: #242424;
    max-width: 400px;
    width: 100%;
    padding: 5em 3em;
    position: relative;
    z-index: 10;

    &__outer {
        background: rgba(0, 0, 0, 0.75);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    &__heading {
        font-size: 2em;
    }

    &__close {
        position: absolute;
        top: 0;
        right: 0;
        margin: 1em;
    }

    &__input-heading {
        margin-bottom: 0;
        text-align: left;
        text-transform: lowercase;
        position: relative;
        bottom: -6px;
    }

    &__input {
        display: block;
        width: 100%;
        padding: 1em;
    }

    &__submit {
        margin-bottom: 0;
    }

    &__note {
        background: #464646;
        position: absolute;
        top: calc(100% + 1em);
        left: 0;
        right: 0;
        padding: 1em;
        text-align: left;
        width: 100%;

        span {
            display: block;
        }
    }

}
</style>
