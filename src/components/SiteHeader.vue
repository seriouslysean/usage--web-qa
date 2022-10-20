<script setup>
import { useRouter } from 'vue-router';

import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const emit = defineEmits(['login']);
const router = useRouter();
const links = router.getRoutes().map(({ path, name }) => ({ path, name }));

function handleModalOpen() {
    emit('login');
}

function handleLogout() {
    userStore.logout();
}

</script>

<template>
    <header class="site-header">
        <nav>
            <ul class="site-header__links">
                <li
                    v-for="link in links"
                    :key="link.name"
                >
                    <router-link
                        :to="link.path"
                        class="site-header__link"
                    >
                        {{ link.name }}
                    </router-link>
                </li>
                <li>
                    <button
                        v-if="userStore.loggedIn === true"
                        @click="handleLogout"
                        class="site-header__button site-header__button--logout"
                    >
                        Logout
                    </button>
                    <button
                        v-else
                        @click="handleModalOpen"
                        class="site-header__button site-header__button--login"
                    >
                        Login
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss">
.site-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    text-align: right;
    padding: 1em;

    &__links li {
        display: inline-block;
    }

    &__link {
        display: inline-block;
        padding: 1em;

        &.router-link-exact-active {
            text-shadow: 1px 0 0 currentColor;
        }
    }

    &__button {
        min-width: 100px;
        text-align: center;
    }

    &__button--login {
        background: green;
    }

    &__button--logout {
        background: red;
    }
}
</style>
