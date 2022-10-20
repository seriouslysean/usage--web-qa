<script setup>
import { ref } from 'vue';

// TODO: Save and populate from local storage
const todos = ref([]);
const newTodo = ref('');

function addTodo() {
    todos.value.push(newTodo.value);
    newTodo.value = '';
}

function removeTodo(index) {
    todos.value.splice(index, 1);
}
</script>

<template>
    <h1>Todo</h1>

    <section>
        <form
            @submit.prevent="addTodo"
            class="todo-form"
        >
            <input
                type="text"
                v-model="newTodo"
                placeholder="Enter a new todo"
                required
                class="todo-form__input"
            >
            <button
                title="Add todo"
                type="submit"
                class="todo-form__button"
            >
                +
            </button>
        </form>
    </section>

    <section>
        <ol class="todo-list">
            <li
                v-for="(todo, index) in todos"
                :key="todo"
                class="todo-list__item"
            >
                <p class="todo-list__text">
                    {{ todo }}
                </p>

                <button
                    @click="removeTodo(index)"
                    class="todo-list__button"
                >
                    X
                </button>
            </li>
        </ol>
    </section>
</template>

<style lang="scss">
.todo-form {
    display: flex;

    &__input {
        border: 1px solid transparent;
        display: block;
        width: 100%;
        padding: 1em;
        flex-grow: 1;
    }

    &__button {
        background: green;
        margin-left: 1em;
    }

}

.todo-list {

    &__item {
        display: flex;
        align-items: center;
    }

    &__text {
        flex-grow: 1;
        text-align: left;
    }

    &__button {
        background: red;
        justify-content: flex-end;
        margin-left: 1em;
    }

}
</style>
