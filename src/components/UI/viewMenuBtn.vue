<template>
  <v-btn
    @click="$router.push('/menu')"
    class="rounded-0"
    width="164px"
    height="48px"
    color="#FFB577"
    style="text-transform: none"
    ><span
      style="
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #2e2d33;
      "
    >
      View Menu
    </span>
    <img class="ml-2" src="@/assets/img/icons/arrowRight.svg" />
  </v-btn>
</template>

<script>
export default {};
</script>

<style>
</style>