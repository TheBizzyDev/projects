<template>
  <div class="hero-city">
    <transition name="fade" mode="out-in" appear>
      <h5 class="hero-city-location">{{ city }}, {{ country }}</h5>
    </transition>
  </div>
</template>

<script>
export default {
    props: ['city', 'country']

};
</script>

<style>
</style>