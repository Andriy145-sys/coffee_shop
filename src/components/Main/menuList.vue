<template>
  <v-col class="px-0">
    <v-row v-if="$route.path == '/'">
      <dish-card v-for="dish in dishList.slice(0,6)" :key="dish.key" :dish="dish" />
    </v-row>
    <v-row v-else>
      <dish-card v-for="dish in dishList" :key="dish.key" :dish="dish" />
    </v-row>
  </v-col>
</template>

<script>
import dishCard from "../UI/cards/dishCard.vue";
export default {
  components: { dishCard },
  data: () => ({
    dishList: [],
    oldDishList: [
      {
        id: 1,
        name: "Drp Cofee",
        price: "$08.85",
        img: "coffe.png",
        category: "coffe",
      },
      {
        id: 2,
        name: "Choco Cup Cake",
        price: "$4.85",
        img: "cupCake.png",
        category: "quafe_cake",
      },
      {
        id: 3,
        name: "Chicken Burger",
        price: "$8.85",
        img: "chickenBurger.png",
        category: "fast_food",
      },
      {
        id: 4,
        name: "French Fries",
        price: "$7.85",
        img: "frenchFries.png",
        category: "fast_food",
      },
      {
        id: 5,
        name: "Sandwitch",
        price: "$3.97",
        img: "sandwitch.png",
        category: "fast_food",
      },
      {
        id: 6,
        name: "Chinese Soup",
        price: "$8.85",
        img: "chineseSoup.png",
        category: "fast_food",
      },
      {
        id: 7,
        name: "Quafe Brade",
        price: "$7.85",
        img: "quafeBrade.png",
        category: "quafe_cake",
      },
      {
        id: 8,
        name: "Dalgona Cofee",
        price: "$4.97",
        img: "dalgonaCoffe.png",
        category: "coffe",
      },
      {
        id: 9,
        name: "Chowmin Noodle",
        price: "$8.85",
        img: "chowminNoodle.png",
        category: "snacks",
      },
      {
        id: 10,
        name: "Coka Cola",
        price: "$7.85",
        img: "cokaCola.png",
        category: "cocktails",
      },
      {
        id: 11,
        name: "Fruit Salad",
        price: "$3.97",
        img: "fruitSalad.png",
        category: "snacks",
      },
      {
        id: 12,
        name: "Cocktail",
        price: "$8.85",
        img: "cocktail.png",
        category: "cocktails",
      },
    ],
  }),
  props: {
    dishCategory: {
      require: false,
    },
  },
  mounted() {
    this.dishList = this.oldDishList;
  },
  methods: {
    filterDishForCategory() {
      this.dishList = this.dishList.filter(
        (dish) => dish.category == this.dishCategory
      );
    },
  },
  watch: {
    dishCategory: {
      deep: true,
      handler() {
        this.dishList = this.oldDishList;
        if (this.dishCategory == "all") {
          this.dishList = this.oldDishList;
        } else {
          this.filterDishForCategory();
        }
      },
    },
  },
};
</script>

<style>
</style>