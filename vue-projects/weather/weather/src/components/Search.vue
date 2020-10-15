<template>
  <div class="search">
    <input
      v-model="city"
      class="search-input"
      type="text"
      placeholder="Search"
    />
  </div>
</template>

<script>
export default {
    props: ['citySearch'],
    data() {
        return {
            city: '',
        }
    },
    computed: {
        updateCity() {
            this.$emit('updateCity', this.city);
        }
    }
};
</script>

<style>
</style>