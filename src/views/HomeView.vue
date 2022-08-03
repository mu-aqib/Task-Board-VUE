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

          <div v-if="data.icon" class="progressdiv ml-auto" data-percent="70">
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
            icon: 'progressbar'
          },
          {
            title: 'Total Tasks',
            value: 35,
            icon: 'progressbar'
          },
          {
            title: 'Total Users',
            value: 9
          },
        ]
      }
    },

    // methods: {
    //   loadProgressData(){

    //   }
    // },

    // mounted(){
    //   this.loadProgressData()
    // }

    created: {
      loadProgressData(){
        
      }
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
      overflow: hidden;
      transform: rotate(-90deg) rotateX(180deg);

      circle {
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 1s ease;
        stroke: #a02e2e;
        stroke-width: 5px;
      } // circle

      .bar {
        stroke: grey;
      } 
    } //.progress

  } //.progressdiv
</style>