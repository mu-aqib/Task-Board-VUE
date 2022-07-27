<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].bodybg}">

    <nav-bar></nav-bar>

    <v-navigation-drawer app>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Dashboard
          </v-list-item-title>
          <!-- svg icon -->
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="darken-3 white--text">
      <!-- <router-view /> -->
      this was main bar
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  export default {
    name: "App",

    data: () => {
      return {
        items: [{
            title: 'Dashboard',
            icon: 'mdi-view-dashboard'
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
      theme() { return this.$vuetify.theme.dark ? 'dark' : 'light' }
    },

    components: {
      NavBar,
    }

  };
</script>