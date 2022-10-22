<template>
  <div>
    <div class="background">
      <v-row align="center">
        <v-col
          cols="5"
          class="px-0"
          style="margin-top: 124px; margin-left: 80px"
        >
          <p class="mainTitle">
            One of the best Cafes in
            <span style="color: #ffc492">New York</span>
          </p>
          <p class="mainText">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.. Through True Rich Attended does no end it his mother
          </p>
        </v-col>
      </v-row>
    </div>
    <div
      style="
        width: 100%;
        height: 502px;
        background: rgba(255, 255, 255, 0.03);
        padding: 80px;
        text-align: left;
      "
    >
      <p
        style="
          font-weight: 700;
          font-size: 32px;
          line-height: 48px;
          color: #ffffff;
        "
      >
        Our History
      </p>
        <div
          style="
            border-top: 2px dashed rgba(255, 255, 255, 0.15);
            width: 70%;
            position: absolute;
            margin-top: 3px;
          "
        ></div>
      <v-row>
        <v-col v-for="item in history" :key="item.id">
          <v-row no-gutters>
            <div
              style="
                border-top: 6px solid #ffb577;
                margin-bottom: 32px;
                width: 41px;
              "
            ></div>
          </v-row>
          <p
            style="
              font-weight: 600;
              font-size: 32px;
              line-height: 44px;
              color: #ffffff;
            "
          >
            {{ item.year }}
          </p>
          <p class="mainSubtitle">
            {{ item.title }}
          </p>
          <p class="mainText">{{ item.text }}</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    history: [
      {
        id: 1,
        year: 1998,
        title: "Milestone One",
        text: "Through True Rich Attended does no end it his mother since favourable.",
      },
      {
        id: 2,
        year: 2005,
        title: "Milestone Two",
        text: "Through True Rich Attended does no end it his mother since favourable.",
      },
      {
        id: 3,
        year: 2012,
        title: "Milestone Three",
        text: "Through True Rich Attended does no end it his mother since favourable.",
      },
      {
        id: 4,
        year: 2021,
        title: "Milestone Four",
        text: "Through True Rich Attended does no end it his mother since favourable.",
      },
    ],
  }),
};
</script>

<style>
.background {
  margin-top: 160px;
  width: 100%;
  height: 500px;
  object-fit: cover;
  background: linear-gradient(
      97.28deg,
      rgba(25, 22, 27, 0.92) 34.6%,
      rgba(25, 22, 27, 0) 83.17%
    ),
    url("../../assets/img/aboutUsHistoryBackground.png");
}
</style>