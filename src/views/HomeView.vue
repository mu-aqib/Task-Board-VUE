<template>
  <div class="py-3">
    <v-btn elevation="1" class="pink white--text">click me</v-btn>
    <v-btn elevation="1" color="mx-3 blue accient-4">click me</v-btn>
    <!-- icons -->
    <v-btn color="teal" class="mx-3" fab dark>
      <v-icon>
        mdi-format-list-bulleted-square
      </v-icon>
    </v-btn>
    <v-btn color="teal" outlined fab>
      <v-icon>mdi-format-list-bulleted-square</v-icon>
    </v-btn>

    <v-card class="mt-3" flat>
      <v-card-text>
        <v-row>
          <v-col>
            <v-btn color="green" icon>
              <v-icon>mdi-cached</v-icon>
            </v-btn>
          </v-col>

          <v-col>
            <v-btn class="success" tile>
              <v-icon left>
                mdi-pencil
              </v-icon>
              Edit
            </v-btn>

            <v-btn color="purple darken-5" text @click="dialog = false">
              I accept
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>


    <div class="mt-5">
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
              Click Me
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "HomeView",

    data: ()=>{
      return{
        dialog: false
      }
    }
  };
</script>