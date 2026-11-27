<script setup>
    import {ref} from 'vue'
    const nuevoTexto = ref('');
    
</script>

<template>
    <section>
        <input type="text" placeholder="Escribe algo" v-model="nuevoTexto">

        <p>Has escrito: {{ nuevoTexto }}</p>
    </section>
</template>