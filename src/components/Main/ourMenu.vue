<template>
  <v-col class="px-0">
    <section-name name="OUR MENU" />
    <v-row>
      <v-col cols="4">
        <p class="mainTitle">Discover our menu chart</p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="5" class="px-5">
        <p class="mainText" style="text-align: justify">
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic..
          Through True Rich Attended does no end it his mother
        </p>
      </v-col>
    </v-row>
    <p
      style="
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        color: #c4e4ea;
        text-align: left;
      "
    >
      Most Popular Picks
    </p>
    <menu-list />
    <view-menu-btn style="margin-top: 30px;"/>
  </v-col>
</template>

<script>
import sectionName from "../UI/sectionName.vue";
import MenuList from "./menuList.vue";
import ViewMenuBtn from "../UI/viewMenuBtn.vue";
export default {
  components: { sectionName, MenuList, ViewMenuBtn },
};
</script>

<style>
</style>