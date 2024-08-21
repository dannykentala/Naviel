<template>
    <div class="container-movies d-middle p-100">
       <CardMovie 
            v-for="movie in store.listMovies"
            v-if="store.listMovies"
            :id="movie.imdbID"
            :poster="movie.Poster"
            :title="movie.Title"
            :year="movie.Year"
            :type="movie.Type"
       />
       <div class="d-middle w-100" v-else>
            <p>No hay resultados en la busqueda</p>
       </div>

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CardMovie from "@/Presentation/Views/Components/Movies/CardMovie.vue"
import moviesController from '@/Presentation/Controllers/Movies/moviesController';
import { useMoviesStore } from "@/Infrastructure/Stores/movies.store"

const store = useMoviesStore()

onMounted(() => {
    moviesController.GetMovies()
})


async function  fetchMovies() {
    // await moviesController.GetMovies()
}

</script>

<style scoped lang="scss">
.container-movies {
    flex-wrap: wrap;
    gap: 20px
}

p{
    color: $white;
}
</style>    