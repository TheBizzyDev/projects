<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <transition name="fade" appear>
              <v-card class="mx-auto px-16 card-index" max-width="700">
                <v-container>
                  <v-card-title class="justify-center">Todo App</v-card-title>
                  <!-- Search Field -->
                  <app-search :todos="todos"></app-search>

                  <!-- List of Todos -->
                  <app-todos :todos="todos"></app-todos>
                </v-container>
              </v-card>
          </transition>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Todos from "./components/Todos.vue";

export default {
  components: {
    "app-search": Search,
    "app-todos": Todos,
  },
  name: "app",
  data() {
    return {
      todos: [],
    };
  },
};
</script>

<style lang="scss">

.todo.false {
  border-left: 4px solid tomato;
}

.todo.true {
  border-left: 4px solid #3cd1c2;
}

// Transitions
.card-index {
  transition: all 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

</style>

