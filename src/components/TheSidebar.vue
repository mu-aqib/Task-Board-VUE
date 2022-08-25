<template>

    <v-navigation-drawer width="302" app color="transparent" id="sidebar">

        <router-link to="#" :style="'height: 88px'"
            class="d-flex justify-space-between align-center px-8 text-decoration-none">

            <span class="text-h6" style="color: '#1F2633'"> Dashboard </span>

            <svg-icon name="humbergegrICon"></svg-icon>

        </router-link>
        <v-divider></v-divider>

        <div class="px-8">

            <!-- user Profile details -->
            <div class="d-flex align-center py-8 ">

                <div class="avator-icon mr-6">
                    <v-avatar min-width="40" width="40" height="39">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="avator userIcon">
                    </v-avatar>
                </div>

                <div class="mr-auto">
                    <h6 class="caption font-weight-bold">Nancy Martino</h6>
                    <p class="grey--text mb-0 caption">Designer</p>
                </div>

                <svg-icon name="doubleArrow"></svg-icon>

            </div>
            <v-divider class="mb-9"></v-divider>

            <v-list>
                <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
                        <v-list-item-icon>
                            <svg-icon :name="item.icon"></svg-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title}} </v-list-item-title>
                        </v-list-item-content>

                        <v-badge v-if="item.badgeData" :content="item.badgeData" color="blue lighten-3" overlap>
                        </v-badge>
                    </v-list-item>
                </v-list-item-group>

            </v-list>

        </div>
    </v-navigation-drawer>
</template>

<style>
    #sidebar .v-navigation-drawer__border {
        /* background-color: transparent; */
    }
</style>

<script>
    export default {
        data: () => {
            return {
                selectedItem: 0,
                items: [{
                        title: 'Dashboard',
                        icon: 'CRM-Dashboard',
                        // badgeData: 2,
                        route: '/'
                    },
                    {
                        title: 'Projects',
                        icon: 'projects',
                        route: '/project'
                    },
                    {
                        title: 'Tasks',
                        icon: 'Tasks',
                        route: '/tasks'
                    },
                    {
                        title: 'Inbox',
                        icon: 'inbox',
                        route: '/inbox',
                        badgeData: 4
                    },
                    {
                        title: 'Photos',
                        icon: 'taskBorad',
                        route: '/taskBorad'
                    },
                    {
                        title: 'Analytics',
                        icon: 'Analytics',
                        badgeData: 2
                    },
                    {
                        title: 'Setting',
                        icon: 'Setting',
                        badgeData: 2
                    },
                ],
            }
        },
        computed: {
            
        }
    }
</script>