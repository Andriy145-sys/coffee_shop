<template>
  <v-card height="532px" color="#1F1D21" style="margin-top: 162px">
    <v-row>
      <v-col
        cols="4"
        style="padding: 64px; padding-top: 80px; text-align: justify"
      >
        <span class="contactTitle">Working Hour</span>
        <p class="mainText">
          Sunday to Saturday<br />
          09:00 AM to 11:00 PM
        </p>
        <span class="contactTitle">Location</span>
        <p class="mainText">
          Street - 127, New York,<br />United States <br />546544
        </p>
        <span class="contactTitle">Contact us </span>
        <p class="mainText">
          +123456789<br />
          hey@yourdomain.com
        </p>
      </v-col>
      <v-col cols="8" class="px-0 py-0">
        <GmapMap
          :center="{ lat: 10, lng: 10 }"
          :zoom="7"
          map-type-id="terrain"
          style="width: 100%; height: 532px;"
          :options="mapStyle"
          :disableDefaultUi="true"
        >
        </GmapMap>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    mapStyle: {
      fullscreenControl: false,
      mapTypeControl: false,
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#212121",
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#212121",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "administrative.country",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#181818",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1b1b1b",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#2c2c2c",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8a8a8a",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#373737",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#3c3c3c",
            },
          ],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [
            {
              color: "#4e4e4e",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#3d3d3d",
            },
          ],
        },
      ],
    },
  }),
};
</script>

<style scoped>
.contactTitle {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
}
</style>