module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-strongly-recommended'
    ],
    parser: 'vue-eslint-parser',
    rules: {
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'only-multiline'],
        'vue/html-indent': ['error', 4],
        'vue/script-setup-uses-vars': 'error',
    },
    overrides: [{
        files: 'tests/cypress/**/*.js',
        env: {
            'cypress/globals': true,
        },
    }],
};
