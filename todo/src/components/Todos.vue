<template>
  <div>
    <v-card flat v-if="todos.length < 1">
      <v-layout row>
        <v-flex class="text-center">
          <div class="title">Please Enter a Todo</div>
        </v-flex>
      </v-layout>
    </v-card>

    <v-card flat class="pb-7" v-for="(todo,index) in todos" :key="index">
      <v-layout row :class="`todo ${todo.status}`">
        <v-flex xs2>
          <div class="ml-5">
            <v-switch v-model="todo.status"></v-switch>
          </div>
        </v-flex>
        <v-flex class="my-auto">
          <div class="title text-center">{{ todo.title }}</div>
        </v-flex>
        <v-flex xs2 class="my-auto">
          <div>
            <v-btn class="red white--text" @click="remove(index)">
            <v-icon small>mdi-minus</v-icon>
            </v-btn>
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
