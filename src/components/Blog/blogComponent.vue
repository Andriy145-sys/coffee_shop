<template>
  <v-main>
    <v-container>
      <v-row justify="center" style="margin-top: 96px">
        <v-col style="text-align: center">
          <featured-blog :featuredBlogList="featuredBlogList" />
          <articles-blog :articlesBlogList="articlesBlogList" />
          <contact-card />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import contactCard from "../UI/cards/contactCard.vue";
import ArticlesBlog from "./articlesBlog.vue";
import FeaturedBlog from "./featuredBlog.vue";
export default {
  components: { contactCard, FeaturedBlog, ArticlesBlog },
  data: () => ({
    featuredBlogList: [
      {
        id: 2,
        title: "You can move the text by dragging and dropping the text ",
        text: "Writing UX copies can be a little frustrating and confusing, and sometimes ",
        img: "blogFeaturedBlogsImage2.png",
      },
      {
        id: 3,
        title: "Edit this text to make it your own. To edit, simply ",
        text: "Writing UX copies can be a little frustrating and confusing, and sometimes ",
        img: "blogFeaturedBlogsImage3.png",
      },
      {
        id: 4,
        title: "You can move the text by dragging and dropping the text ",
        text: "Writing UX copies can be a little frustrating and confusing, and sometimes ",
        img: "blogFeaturedBlogsImage4.png",
      },
    ],
    articlesBlogList: [
      {
        id: 1,
        author: "Andrew Jonson",
        author_avatar: "authorAvatar.png",
        created_at: "27th January 2021",
        title: "A guide to Thai Curry",
        img: "blogAllArticlesImage1.png",
      },
      {
        id: 2,
        author: "Andrew Jonson",
        author_avatar: "authorAvatar.png",
        created_at: "27th January 2021",
        title: "The best guacamole recipe with only 4 ingredients",
        img: "blogAllArticlesImage2.png",
      },
      {
        id: 3,
        author: "Andrew Jonson",
        author_avatar: "authorAvatar.png",
        created_at: "27th January 2021",
        title: "How to store Tomatoes (and Whether to Refrigerate Them)",
        img: "blogAllArticlesImage3.png",
      },
      {
        id: 4,
        author: "Andrew Jonson",
        author_avatar: "authorAvatar.png",
        created_at: "27th January 2021",
        title: "The Absolute Best Way to Cook French Fries",
        img: "blogAllArticlesImage4.png",
      },
    ],
  }),
  mounted(){
    this.$vuetify.goTo(0,0)
  }
};
</script>

<style>
.backgroundBlog {
  background: url("../../assets/img/blog/blogFeaturedBlogsImage1.png");
  height: 496px;
  width: 624px;
}
.overlay {
  background: rgba(20, 17, 21, 0.81);
  height: 496px;
  width: 624px;
}
</style>