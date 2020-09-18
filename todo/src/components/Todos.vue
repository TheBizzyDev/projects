<template>
  <div>
    <v-card flat v-if="todos.length < 1">
      <v-layout row>
        <v-flex class="title text-center pb-5">
          Please Enter a Todo
        </v-flex>
      </v-layout>
    </v-card>

    <v-card flat class="pb-7" v-for="(todo,index) in todos" :key="index">
      <v-layout row wrap align-center :class="`todo ${todo.status}`">
        <v-flex xs2 class="pl-5">
          <v-switch v-model="todo.status"></v-switch>
        </v-flex>
        <v-flex class="title text-center">{{ todo.title }}</v-flex>
        <v-flex xs2>
          <v-btn  block class="red white--text" @click="remove(index)">
            <v-icon small>mdi-minus</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["todos"],

  methods: {
    remove(index) {
      this.todos.splice(index, 1);
    },
    
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
</style>
