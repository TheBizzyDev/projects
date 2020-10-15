<template>
  <transition name="fade" mode="out-in" appear>
    <div class="hero-content" appear>
      <h1 class="hero-content-deg" name="fade">{{ temp }}</h1>
      <p class="hero-content-weather">{{ desc }}</p>
    </div>
  </transition>
</template>

<script>
export default {
    props: ['temp', 'desc']
};
</script>

<style>
</style>