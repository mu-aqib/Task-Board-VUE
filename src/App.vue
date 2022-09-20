<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].bodybg}">

    <nav-bar></nav-bar>

    <the-sidebar></the-sidebar>

    <v-main class="">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import TheSidebar from '@/components/TheSidebar.vue'
  export default {
    name: "App",

    data: () => {
      return {
        items: [{
            title: 'Inbox',
            icon: 'mdi-view-dashboard',
            badgeData: 4
          },
          {
            title: 'Photos',
            icon: 'mdi-image'
          },
          {
            title: 'About',
            icon: 'mdi-help-box'
          },
        ],
      }
    },

    computed: {
      theme() {
        return this.$vuetify.theme.dark ? 'dark' : 'light'
      }
    },

    components: {
      NavBar,
      TheSidebar
    }

  };
</script>


<style>
  .h-100{
    height: 100%;
  }
  .v-application p {
    margin-bottom: 0;
  }
</style>