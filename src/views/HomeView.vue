<template>
  <!-- p-9 -->
  <v-container class="border pa-9">
    <h1 class="text-h4 font-weight-bold mb-3">Task Board</h1>

    <v-row>
      <v-col cols="4" v-for="data in dashboardOverview" :key="data.title">
        <v-sheet color="white d-flex" class="pa-4" elevation="2" rounded>
          <h5 class="text-h6 grey--text text--darken-3">
            {{data.title}}
            <p class="mb-0 pl-3">{{data.value}}</p>
          </h5>

          <div v-if="data.icon" class="progressdiv ml-auto" :data-percent="data.progress">
            <svg-icon :name="data.icon"></svg-icon>
          </div>
        </v-sheet>
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
        let strokeArray = 2 * 35 * Math.PI;  // strokeArray = 2 * radius * PI 
        circles.forEach(c => {
          let childes = c.children;
          // add Dynamic Stroke DashArray...
          for(let i=0; i<childes.length; i++) childes[i].style.strokeDasharray = strokeArray
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
  .border {
    border: 1px solid dodgerblue;
  }

  .progressdiv {
    position: relative;

    &:after {
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
      margin: 0 auto;
      overflow: hidden;
      transform: rotate(-90deg) rotateX(180deg);

      circle {
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 1s ease;
        stroke: #3B82F6;
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