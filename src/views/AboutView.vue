<template>
  
  <v-container>
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
          <tr
            v-for="item in Projects"
            :key="item.id"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.due_date }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.priority }}</td>
            <td> 
              <font-awesome-icon icon="fa-solid fa-user-pen" />
              <font-awesome-icon icon="fa-solid fa-eye" />
              <font-awesome-icon icon="fa-solid fa-circle-trash" />
            </td>
          </tr>
        </tbody>
     
      </v-simple-table>
    </v-card>
  </v-container>

</template>


<script>  
  export default { 
    data () {
      return {
        Projects: [
          {
            id: 1,
            title: 'Frozen Yogurt',
            due_date: '14 Aug 2022',
            status: 'pending',
            priority: 'medium'
          },
          {
            id: 2,
            title: 'Frozen Yogurt',
            due_date: '14 Aug 2022',
            status: 'pending',
            priority: 'medium'
          },
          {
            id: 3,
            title: 'Frozen Yogurt',
            due_date: '14 Aug 2022',
            status: 'pending',
            priority: 'medium'
          },
        ],
      }
    },
  }
</script>