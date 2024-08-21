<template>
  <div class="info__item">
    <p>{{ props.title }}</p>
    <p>{{ props.value }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
interface IProps {
    title: string;
    value: string;
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
.info__item
{
    display: flex;
}

.info__item > *
{
    min-width: 100px;
}

.info__item > p
{
  color: $white;
}
</style>