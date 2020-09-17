<template>
  <div>
    <v-layout row>
      <v-flex>
        <v-text-field 
          class="pr-4"
          label="Search" 
          v-model="search" 
          solo>
          </v-text-field>
      </v-flex>
      
      <v-flex xs2>
        <v-btn block class="blue white--text">
          <v-icon small left>mdi-plus</v-icon>plus
        </v-btn>
      </v-flex>
      
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style>
</style>
