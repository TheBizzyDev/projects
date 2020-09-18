<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <v-card class="mx-auto px-16" max-width="700">
            <v-container>
              <v-card-title class="justify-center">Todo App</v-card-title>
              <!-- Search Field -->
              <app-search :todos="todos"></app-search>

              <!-- List of Todos -->
              <app-todos :todos="todos"></app-todos>
            </v-container>
          </v-card>
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

</style>

