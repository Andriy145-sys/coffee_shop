<template>
  <v-row no-gutters align="center" style="margin-top: 160px;">
    <p class="sectionName">{{ name }}</p>
    <div style="width: 48px; padding-bottom: 15px; margin-left: 16px">
      <v-divider color="white" />
    </div>
  </v-row>
</template>

<script>
export default {
  props: {
    name: {
      require: true,
    },
  },
};
</script>

<style>
</style>