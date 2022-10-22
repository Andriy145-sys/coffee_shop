<template>
  <div>
    <v-col style="margin-top: 165px" class="px-0">
      <p class="mainTitle">Read Our Lastest Blog</p>
      <v-row style="margin-top: 62px;">
        <blog-card v-for="item in blogItemsList" :key="item.id" :item="item" />
      </v-row>
    </v-col>
  </div>
</template>

<script>
import blogCard from "../UI/cards/blogCard.vue";
export default {
  components: { blogCard },
  data: () => ({
    blogItemsList: [
      {
        id: 1,
        date: "21 Jun 2021",
        title: "Extra Thick Homemad Pizza Sauce",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        img: "blogImage1.png",
      },
      {
        id: 2,
        date: "21 Jun 2021",
        title: "The Best Way to Store Fresh Herbs",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        img: "blogImage2.png",
      },
      {
        id: 3,
        date: "21 Jun 2021",
        title: "5 ways to prepare porridge",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        img: "blogImage3.png",
      },
    ],
  }),
};
</script>

<style>
</style>