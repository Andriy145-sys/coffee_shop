<template>
  <v-footer color="#19161B" style="padding: 0; margin-top: 165px">
    <v-col class="py-0">
      <v-main>
        <v-container>
          <v-item-group v-model="activeItem">
            <p style="color: #ffc492; font-size: 24px">Finsweet</p>
            <v-row no-gutters align="center" class="pt-5" justify="center">
              <v-item
                v-for="item in headerItems"
                :key="item.id"
                style="margin-left: 40px; cursor: pointer"
                v-slot="{ toggle }"
              >
                <router-link :to="item.path" style="text-decoration: none">
                  <p
                    :style="
                      $route.path == item.path
                        ? 'color: #FFC492'
                        : 'color: white'
                    "
                    @click="toggle"
                  >
                    {{ item.title }}
                  </p>
                </router-link>
              </v-item>
            </v-row></v-item-group
          >
        </v-container>
      </v-main>
      <v-divider color="#FFFFFF" style="padding: 0; opacity: 0.07;" />
      <v-main>
        <v-container>
          <v-row no-gutters align="center">
            <p class="mainText">© 2021 Finsweet | All rights reserved.</p>
            <v-spacer>
              <p style="margin-right: 70px">
                <a
                  style="
                    text-decoration: none;
                    cursor: pointer;
                    margin-right: 24px;
                  " 
                  target="_blank"
                  v-for="icon in iconList"
                  :key="icon.id"
                  :href="icon.path"
                >
                  <v-icon color="white">{{ icon.icon }}</v-icon>
                </a>
              </p>
            </v-spacer>
            <p
              style="
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #ffffff;
              "
            >
              Contact Us
              <arrow-right style="margin-left: 9px" color="#FFB577" />
            </p>
          </v-row>
        </v-container> </v-main
    ></v-col>
  </v-footer>
</template>

<script>
import arrowRight from "./UI/icons/arrowRight.vue";
export default {
  components: { arrowRight },
  data: () => ({
    activeItem: "",
    iconList: [
      {
        id: 1,
        icon: "mdi-facebook",
        path: "",
      },
      {
        id: 2,
        icon: "mdi-twitter",
        path: "",
      },
      {
        id: 3,
        icon: "mdi-instagram",
        path: "",
      },
      {
        id: 4,
        icon: "mdi-linkedin",
        path: "",
      },
    ],
  }),
  props: {
    headerItems: {
      require: true,
    },
  },
};
</script>

<style>
</style>