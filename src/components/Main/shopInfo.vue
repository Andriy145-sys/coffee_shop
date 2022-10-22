<template>
  <v-row align="center" justify="center" style="margin-top: 96px">
    <v-col cols="6" style="text-align: left">
      <p class="mainTitle">We serve high quality foods of all kinds.</p>
      <p class="mainText">
        Edit this text to make it your own. To edit, simply click directly on
        the text to start adding your own words. You can move the text.
      </p>
      <view-menu-btn style="margin-top: 22px; margin-bottom: 40px" />
      <br />
      <span class="mainSubtitle">Opening Times</span>
      <p class="mainText">Sunday to Saturday | 09:00 AM to 11:00 PM</p>
      <span class="mainSubtitle">Location</span>
      <p class="mainText">Master canteen, BBSR , Odisha 752054</p>
      <span class="mainSubtitle">Call us</span>
      <p class="mainText">+9776462441</p>
    </v-col>
    <v-col cols="6">
      <img src="@/assets/img/infoImage.png" />
    </v-col>
  </v-row>
</template>

<script>
import ViewMenuBtn from "../UI/viewMenuBtn.vue";
export default {
  components: {
    ViewMenuBtn
  }
};
</script>

<style>
</style>
ViewMenuBtn