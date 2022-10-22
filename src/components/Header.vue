<template>
  <v-app-bar color="#19161B" dense height="80px;">
    <v-main>
      <v-container>
        <v-item-group v-model="activeItem">
          <v-row no-gutters align="center" class="pt-5">
            <router-link to="/" style="text-decoration: none;">
              <p style="color: #ffc492; font-size: 20px; cursor: pointer">
                Finsweet
              </p>
            </router-link>
            <v-item
              v-for="item in headerItems"
              :key="item.id"
              style="margin-left: 40px; cursor: pointer"
              v-slot="{ toggle }"
            >
              <router-link :to="item.path" style="text-decoration: none">
                <p
                  :style="
                    $route.path == item.path ? 'color: #FFC492' : 'color: white'
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
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    activeItem: "",
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