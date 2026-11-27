<script setup>
import { ref, computed } from 'vue'

const encendida = ref(false)

const estadoTexto = computed(() => (encendida.value ? 'Encendida' : 'Apagada'))

const cambiarEstado = () => {
  encendida.value = !encendida.value
}
</script>

<template>
  <div>
    <p>Estado: {{ estadoTexto }}</p>
    <button @click="cambiarEstado">Cambiar estado</button>
  </div>
</template>

