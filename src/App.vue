<template>
  <div id="app" style="padding: 0">
    <v-app>
      <Header :headerItems="headerItems" />
      <router-view />
      <Footer :headerItems="headerItems"/>
    </v-app>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    headerItems: [
      {
        id: 1,
        title: "Home",
        path: "/",
      },
      {
        id: 2,
        title: "Menu",
        path: "/menu",
      },
      {
        id: 3,
        title: "About Us",
        path: "/about_us",
      },
      {
        id: 4,
        title: "Our Story",
        path: "/our_story",
      },
      {
        id: 5,
        title: "Blog",
        path: "/blog",
      },
      {
        id: 6,
        title: "Contact",
        path: "/contact",
      },
    ],
  }),
};
</script>

<style>
#app {
  font-family: "Playfair Display";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #19161b;
}
</style>
