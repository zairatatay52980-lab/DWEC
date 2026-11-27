<script setup>
import EjercicoUno from './components/EjercicoUno.vue'
import EjercicioDos from './components/EjercicioDos.vue'
import EjercicioTres from './components/EjercicioTres.vue'
import EjercicioCuatro from './components/EjercicioCuatro.vue'
</script>

<template>

  <div>
    <EjercicoUno />
  </div>
  <br>
  <div>
    <EjercicioDos />
  </div>
  <br>
  <div>
    <EjercicioTres />
  </div>
  <br>
  <div>
    <EjercicioCuatro />
  </div>
</template>





<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
