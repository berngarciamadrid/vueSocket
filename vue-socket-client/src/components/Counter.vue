<template>
<div class="counter">
  <div class="col-md-8 offset-md-2 card">
    <div class="card-block">
      <h3 class="text-center">VueJS2, Vuex y Socket.io (Contador)</h3>
      <hr>
      <button class="btn btn-block btn-info" @click="increment">
        Incrementar
      </button>
      <h4 class="text-center">{{ count }}</h4>
      <button class="btn btn-block btn-info" @click="decrement">
        Decrementar
      </button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name:'counter',
  methods: {
    increment() {
      // Acción a ejecutar
      this.$store.dispatch('socket_increment');

    },
    decrement() {
      // Acción a ejecutar
      this.$store.dispatch('socket_decrement');

    }
  },
  computed: {
    // Propiedad computada
    count() {
      return this.$store.state.counterModule.count;
    }
  }

}

</script>
