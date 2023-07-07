<template>
    <div  class="bg-white shadow rounded-xl">
     <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
      <img :src="meal.strMealThumb" alt="strMeal" class="rounded-t-xl">
     </router-link>
     <div class="p-3">
        <h3 class="px-3 py-2 font-bold">{{ meal.strMeal }}</h3>

        <p class="ms-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi fugit deserunt sint provident nisi, ipsa maxime quasi tempora delectus eos dolorem voluptate temporibus libero. Odit dignissimos voluptas mollitia blanditiis quasi.
          </p>        
          <br>
        <div>
          <a :href="meal.strYoutube" class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-500 transitio-colors" target="_blank">YouTube</a>
        
        </div>
     </div>
    </div>
</template>

<script setup>
  const {meal} = defineProps({
    meal: {
      required : true,
      type: Object
    }
  })
</script>