<template>
    <v-container>
        <div class="px-7">
            <v-row>
                <v-col cols="4" v-for="data in project_overview" :key="data.title">
                    <v-sheet class="d-flex custom-elevation pa-4" style="height:100%" rounded>

                        <div class="grey--text text--darken-3">
                            <span class="text-subtitle-1"> {{data.title}} </span>
                            <h3> {{data.tasks.completed}} / {{data.tasks.total}} </h3>

                        </div>

                        <div v-if="data.icon" class="progressdiv ml-auto" :data-percent="data.progress">
                            <svg-icon :name="data.icon"></svg-icon>
                            <p> {{data.progress}}% </p>
                        </div>

                    </v-sheet>
                </v-col>

                <v-col cols="4">

                    <v-sheet rounded class="pa-4 custom-elevation" color="white">

                        <h2 class="text-subtitle-1 grey--text text--darken-3 d-flex align-center">
                            <span>Members</span>

                            <v-spacer></v-spacer>

                            <v-btn @click="showModal = true" class="mr-1" fab dark x-small color="primary">
                                <font-awesome-icon icon="fa-solid fa-add" />
                            </v-btn>
                        </h2>

                        <v-divider class="my-5"></v-divider>

                        <div class="d-flex mb-5" v-for="(user, i) in users" :key="i">

                            <v-avatar size="40" color="primary white--text" class="mr-4">
                                {{user.img}}
                            </v-avatar>

                            <p class="grey--text text--darken-3 text-subtitle-2 mb-0">
                                <span class="d-block"> {{user.username}} </span>
                                {{user.email}}
                            </p>

                        </div>

                    </v-sheet>

                </v-col>

                <v-col cols="8">
                    <v-sheet class="custom-elevation pa-5 h-100 d-flex flex-column">
                        <h3 class="grey--text text--darken-3">Project overview</h3>

                        <v-divider class="my-3"></v-divider>
                        
                        <p class="mb-3 grey--text text--darken-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Eius dolore libero consequatur distinctio eligendi quam consectetur itaque officiis 
                            nesciunt obcaecati, eveniet fugiat vel, similique aliquam excepturi aperiam eum autem fuga.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Eius dolore libero consequatur distinctio eligendi quam consectetur itaque officiis 
                            nesciunt obcaecati, eveniet fugiat vel, similique aliquam excepturi.
                        </p>
                        
                        <v-divider class="mb-3 mt-auto"></v-divider>

                        <div class="d-flex justify-space-between">
                            <p>
                                <span class="grey--text text--darken-2 d-block text-caption">Start date:</span>
                                21 Sep 2022
                            </p>
                            <p>
                                <span class="grey--text text--darken-2 d-block text-caption">End date:</span>
                                30 Sep 2022
                            </p>
                        </div>
                        
                    </v-sheet>
                </v-col>


                <v-col cols="7">
                    <v-sheet class="custom-elevation pa-5 h-100 d-flex flex-column">
                        <h4 class="grey--text text--darken-3 d-flex align-center">
                            <span>Milestones (0)</span>

                            <v-spacer></v-spacer>

                            <v-btn @click="showModal = true" class="mr-1" fab dark x-small color="green">
                                <font-awesome-icon icon="fa-solid fa-add" />
                            </v-btn>
                        </h4>

                        <v-divider class="my-3"></v-divider>

                        <div>
                            <h6 class="text-caption grey--text text--darken-3">Release of Product Samples
                                <v-badge dot left color="warning" inline class="mr-1"> onhold </v-badge>0 Tasks
                            </h6>
                        </div>
                        
                    </v-sheet>
                </v-col>

                <v-col >
                    <v-sheet class="custom-elevation pa-5 h-100 d-flex flex-column">
                        <h3 class="grey--text text--darken-3">Project Tasks </h3>
                    </v-sheet>
                </v-col>


            </v-row>
        </div>

        <vue-dialog :active="showModal" @close="showModal = false">
            <template #title>
                Invite Member
            </template>
            <template #description>
                <div class="text-right">
                    <div class="search-bar custom-elevation pa-0 mb-4" style="width:100%" >
                        <input type="text" placeholder="enter email" 
                            class="pa-3 px-5 d-block" style="width:100%" 
                        />
                    </div>

                    <v-btn class="mr-1" dark color="green">
                        invite
                    </v-btn>
                </div>

                <v-divider class="my-3"></v-divider>

                <p class="text-center"> Invite user from contact list </p>

                <v-row>
                    <v-col cols="4">
                        <v-sheet class="text-center custom-elevation pa-5">
                            <div class="profile mb-3">
                                <v-avatar color="primary white--text">
                                    <v-img src="https://demo.rajodiya.com/taskgo-saas/storage/avatars/7_avatar1595047124.jpg">

                                    </v-img>
                                </v-avatar>
                            </div>

                            <!-- <div class="description"> -->
                                <h5 class="grey--text text--darken-3 text-subtitle-2 mb-3">
                                    Owner
                                </h5>

                                <v-btn class="mr-1" dark x-small color="secondary">
                                    invite
                                </v-btn>
                            <!-- </div> -->
                        </v-sheet>
                    </v-col>
                    <v-col cols="4">
                        <v-sheet class="text-center custom-elevation pa-5">
                            <div class="profile mb-3">
                                <v-avatar color="primary white--text">
                                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg">

                                    </v-img>
                                </v-avatar>
                            </div>

                            <!-- <div class="description"> -->
                                <h5 class="grey--text text--darken-3 text-subtitle-2 mb-3">
                                    Owner
                                </h5>

                                <v-btn class="mr-1" dark x-small color="secondary">
                                    invite
                                </v-btn>
                            <!-- </div> -->
                        </v-sheet>
                    </v-col>
                    <v-col cols="4">
                        <v-sheet class="text-center custom-elevation pa-5">
                            <div class="profile mb-3">
                                <v-avatar color="primary white--text">
                                    <v-img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">

                                    </v-img>
                                </v-avatar>
                            </div>

                            <!-- <div class="description"> -->
                                <h5 class="grey--text text--darken-3 text-subtitle-2 mb-3">
                                    Johny Depp
                                </h5>

                                <v-btn class="mr-1" dark x-small color="secondary">
                                    invite
                                </v-btn>
                            <!-- </div> -->
                        </v-sheet>
                    </v-col>
                </v-row>
            </template>
        </vue-dialog>
    </v-container>

