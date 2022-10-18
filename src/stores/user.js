import { defineStore } from 'pinia';

export const MOCK_USER = {
    email: 'user@domain.com',
    password: 'password',
};

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
    }),
    getters: {
        loggedIn: ({ user }) => user !== null && (
            user.email === MOCK_USER.email &&
            user.password === MOCK_USER.password
        ),
    },
    actions: {
        login(email, password) {
            if (!email || !password) {
                return;
            }
            this.user = {
                email,
                password,
            };
        },
        logout() {
            this.user = null;
        },
    },
});
