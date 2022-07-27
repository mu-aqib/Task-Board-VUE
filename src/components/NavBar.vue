<template>
    <!-- <div> -->
        <v-app-bar color="transparent" elevation="0" app>
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

            <v-toolbar-title>Page title</v-toolbar-title>


        </v-app-bar>
        

    <!-- </div> -->
</template>

<script>
    export default {
        name: 'NavBar',

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
        }
    }
</script>