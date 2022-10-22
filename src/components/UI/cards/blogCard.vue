<template>
  <v-card height="526px" width="380px" color="#1F1D21" class="mx-1">
    <div style="padding: 32px">
      <p class="mainText">
        {{ item.date }}
      </p>
      <p
        style="
          font-weight: 700;
          font-size: 32px;
          line-height: 48px;
          color: #ffffff;
          opacity: 0.87;
          text-align: left;
        "
      >
        {{ item.title }}
      </p>
      <p class="mainText">{{ item.text }}</p>
    </div>

    <img
      height="234px"
      width="380px"
      :src="`${require('@/assets/img/blog/' + item.img)}`"
      style="object-fit: cover;"
    />
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      require: true,
    },
  },
};
</script>

<style>
</style>