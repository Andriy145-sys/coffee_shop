<template>
  <v-main>
    <v-container>
      <v-col class="px-0 py-0">
        <section-name name="OUR MENU" />
        <v-row align="center">
          <v-col cols="5">
            <p class="mainTitle">
              Discover<br />
              Our menu Chart
            </p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="5" class="px-10">
            <p class="mainText" style="text-align: justify">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.. Through True Rich Attended does no end it his mother
            </p>
          </v-col>
        </v-row>
        <v-item-group v-model="activeCategory">
          <v-row no-gutters align="center" style="margin-top: 144px">
            <v-item
              v-for="category in categoryList"
              :key="category.id"
              v-slot="{ active, toggle }"
            >
              <p
                @click="toggle"
                :class="active ? 'activeCategory' : 'inactiveCategory'"
              >
                <span @click="dishCategory = category.value">{{ category.title }}</span>
              </p>
            </v-item>
          </v-row>
        </v-item-group>
      </v-col>
      <menu-list style="margin-top: 64px" :dishCategory="dishCategory" />
      <contact-card />
    </v-container>
  </v-main>
</template>

<script>
import MenuList from "../Main/menuList.vue";
import ContactCard from "../UI/cards/contactCard.vue";
import sectionName from "../UI/sectionName.vue";
export default {
  components: { sectionName, ContactCard, MenuList },
  data: () => ({
    activeCategory: 0,
    dishCategory: "",
    categoryList: [
      {
        id: 1,
        title: "All",
        value: "all",
      },
      {
        id: 2,
        title: "Fast Food",
        value: "fast_food",
      },
      {
        id: 3,
        title: "Coffe",
        value: "coffe",
      },
      {
        id: 4,
        title: "Cocktails",
        value: "cocktails",
      },
      {
        id: 5,
        title: "Quafe Cake",
        value: "quafe_cake",
      },
      {
        id: 6,
        title: "Snacks",
        value: "snacks",
      },
    ],
  }),
  mounted(){
    this.$vuetify.goTo(0,0)
  },
  watch: {
    activeCategory: {
      deep: true,
      handler() {
        console.log(this.activeCategory);
      },
    },
  },
};
</script>

<style>
.inactiveCategory {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  opacity: 0.6;
  margin-right: 32px;
  cursor: pointer;
}

.activeCategory {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  margin-right: 32px;
}
</style>