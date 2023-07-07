<template>
  <pre>{{ meals }}</pre>
  <Meals :meals="meals"/>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import Meals from "../components/Meals.vue"
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store"

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
  store.dispatch('searchMealsByIngredients',route.params.ingredient)
})

</script>