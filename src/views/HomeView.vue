<template>
  <!-- p-9 -->
  <v-container class="pa-9">
    <h1 class="text-h5 font-weight-bold mb-3">Dashboard</h1>

    <v-row>
      <v-col cols="4" v-for="data in dashboardOverview" :key="data.title">
        <v-sheet color="white d-flex custom-elevation" class="pa-4" style="height:100%" rounded>
          <h5 class="text-h6 grey--text text--darken-3">
            {{data.title}}
            <p class="mb-0 pl-3">{{data.value}}</p>
          </h5>

          <div v-if="data.icon" class="progressdiv ml-auto" :data-percent="data.progress">
            <svg-icon :name="data.icon"></svg-icon>
            <p> {{data.progress}}% </p>
          </div>
        </v-sheet>
      </v-col>

    </v-row>

    <v-row>
      <v-col cols="4">
        <v-card class="custom-elevation">
          <v-card-title>Project Status</v-card-title>
          <v-divider></v-divider>
          <!-- svg graphic details -->
          <div class="progressdiv d-flex align-center pa-4 mb-3" data-percent="10">
            <svg-icon strokeColor="#fb8c00" name="progressbar"></svg-icon>
            <v-card-subtitle>On Hold</v-card-subtitle>
          </div>
          <!-- badges -->
          <v-row class="px-10">
            <v-col>
              <v-badge dot left color="warning" inline class="mr-1"> 9 </v-badge>
            </v-col>
            <v-col>
              <v-badge dot left color="info" inline class="mr-1"> 9 </v-badge>
            </v-col>
            <v-col>
              <v-badge dot left color="success" inline class="mr-1"> 9 </v-badge>
            </v-col>
            <v-col>
              <v-badge dot left color="error" inline class="mr-1"> 9</v-badge>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: "HomeView",

    data: () => {
      return {
        dashboardOverview: [{
            title: 'Total Projects',
            value: 17,
            icon: 'progressbar',
            progress: 79
          },
          {
            title: 'Total Tasks',
            value: 35,
            icon: 'progressbar',
            progress: 3
          },
          {
            title: 'Total Users',
            value: 9
          },
        ]
      }
    },

    methods: {
      loadProgressData() {
        const circles = document.querySelectorAll(".progress");
        let strokeArray = 2 * 35 * Math.PI; // strokeArray = 2 * radius * PI 
        circles.forEach(c => {
          let childes = c.children;
          // add Dynamic Stroke DashArray...
          for (let i = 0; i < childes.length; i++) childes[i].style.strokeDasharray = strokeArray
          let totalProgress = strokeArray;
          let progress = c.parentElement.getAttribute("data-percent");
          let result = (totalProgress * progress) / 100;
          c.querySelector(".bar").style["stroke-dashoffset"] = result;
        })

      }
    },

    mounted() {
      this.loadProgressData()
    }

  };
</script>

<style lang="scss">
  .custom-elevation {
    box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%) !important;
  }

  .progressdiv {
    position: relative;
    // display: inline-block;

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 16px;
      transform: translate(-50%, -50%);
      content: attr(data-percent) "%";
    }

    //after pseudo class

    .progress {
      display: block;
      display: block;
      overflow: hidden;
      transform: rotate(-90deg) rotateX(180deg);

      circle {
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 1s ease;
        stroke-width: 5px;
      }

      // circle

      .bar {
        stroke: #dde9f6;
      }
    }

    //.progress

  }

  //.progressdiv
</style>