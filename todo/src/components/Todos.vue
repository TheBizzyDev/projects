<template>
  <div>
    <v-card flat class="py-3" v-if="todos.length < 1">
      <v-layout row>
        <v-flex class="text-center">
          <div class="title">Please Enter a Todo</div>
        </v-flex>
      </v-layout>
    </v-card>

    <v-card flat class="pb-7" v-for="(todo,index) in todos" :key="index">
      <v-layout row :class="`pa-3 todo ${todo.status}`">
        <v-flex class="my-auto">
          <div class="title">{{ todo.title }}</div>
        </v-flex>
        <v-flex xs2>
          <div>
            <v-switch v-model="todo.status"></v-switch>
          </div>
        </v-flex>
        <v-flex xs2 class="my-auto">
          <div>
            <v-btn class="red white--text" depressed @click="remove(index)">delete</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>

export default {
    props: ['todos'],
    methods: {
      remove(index) {
         this.todos.splice(index,1);
      }
    }
}

</script>

<style lang="scss">
.todo.false {
  border-left: 4px solid tomato;
}
.todo.true {
  border-left: 4px solid #3cd1c2;
}
</style>
