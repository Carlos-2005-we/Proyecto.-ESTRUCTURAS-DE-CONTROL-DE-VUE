<template>
  <div>
    <h2>v-for</h2>
    <p>
      <strong>Descripción:</strong> Recorre un arreglo o número para generar listas dinámicas.
    </p>

    <ul>
      <li v-for="(fruta, index) in frutas" :key="index">
        🍎 {{ index + 1 }} - {{ fruta }}
      </li>
    </ul>

    <input v-model="nuevaFruta" placeholder="Agrega una fruta" />
    <button @click="agregarFruta">Agregar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const frutas = ref(['Manzana', 'Pera', 'Plátano'])
const nuevaFruta = ref('')

function agregarFruta() {
  if (nuevaFruta.value.trim()) {
    frutas.value.push(nuevaFruta.value)
    nuevaFruta.value = ''
  }
}
</script>
