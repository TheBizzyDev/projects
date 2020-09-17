<template>
  <div>
    <v-layout row>
      <v-flex>
        <v-text-field 
          class="pr-4" 
          label="Enter a Todo" 
          v-model="search" 
          solo
          @keypress.enter="add"
          >
        </v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn class="blue white--text" @click="add">
          <v-icon small>mdi-plus</v-icon>
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
        this.search = '';
      }
    },
  },
};
</script>

<style>
</style>
