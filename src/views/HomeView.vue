<template>
  <!-- p-9 -->
  <v-container class="border pa-9">
    <h1 class="text-h4 font-weight-bold mb-3">Task Board</h1>

    <v-row>
      <v-col cols="3">
        <v-sheet color="white" class="pa-4" elevation="2" rounded>
          <h5 class="text-subtitle-1">Total Projects</h5>
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
        dialog: false
      }
    }
  };
</script>

<style lang="scss">
  .border {
    border: 1px solid dodgerblue;
  }
</style>