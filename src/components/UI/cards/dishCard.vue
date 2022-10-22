<template>
  <v-card width="370px" color="#1F1D21" height="351px" class="mb-5 mx-2">
    <img
      height="271px"
      width="375px"
      style="object-fit: cover"
      :src="`${require('@/assets/img/dish/' + dish.img)}`"
    />
    <v-row align="center" class="px-10 mt-4">
      <p class="dishText">{{ dish.name }}</p>
      <v-spacer></v-spacer>
      <p class="dishText">{{ dish.price }}</p>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    dish: {
      require: true,
    },
  },
};
</script>

<style scoped>
.dishText {
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: #ffffff;
  opacity: 0.87;
}
</style>