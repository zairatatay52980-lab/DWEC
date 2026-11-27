<script setup>
import { reactive, computed } from 'vue'

const producto = reactive({
  nombre: 'Teclado',
  precio: 40,
  cantidad: 1
})

const subtotal = computed(() => producto.precio * producto.cantidad)

const envioGratis = computed(() => (subtotal.value >= 100 ? 'Sí' : 'No'))

const anadirUnidad = () => {
  producto.cantidad++
}
</script>

<template>
  <div>
    <p>{{ producto.nombre }} x{{ producto.cantidad }}</p>
    <p>Subtotal: {{ subtotal }} €</p>
    <p>Envío gratis: {{ envioGratis }}</p>
    <button @click="anadirUnidad">Añadir unidad</button>
  </div>
</template>