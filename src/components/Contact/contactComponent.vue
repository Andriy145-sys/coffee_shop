<template>
  <v-main>
    <v-container>
      <v-row style="margin-top: 96px;">
        <v-col cols="6">
          <p class="mainTitle">Have a Question ?<br> Get in Touch with us 👋</p>
          <p class="mainText">
            Fill up the Form and ou team will get back to within 24 hrs
          </p>
          <user-form />
        </v-col>
        <v-col cols="6" style="text-align: right; padding-left: 111px;">
          <div style="display: flex;">
            <img
              src="@/assets/img/contactImage1.png"
              style="margin-right: 64px; padding-top: 83px;"
            />
            <img src="@/assets/img/contactImage2.png" />
          </div>
        </v-col>
      </v-row>
      <contact-card />
    </v-container>
  </v-main>
</template>

<script>
import ContactCard from '../UI/cards/contactCard.vue';
import userForm from "./userForm.vue";
export default {
  components: { userForm, ContactCard },
  mounted(){
    this.$vuetify.goTo(0,0)
  }
};
</script>

<style>
</style>