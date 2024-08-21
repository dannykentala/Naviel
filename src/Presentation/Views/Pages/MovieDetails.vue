<template>
    <router-link :to="{ name: 'home'}">
        <button class="button-9" role="button">Volver al inicio</button>
    </router-link> 

    <h1>DETALLES DE LA PELICULA ID {{ movieId }}</h1>
    <div class="movie-info__container">
        <div class="image__container">
            <img :src="store.movie.Poster" :alt="store.movie.Title">
        </div>
        <div class="info__container">
            <div class="info__section">
                <h2 class="info__item__title">{{  store.movie.Title }}</h2>
            </div>
            <div class="info__section">
                <InfoItem title="Type" :value="store.movie.Type"/>
                <InfoItem title="Genre" :value="store.movie.Genre"/>
                <InfoItem title="Released" :value="store.movie.Released"/>
                <InfoItem title="Duration" :value="store.movie.Runtime"/>
                <InfoItem title="Director" :value="store.movie.Director"/>
                <InfoItem title="Actors" :value="store.movie.Actors"/>
                <InfoItem title="Language" :value="store.movie.Language"/>
                <InfoItem title="Country" :value="store.movie.Country"/>
                <InfoItem title="Rating" :value="store.movie.imdbRating"/>
                <InfoItem title="Votes" :value="store.movie.imdbVotes"/>
            </div>
            <div class="info__section">
                <div class="info__sipnosis__container">
                    <p class="sipnosis__header">Sipnosis</p>
                    <p>{{  store.movie.Plot }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { useMoviesStore } from '@/Infrastructure/Stores/movies.store';
import moviesController from '@/Presentation/Controllers/Movies/moviesController';
import { onMounted, type Ref } from 'vue';
import { useRoute } from 'vue-router'
import InfoItem from '../Components/Utils/InfoItem.vue';

const store = useMoviesStore()

const route = useRoute()
const movieId = route.params.id as string


onMounted(() => {
    // moviesController.GetById(movieId)
    fetchMovie()
})

async function fetchMovie()
{
    await moviesController.GetById(movieId)
}

</script>

<style lang="scss" scoped>
h1 {
    color: $white;
    text-align: center;
    margin-top: 50px;
}

h2
{
    color: $white;
}

p
{
    color: $white;
}

//-----
.movie-info__container
{
    display: flex;

    margin: 0px 5vw;
}

.movie-info__container > div
{
    margin: 20px;
}

.info__item__title
{
    text-align: center;
}

.sipnosis__header
{
    font-weight: bold;
}

.info__section
{
    margin-bottom: 15px;
}

//Buton

/* CSS */
.button-9 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 20%;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}
</style>