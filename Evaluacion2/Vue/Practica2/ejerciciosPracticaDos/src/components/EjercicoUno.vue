<script setup>
    import {ref} from 'vue'

    const contador = ref(0);

const incrementar = () => {
  contador.value++
}
const decrementar = () => {
  contador.value--
}

const restablecer = () => {
  contador.value = 0
}


</script>

<template>
    <div>
        <p>Contador: {{ contador }}</p>
        <p>
            <button @click="incrementar">Incrementar</button>
            <button @click="decrementar">Decrementar</button>
            <button @click="restablecer">Restablecer</button>
        </p>
    </div>

</template>

