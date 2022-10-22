<template>
  <v-col cols="12" class="px-0" style="text-align: left;">
    <v-row no-gutters align="center">
      <v-text-field dense placeholder="Name" outlined />
      <v-text-field dense placeholder="Email" outlined style="padding-left: 32px;"/>
    </v-row>
    <v-textarea placeholder="Message" outlined class="px-0 mt-2" />
    <v-btn
      color="#27252D"
      height="54px"
      width="213px"
      style="text-transform: none;"
      ><span
        style="
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #ffffff;
          opacity: 0.87;
          margin-right: 12px;
        "
        >Send Message</span
      >
      <arrow-right color="#FFC492"
    /></v-btn>
  </v-col>
</template>

<script>
import arrowRight from "../UI/icons/arrowRight.vue";
export default {
  components: { arrowRight },
};
</script>

<style>
.v-text-field input::placeholder {
  color: white !important;
}
.v-text-field input {
  padding-left: 32px;
  padding: 14px;
  height: 56px;
  color: white !important;
}
.v-text-field--outlined fieldset {
    border: 1px solid rgba(255, 255, 255, 0.04);
  }
.v-textarea textarea::placeholder {
  color: white !important;
}
</style>