<template>
  <div class="p-8 pb-0">
    <input type="text" @change="searchMeals" class="rounded border-2 border-gray-200 w-full" v-model="keyword" placeholder="Search for meals">
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { ref,onMounted } from "vue";
import {computed} from "@vue/reactivity"
import store from "../store";
import { useRoute } from "vue-router";
import Meals from '../components/Meals.vue'

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals)
  function searchMeals(){
    store.dispatch('searchMeals', keyword.value)
  }

  onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value){
      searchMeals()
    } else {
    store.commit("setSearchedMeals", []);
  }
  })
</script>