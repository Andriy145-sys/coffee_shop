<template>
  <v-main>
    <v-container>
      <shop-info />
      <about-us />
      <our-service />
      <our-menu />
      <blog />
      <contact-card />
    </v-container>
  </v-main>
</template>

<script>
import shopInfo from "./shopInfo.vue";
import AboutUs from "./aboutUs.vue";
import OurService from "./ourService.vue";
import OurMenu from "./ourMenu.vue";
import Blog from "./Blog.vue";
import ContactCard from "../UI/cards/contactCard.vue";
export default {
  components: { shopInfo, AboutUs, OurService, OurMenu, Blog, ContactCard },
  mounted(){
    this.$vuetify.goTo(0,0)
  }
};
</script>

<style>
</style>