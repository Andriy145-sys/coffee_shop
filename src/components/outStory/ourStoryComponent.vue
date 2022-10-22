<template>
  <v-main>
    <v-container>
      <v-row style="margin-top: 96px">
        <v-col style="text-align: left" cols="5" class="px-10">
          <p class="mainTitle">Our Story</p>
          <p class="mainText">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.
          </p>
          <div style="display: flex">
            <img
              src="@/assets/img/aboutUsImage1.png"
              style="margin-right: 64px; margin-top: 72px"
            />
            <img
              src="@/assets/img/aboutUsImage2.png"
              style="margin-top: 32px"
            />
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="5">
          <p class="mainTitle" style="font-size: 32px">
            One of the best cafes in
            <span style="color: #ffb577">New York.</span>
          </p>
          <p class="mainText">
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged and
            categorized with a voice and tone variation ranging from plain,
            casual to playful. The intention to build this Figma plugin
            originated from our Medium blog post, ‘Designing voice and tone for
            error messages.
          </p>
          <p class="mainText">
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged and
            categorized with a voice and tone variation ranging from plain,
            casual to playful. The intention to build this Figma plugin
            originated from our Medium blog post, ‘Designing voice.
          </p>
        </v-col>
      </v-row>
      <contact-card />
    </v-container>
  </v-main>
</template>

<script>
import contactCard from "../UI/cards/contactCard.vue";
export default {
  components: { contactCard },
  mounted() {
    this.$vuetify.goTo(0, 0);
  },
};
</script>

<style>
</style>