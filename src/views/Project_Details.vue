<template>
    <v-container>
        <div class="px-7">
            <v-row>
                <v-col cols="4" v-for="data in project_overview" :key="data.title">
                    <v-sheet color="d-flex custom-elevation" class="pa-4" style="height:100%" rounded>

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
                    <v-sheet rounded class="pa-4" color="white">
                        <div class="d-flex">
                            <v-avatar size="40" color="primary white--text" class="mr-4">
                                VA
                            </v-avatar>

                            <p class="grey--text text--darken-3 text-subtitle-2 mb-0">
                                <span class="d-block"> Owner </span>
                                owner@example.com
                            </p>
                        </div>
                    </v-sheet>
                    <v-sheet rounded class="pa-4" color="white">
                        <div class="d-flex">
                            <v-avatar size="40" color="primary white--text" class="mr-4">
                                VA
                            </v-avatar>

                            <p class="grey--text text--darken-3 text-subtitle-2 mb-0">
                                <span class="d-block"> Owner </span>
                                owner@example.com
                            </p>
                        </div>
                    </v-sheet>
                    <v-sheet rounded class="pa-4" color="white">
                        <div class="d-flex">
                            <v-avatar size="40" color="primary white--text" class="mr-4">
                                VA
                            </v-avatar>

                            <p class="grey--text text--darken-3 text-subtitle-2 mb-0">
                                <span class="d-block"> Owner </span>
                                owner@example.com
                            </p>
                        </div>
                    </v-sheet>
                    <v-sheet rounded class="pa-4" color="white">
                        <div class="d-flex">
                            <v-avatar size="40" color="primary white--text" class="mr-4">
                                VA
                            </v-avatar>

                            <p class="grey--text text--darken-3 text-subtitle-2 mb-0">
                                <span class="d-block"> Owner </span>
                                owner@example.com
                            </p>
                        </div>
                    </v-sheet>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
    export default{
        data(){
            return{
                project_overview: [
                    {
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
                ]
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