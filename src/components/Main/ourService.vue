<template>
  <v-col class="px-0">
    <section-name name="WHAT WE ARE SERVING" />
    <v-row no-gutters align="center">
      <v-col class="px-0" cols="8"
        ><p class="mainTitle">
          We all have to eat, so why not do it beautifully?
        </p>
      </v-col>
      <v-col class="px-0" cols="4">
        <p class="mainText">
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic..
          Through True Rich Attended does no end it his mother
        </p>
      </v-col>
    </v-row>
    <div class="serviceListCube">
      <v-col>
        <v-row no-gutters>
          <v-col
            cols="4"
            v-for="(service,index) in serviceList"
            :key="service.id"
            style="padding: 64px; text-align: left;"
            :style="index !== 0 && index !== 3 ? 'border-left: 1px solid rgba(255, 255, 255, 0.06);' : ''"
          >
            <div
              style="
                border-radius: 50%;
                width: 48px;
                height: 48px;
                text-align: center;
                padding-top: 10px;
                background-color: rgba(255, 181, 119, 0.07);
              "
            >
              <v-icon color="#FFB577">{{ service.icon }}</v-icon>
            </div>
            <p
              style="
                font-weight: 700;
                font-size: 32px;
                line-height: 48px;
                color: #ffffff;
                margin-top: 24px;
              "
            >
              {{ service.title }}
            </p>
            <p
              style="
                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
                color: #b8b8b8;
              "
            >
              {{ service.text }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </div>
  </v-col>
</template>

<script>
import sectionName from "../UI/sectionName.vue";
export default {
  components: { sectionName },
  data: () => ({
    serviceList: [
      {
        id: 1,
        title: "Quafe Cake",
        text: "Through True Rich Attended no end it his mother since favourable real had half every him.",
        icon: "mdi-cake-layered",
      },
      {
        id: 2,
        title: "Cofee",
        text: "Through True Rich Attended no end it his mother since favourable real had half every him.",
        icon: "mdi-coffee",
      },
      {
        id: 3,
        title: "Fast Food",
        text: "Through True Rich Attended no end it his mother since favourable real had half every him.",
        icon: "mdi-food",
      },
      {
        id: 4,
        title: "Cocktails",
        text: "Through True Rich Attended no end it his mother since favourable real had half every him.",
        icon: "mdi-glass-wine",
      },
      {
        id: 5,
        title: "Grill",
        text: "Through True Rich Attended no end it his mother since favourable real had half every him.",
        icon: "mdi-food-drumstick-outline",
      },
      {
        id: 6,
        title: "Snacks",
        text: "Through True Rich Attended no end it his mother since favourable real had half every him.",
        icon: "mdi-package-variant-closed",
      },
    ],
  }),
};
</script>

<style scoped>
.serviceListCube {
  height: 686px;
  background-color: rgba(0, 0, 0, 0.16);
  margin-top: 65px;
}
</style>