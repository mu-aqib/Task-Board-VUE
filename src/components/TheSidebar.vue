<template>
    <v-navigation-drawer width="302" app color="transparent" id="sidebar">

        <router-link to="#" :style="'height: 88px'"
            class="d-flex justify-space-between align-center px-8 text-decoration-none">

            <span class="text-h6" style="color: '#1F2633'"> Dashboard </span>

            <!-- <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                id="humberger_icon">
                <path
                    d="M1.20386 12H12.2039C12.7539 12 13.2039 11.55 13.2039 11C13.2039 10.45 12.7539 10 12.2039 10H1.20386C0.653857 10 0.203857 10.45 0.203857 11C0.203857 11.55 0.653857 12 1.20386 12ZM1.20386 7H9.20386C9.75386 7 10.2039 6.55 10.2039 6C10.2039 5.45 9.75386 5 9.20386 5H1.20386C0.653857 5 0.203857 5.45 0.203857 6C0.203857 6.55 0.653857 7 1.20386 7ZM0.203857 1C0.203857 1.55 0.653857 2 1.20386 2H12.2039C12.7539 2 13.2039 1.55 13.2039 1C13.2039 0.45 12.7539 0 12.2039 0H1.20386C0.653857 0 0.203857 0.45 0.203857 1ZM17.5039 8.88L14.6239 6L17.5039 3.12C17.8939 2.73 17.8939 2.1 17.5039 1.71C17.1139 1.32 16.4839 1.32 16.0939 1.71L12.5039 5.3C12.1139 5.69 12.1139 6.32 12.5039 6.71L16.0939 10.3C16.4839 10.69 17.1139 10.69 17.5039 10.3C17.8839 9.91 17.8939 9.27 17.5039 8.88Z"
                    fill="#B8BFCC" />
            </svg> -->

            <svg-icon name="humbergegrICon"></svg-icon>

        </router-link>
        <v-divider></v-divider>

        <div class="px-8">

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
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
        background-color: transparent;
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
                        icon: 'projects'
                    },
                    {
                        title: 'Tasks',
                        icon: 'Tasks'
                    },
                    {
                        title: 'Inbox',
                        icon: 'inbox',
                        badgeData: 4
                    },
                    {
                        title: 'Photos',
                        icon: 'taskBorad'
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
    }
</script>