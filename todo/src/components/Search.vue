<template>
  <div>
    <v-layout row>
      <v-flex>
        <v-text-field class="pr-4" label="Search" v-model="search" solo></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn block class="blue white--text" @click="add">
          <v-icon small left>mdi-plus</v-icon>add
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  name: "app",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    add() {
      if (this.search != "" && this.search != undefined) {
        this.todos.push({
          title: this.search,
          status: false,
        });
      }
    },
  },
};
</script>

<style>
</style>
