<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-100%]">

    <div class=" grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div class="">
       <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div class="">
        <strong class="font-bold">Area:</strong> {{ meal.strArea }}
      </div>
      <div class="">
        <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
      </div>
    </div>

    <div class="mt-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols.1 sm:grid-cols-2">
      <div class="">
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(el,ind) of new Array(20)">
              <li v-if="meal[`strIngredient${ind+1}`]">
                {{ ind + 1  }}. {{ meal[`strIngredient${ind+1}`] }}</li>   
          </template>
        </ul>
      </div>
      <div class="">
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(el,ind) of new Array(20)">
              <li v-if="meal[`strMeasure${ind+1}`]">
                {{ ind + 1  }}. {{ meal[`strMeasure${ind+1}`] }}</li>   
          </template>
        </ul>
      </div>
      <div class="mt-4">
          <a :href="meal.strYoutube" class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-500 transitio-colors" target="_blank">YouTube</a>
          <a :href="meal.strSource" class="px-3 ms-2 py-2 rounded border-2 border-indigo-600 hover:bg-indigo-500 transitio-colors" target="_blank">View Original Source</a>

        </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';


const route = useRoute()
const meal = ref({})

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
  .then(({data}) => {
    meal.value = data.meals[0] || {}
  })
})
</script>