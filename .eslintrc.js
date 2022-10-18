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
        'vue/html-indent': ['error', 4],
    },
}
