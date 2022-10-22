<template>
  <v-col class="px-0">
    <p style="margin-top: 160px">
      <span class="mainTitle">All Articles</span>
    </p>
    <v-row
      class="px-0"
      style="margin-top: 64px"
      justify="center"
      align="center"
    >
      <div
        v-for="article in articlesBlogList"
        :key="article.id"
        style="width: 590px; margin-bottom: 60px"
      >
        <v-row align="center" style="padding-left: 60px">
          <img
            width="226px"
            height="266px"
            :src="`${require('@/assets/img/blog/' + article.img)}`"
          />
          <v-col style="margin-left: 40px; text-align: left">
            <v-row align="center" no-gutters>
              <img
                width="40px"
                height="41px"
                :src="`${require('@/assets/img/' + article.author_avatar)}`"
              />
              <v-col style="margin-left: 16px">
                <span
                  style="
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 28px;
                    color: #ffffff;
                    opacity: 0.87;
                  "
                  >{{ article.author }}</span
                ><br />
                <span class="mainText">{{ article.created_at }}</span>
              </v-col>
            </v-row>
            <p
              style="
                font-weight: 700;
                font-size: 20px;
                line-height: 30px;
                color: #ffffff;
                opacity: 0.87;
                margin-top: 24px;
              "
            >
              {{ article.title }}
            </p>
            <router-link
              :to="'/blog/' + article.id"
              style="text-decoration: none"
            >
              <p
                style="
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 28px;
                  color: #ffffff;
                  margin-top: 24px;
                  cursor: pointer;
                "
              >
                Read More
                <arrow-right style="margin-left: 16px" color="white" /></p
            ></router-link>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </v-col>
</template>

<script>
import ArrowRight from "../UI/icons/arrowRight.vue";
export default {
  components: {
    ArrowRight,
  },
  props: {
    articlesBlogList: {
      require: true,
    },
  },
};
</script>

<style>
</style>