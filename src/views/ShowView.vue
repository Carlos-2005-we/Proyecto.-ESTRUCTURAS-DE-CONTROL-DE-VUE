<template>
  <div>
    <h2>v-show</h2>
    <p>
      <strong>Función del v-show:</strong> Controla la visibilidad mediante <code>display: none</code> (el elemento sigue en el DOM).
    </p>

    <button @click="mostrar = !mostrar">
      {{ mostrar ? 'Ocultar texto' : 'Mostrar texto' }}
    </button>

    <p v-show="mostrar" style="background: #e3f7e1; padding: 10px; margin-top: 10px;">
      🌱 Este texto se oculta y muestra, pero no se elimina del DOM.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const mostrar = ref(true)
</script>