<script setup>
import { ref, computed } from 'vue';

// TODO: Save and populate from local storage
const todos = ref([]);
const newTodo = ref('');
const newTodoInput = ref(null);
const newTodoError = ref(false);

// Computed values
const activeTodos = computed(() => todos.value.filter(todo => !todo.complete));
const completedTodos = computed(() => todos.value.filter(todo => todo.complete));

// Methods
const todoExists = (text) => todos.value.find((todo) => todo.text === text) !== undefined;
const setTodoError = () => {
    newTodoError.value = todoExists(newTodo.value);
};

function addTodo() {
    if (todoExists(newTodo.value)) {
        newTodoError.value = true;
        return;
    }
    todos.value.push({
        text: newTodo.value,
        complete: false,
    });
    newTodo.value = '';
    newTodoInput.value.focus();
}

function removeTodo(todo) {
    todos.value = todos.value.filter(({ text }) => todo.text !== text);
}

function toggleTodo(todo, complete) {
    const foundTodo = todos.value.find(({ text }) => todo.text === text);
    foundTodo.complete = complete;
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
                ref="newTodoInput"
                type="text"
                v-model="newTodo"
                placeholder="Enter a new todo"
                required
                class="todo-form__input"
                :class="{
                    'has-error': newTodoError === true,
                }"
                @input="setTodoError"
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

    <section class="todo-container">
        <ol class="todo-list">
            <li
                v-for="(todo, index) in activeTodos"
                :key="todo"
                class="todo-list__item"
            >
                <p class="todo-list__text">
                    {{ todo.text }}
                </p>

                <button
                    title="Complete todo"
                    @click="toggleTodo(todo, true)"
                    class="todo-list__button todo-list__button--complete"
                >
                    ✓
                </button>

                <button
                    title="Delete todo"
                    @click="removeTodo(todo)"
                    class="todo-list__button todo-list__button--delete"
                >
                    Delete
                </button>
            </li>
        </ol>
    </section>

    <section
        v-if="completedTodos.length"
        class="todo-container todo-container--completed"
    >
        <h2>Completed</h2>
        <ol class="todo-list todo-list--completed">
            <li
                v-for="(todo, index) in completedTodos"
                :key="todo"
                class="todo-list__item"
            >
                <p class="todo-list__text">
                    {{ todo.text }}
                </p>

                <button
                    title="Undo todo"
                    @click="toggleTodo(todo, false)"
                    class="todo-list__button todo-list__button--undo"
                >
                    Undo
                </button>

                <button
                    title="Delete todo"
                    @click="removeTodo(todo)"
                    class="todo-list__button todo-list__button--delete"
                >
                    Delete
                </button>
            </li>
        </ol>
    </section>
</template>

<style lang="scss">
.todo-container {
    margin-top: 2em;
}

.todo-form {
    display: flex;

    &__input {
        border: 1px solid transparent;
        display: block;
        width: 100%;
        padding: 1em;
        flex-grow: 1;

        &.has-error {
            border: 1px solid red;
        }
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
        position: relative;
    }

    &__text {
        flex-grow: 1;
        text-align: left;

        .todo-container--completed & {
            text-decoration: line-through;
        }
    }

    &__button {
        margin-left: 1em;

        &--complete {
            background: green;
        }

        &--delete {
            border: 0;
            background: transparent;
            padding-left: 0;
            padding-right: 0;
            text-transform: lowercase;
            display: block;
            color: red;
            position: absolute;
            left: calc(100% + 1em);
            top: 0;

            &:hover,
            &:active {
                text-decoration: underline;
            }
        }
    }

}
</style>
