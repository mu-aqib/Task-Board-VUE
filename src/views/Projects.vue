<template>
  <v-container>
    <div class="px-7">
      <h2 class="text-h5 font-weight-medium grey--text text--darken-3 mb-3">Projects List</h2>
      <v-card outlined class="py-5 px-9 rounded-lg">
        <v-simple-table>

          <thead>
            <tr>
              <th> S.No </th>
              <th> Project </th>
              <th> Due Date </th>
              <th> Status </th>
              <th> Priority </th>
              <th class="text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in Projects" :key="item.id">
              <td>{{ index }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.due_date }}</td>
              <td>
                <v-badge class="p-4" :color="status(index)" inline :content="item.status"> </v-badge>
              </td>
              <td>
                <!-- {{ item.priority }} -->
                <v-badge class="p-4" :color="priority(index)" inline :content="item.priority"> </v-badge>
              </td>
              <td>
                <!-- view btn -->
                <v-btn :to="`projects/${item.id}`" class="mr-1" fab dark x-small color="primary">
                  <font-awesome-icon icon="fa-solid fa-eye" />
                </v-btn>
                <!-- edit btn -->
                <v-btn :to="`projects/${item.id}/edit`" class="mr-1" fab dark x-small color="primary">
                  <font-awesome-icon icon="fa-solid fa-user-pen" />
                </v-btn>
                <!-- delete btn -->
                <v-btn @click="modalFunc()" class="mr-1 dense" x-small fab dark color="red">
                  <font-awesome-icon icon="fa-solid fa-trash" />
                </v-btn>

              </td>
            </tr>
          </tbody>

        </v-simple-table>

        <router-view />
      </v-card>


    </div>

    <!-- callingdialogues -->
    <!-- <Teleport to="body"> -->
    <vue-dialog :active="showModal" @close="showModal = false">
 
      <template #description>
        Are you sure you want to delete ?
      </template>
        
    </vue-dialog>
    <!-- </Teleport> -->

  </v-container>


</template>


<script>
  export default {

    data() {
      return {
        Projects: [{
            id: 1,
            title: 'Frozen Yogurt',
            due_date: '14 Aug 2022',
            status: 'ongoing',
            priority: 'medium'
          },
          {
            id: 2,
            title: 'Frozen Yogurt',
            due_date: '14 Aug 2022',
            status: 'finished',
            priority: 'low'
          },
          {
            id: 3,
            title: 'Frozen Yogurt',
            due_date: '14 Aug 2022',
            status: 'onhold',
            priority: 'high'
          },
        ],
        showModal: false,
        modal: '',

        activeDatepicker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
      }
    },

    computed: {
      priority() {
        let priority = '';
        return (i) => {
          priority = this.Projects[i].priority;
          return priority != 'high' ? (priority === "medium" ? 'warning' : 'primary') : 'error';
        }
      },

      status() {
        let status = '';
        return (i) => {
          status = this.Projects[i].status;
          return status != 'finished' ? (status === "ongoing" ? 'info' : 'error') : 'success';
        }
      },
    },

    methods: {

      modalFunc(){
        this.showModal = true;
      }

    }

  }
</script>