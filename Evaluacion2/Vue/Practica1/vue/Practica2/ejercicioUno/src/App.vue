<script setup>
import EjercicioUno from './components/EjercicioUno.vue';
import EjercicioDos from './components/EjercicioDos.vue';
import EjercicioTres from './components/EjercicioTres.vue';
import EJercicioCuatro from './components/EJercicioCuatro.vue';
import EjercicioCinco from './components/EjercicioCinco.vue';
</script>

<template>

  <div>
      <EjercicioUno/>
  </div>
  <br>
  <div>
      <EjercicioDos/>
  </div>
  <br>
  <div>
      <EjercicioTres/>
  </div>
  <br>
  <div>
      <EJercicioCuatro/>
  </div>
  <br>
  <div>
      <EjercicioCinco/>
  </div>
  <br>
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
