<template>
  <div>
    <p><span class="mainTitle">Featured Blogs</span></p>
    <v-row style="margin-top: 64px" align="start">
      <v-col>
        <div class="backgroundBlog">
          <div class="overlay">
            <div
              style="
                width: 159px;
                height: 52px;
                background: rgba(255, 196, 146, 0.47);
                backdrop-filter: blur(9.5px);
              "
            >
              <p
                style="
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 24px;
                  letter-spacing: 3px;
                  text-transform: uppercase;
                  color: #ffffff;
                  padding-top: 15px;
                "
              >
                Trending
              </p>
            </div>
            <v-col
              cols="12"
              style="text-align: left; padding-left: 64px; margin-top: 184px"
              class="py-0"
            >
              <v-col cols="8" class="px-0">
                <p
                  style="
                    font-weight: 600;
                    font-size: 48px;
                    line-height: 64px;
                    color: #ffffff;
                  "
                >
                  A guide to Thai Curry
                </p>
              </v-col>
              <v-row no-gutters align="center">
                <img
                  width="40px"
                  height="40px"
                  src="@/assets/img/authorAvatar.png"
                />
                <v-col style="margin-left: 16px" class="px-0">
                  <span
                    style="
                      font-weight: 400;
                      font-size: 16px;
                      line-height: 28px;
                      color: #ffffff;
                      opacity: 0.87;
                    "
                    >Andrew Jonson</span
                  ><br />
                  <span
                    style="
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 24px;
                      color: #ffffff;
                      opacity: 0.6;
                    "
                    >27th January 2021</span
                  >
                </v-col>
                <v-col style="padding-left: 192px">
                  <router-link :to="'/blog/' + 1" style="text-decoration: none">
                    <span
                      style="
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 28px;
                        color: #ffffff;
                        opacity: 0.87;
                        cursor: pointer;
                      "
                      >Read More
                      <arrow-right style="margin-left: 16px" color="#FFFFFF" />
                    </span>
                  </router-link>
                </v-col>
              </v-row>
            </v-col>
          </div>
        </div>
      </v-col>
      <v-col style="padding-left: 32px">
        <v-row
          v-for="item in featuredBlogList"
          :key="item.id"
          align="center"
          @click="$router.push('/blog/' + item.id)"
          style="cursor: pointer;"
        >
          <img
            width="132px"
            height="144px"
            :src="`${require('@/assets/img/blog/' + item.img)}`"
          />
          <v-col cols="8" style="text-align: left">
            <p
              style="
                font-weight: 700;
                font-size: 20px;
                line-height: 30px;
                color: #ffffff;
                opacity: 0.87;
              "
            >
              {{ item.title }}
            </p>
            <p class="mainText">{{ item.text }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ArrowRight from "../UI/icons/arrowRight.vue";
export default {
  components: {
    ArrowRight,
  },
  props: {
    featuredBlogList: {
      require: true,
    },
  },
};
</script>

<style>
</style>