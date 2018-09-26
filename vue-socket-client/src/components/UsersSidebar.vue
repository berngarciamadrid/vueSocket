<template>
<div class="users-sidebar">
  <div class="card">
    <ul v-if="users">
      <li>Usuarios conectados</li>
      <li v-for="user in users" :key="user"><hr>
        <b v-if="user === username"> {{ user }}</b>
        <span v-else> {{ user }}</span>
      </li>
    </ul>
    <p v-else> Ningún usuario conectado</p>
  </div>

</div>

</template>

<script>
  import {mapGetters} from 'vuex';

   export default {
     name:'users-sidebar',
     data() {
       return {
         user:''
       }
     },
     computed: {
      ...mapGetters(['users', 'username'])
      // El operador spread
    }
   }
</script>

<style scoped>
/* scoped y así solo es de este componente */
  li {
    list-style: none;
    text-align: left;
  }
  .card {
    padding: 20px !important;
  }
</style>
