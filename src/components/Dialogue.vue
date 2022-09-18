<template>
    <!-- <div class="text-center"> -->
    <v-dialog :value="active" width="600" persistent>
        <v-card>

            <v-card-title primary-title>
                <slot name="title"></slot>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="py-10">
                <slot name="description">
                    
                </slot>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="$emit('close')" color="error">
                    yes
                </v-btn>
            </v-card-actions>

        </v-card>
    </v-dialog>
    <!-- </div> -->
</template>

<script>
    export default {
        props: ['active'],
    }
</script>