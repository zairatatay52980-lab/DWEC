<script setup>
import { reactive, computed } from 'vue'

const jugador = reactive({
  nombre: 'Pepe',
  puntos: 10,
  nivel: 1
})

const resumen = computed(() => {
  return `${jugador.nombre} — Nivel ${jugador.nivel} (${jugador.puntos} pts)`
})

const sumarPuntos = () => {
  jugador.puntos += 15
}
</script>

<template>
  <div>
    <p>{{ resumen }}</p>
    <button @click="sumarPuntos">+15 puntos</button>
  </div>
</template>