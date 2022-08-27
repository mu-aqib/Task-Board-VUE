<template>
    <!-- <div> -->
    <v-container>
        <v-app-bar color="transparent" class="px-5 border border-bottom" elevation="0" app height="88">

        <div class="search-bar d-flex align-center justify-space-between white" color="white">
            <img width="20" src="@/assets/svgIcons/search.svg" />
            <input type="text" placeholder="Search Tasks" class="" />
            <img width="20" src="@/assets/svgIcons/search1.svg" />
        </div>

        <v-spacer></v-spacer>

        <div class="avator-icon">
            <v-badge color="green" width="19" height="20" :content="2" offset-x="12" offset-y="12">
                <v-badge bordered dot bottom color="green accent-3" offset-x="10" offset-y="10">
                    <v-avatar min-width="32" width="32" height="32" class="">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-avatar>
                </v-badge>
            </v-badge>
        </div>

    </v-app-bar>
    </v-container>


    <!-- </div> -->
</template>

<style lang="scss">

    .search-bar {
        width: 305px;
        padding: 10px 17px;
        border: 2px solid #F7F8FA;
        border-radius: 8px;

        input {
            outline: 0;
            border-radius: 4px;
        }
    }

    .avator-icon {
        position: relative;
        border: 3px solid #3B82F6;
        padding: 3px;
        border-radius: 50%;
    }
</style>

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