</template>


<script>
    export default {
        data() {
            return {
                showModal: false,

                project_overview: [{
                        title: 'Task Done',
                        tasks: {
                            total: 17,
                            completed: 5
                        },
                        icon: 'progressbar',
                        progress: 40
                    },
                    {
                        title: 'Expenses',
                        tasks: {
                            total: '2000$',
                            completed: `1000$`
                        },
                        icon: 'progressbar',
                        progress: 50
                    },
                    {
                        title: 'Left Days',
                        tasks: {
                            total: 25,
                            completed: 15
                        },
                        icon: 'progressbar',
                        progress: 35
                    },
                ],

                users: [{
                        img: 'O',
                        username: 'Owner',
                        email: 'owner@example.com'
                    },
                    {
                        img: 'MA',
                        username: 'Muhammad Aqib',
                        email: 'm_aqib@example.com'
                    },
                    {
                        img: 'OA',
                        username: 'Omer Ahmed',
                        email: 'ahmed@example.com'
                    },
                ],
            }
        },

        methods: {
            loadProgressData() {
                const circles = document.querySelectorAll(".progress");

                let strokeArray = 2 * 35 * Math.PI; // strokeArray = 2 * radius * PI 
                circles.forEach(c => {
                    let childes = c.children;
                    // add Dynamic Stroke DashArray...
                    for (let i = 0; i < childes.length; i++) {
                        childes[i].style.strokeDasharray = strokeArray
                    }
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
    }
</script>