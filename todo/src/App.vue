<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <v-card class="mx-auto px-16" max-width="650">
            <v-card-title class="justify-center">Todo App</v-card-title>

            <!-- Search Field -->
            <app-search></app-search>

            <!-- List of Todos -->
            <v-layout row>
              <v-flex>
                <v-list  class="px-0" v-for="item in 3" :key="item">
                  <v-list-item>Testing</v-list-item>
                </v-list>
              </v-flex>
            </v-layout>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Search from "./components/Search.vue";

export default {
  components: {
    "app-search": Search,
  },

  name: "app",
  data() {
    return {};
  },
};
</script>

<style>
body {
  font-family: "Roboto";
}
</style>
