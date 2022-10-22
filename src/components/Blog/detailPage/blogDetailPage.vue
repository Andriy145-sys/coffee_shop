<template>
  <main>
    <v-container>
      <v-col class="px-0" style="margin-top: 98px">
        <v-row align="center" justify="center">
          <img src="@/assets/img/authorAvatar.png" />
          <span
            style="
              font-weight: 400;
              font-size: 16px;
              line-height: 28px;
              color: #ffffff;
              opacity: 0.87;
              margin-left: 12px;
              margin-right: 24px;
            "
          >
            Andrew Jonson
          </span>
          <span class="mainText">Posted on 27th January 2021</span>
        </v-row>
        <p style="margin-top: 56px; text-align: center" class="mainTitle">
          {{ blog.title }}
        </p>
        <img
          height="488px"
          :src="`${require('@/assets/img/blog/' + blog.img)}`"
          width="100%"
          style="margin-top: 80px; margin-bottom: 80px; object-fit: cover"
        />
        <v-row justify="center">
          <v-col cols="8" style="text-align: left">
            <div v-html="blog.text" style="color: white" />
          </v-col>
        </v-row>
      </v-col>
      <contact-card />
    </v-container>
  </main>
</template>

<script>
import contactCard from "../../UI/cards/contactCard.vue";
export default {
  components: { contactCard },
  data: () => ({
    blog: {
      title: "How to store Tomatoes (and Whether to Refrigerate Them)",
      img: "blogFeaturedBlogsImage1.png",
      text: "<h1>Edit this text to make it your own. To edit, simply click directly on the text.</h1><br> <p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p><p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p><p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p><p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.</p><br></h3><h3>Transform Your Idea Into Reality with Ether a Leading Digital Agency</h3><p>Step 1: Download the plugin from Figma community, search Ghost UXWriter<br>Step 2: Open the plugin on your artboard<br>Step 3: Search for your copy or look through the different categories of the copies<br>Step 4: Select the type of error you are looking for. You will get three different copies for each error<br>Step 5: Tap on the cards to insert text in your frames<br>And you are all geared up to make your UX copies more fun and exciting 😎</p><br><h1>Your own words. You can move the text by dragging and dropping the text anywhere on the page.</h1><br><p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>",
    },
  }),
  mounted(){
    this.$vuetify.goTo(0,0)
  }
};
</script>

<style>
</style>