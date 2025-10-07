<template>
  <div>
    <h2>v-bind:key</h2>
    <p>
      <strong>Función del v-blind:key:</strong> Se usa dentro de <code>v-for</code> para identificar de forma única cada elemento.
    </p>

    <ul>
      <li v-for="item in lista" :key="item.id">
        {{ item.id }} - {{ item.nombre }}
      </li>
    </ul>

    <button @click="mezclarLista">🔄 Cambiar orden</button>

    <p>
      Gracias a <code>:key</code>, Vue sabe qué elementos se movieron en lugar de recrearlos.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const lista = ref([
  { id: 1, nombre: 'Elemento A' },
  { id: 2, nombre: 'Elemento B' },
  { id: 3, nombre: 'Elemento C' },
])

function mezclarLista() {
  lista.value.sort(() => Math.random() - 0.5)
}
</script>