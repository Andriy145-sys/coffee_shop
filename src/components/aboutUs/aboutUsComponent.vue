<template>
  <v-main>
    <v-container>
      <section-name name="KNOW MORE ABOUT US" />
      <v-row class="px-0">
        <v-col cols="6" style="text-align: left">
          <p class="mainTitle">We source sustainable & line caught Foods.</p>
          <p class="mainText">
            Edit this text to make it your own. To edit, simply click directly
            on the text to start adding your own words. You can move the text by
            dragging and dropping the text anywhere on the page.
          </p>
          <v-row>
            <v-col v-for="item in ourInfo" :key="item.id" class="px-6">
              <span
                style="
                  font-weight: 500;
                  font-size: 24px;
                  line-height: 36px;
                  color: #c4e4ea;
                "
                ><img src="@/assets/img/icons/aboutUsIcon.svg" /><span
                  style="margin-left: 7px"
                  >{{ item.title }}</span
                ></span
              >
              <p class="mainText">
                {{ item.subtitle }}
              </p>
              <p class="mainText">{{ item.text }}</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6" class="px-0">
          <v-row align="start" justify="end" class="px-0 ml-14">
            <img
              src="@/assets/img/knowMore/knowMoreDetailImage1.png"
              style="margin-right: 67px; margin-top: 83px"
            />
            <img src="@/assets/img/knowMore/knowMoreDetailImage2.png" />
          </v-row>
        </v-col>
      </v-row>
      <about-us-history />
      <v-row style="margin-top: 160px;">
        <v-col>
          <p class="mainTitle">Things our company stands for</p>
        </v-col>
        <v-col>
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
            Edit this text to make it your own. To edit, simply click directly
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
        </v-col>
      </v-row>
      <contact-card />
    </v-container>
  </v-main>
</template>

<script>
import ContactCard from "../UI/cards/contactCard.vue";
import sectionName from "../UI/sectionName.vue";
import AboutUsHistory from "./aboutUsHistory.vue";
export default {
  components: { sectionName, ContactCard, AboutUsHistory },
  data: () => ({
    ourInfo: [
      {
        id: 1,
        title: "10+ People",
        subtitle: "We are Small Team",
        text: "Through True Rich Attended does no end it his mother since favourable.",
      },
      {
        id: 2,
        title: "2014",
        subtitle: "We are From",
        text: "Through True Rich Attended does no end it his mother since favourable.",
      },
      {
        id: 3,
        title: "200k",
        subtitle: "We Served",
        text: "Through True Rich Attended does no end it his mother since favourable.",
      },
    ],
  }),
  mounted(){
    this.$vuetify.goTo(0,0)
  }
};
</script>

<style>
</style>