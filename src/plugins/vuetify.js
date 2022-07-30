import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                bodybg: '#F7F8FA',
                anchor: '#1F2633',
                grey: '#B8BFCC'
            },
        },
    },
});