<template>
<div>
  <b-jumbotron header="Comics" bg-variant="dark" text-variant="white"/>
  <ListadoComics/>
</div>
</template>

<script>
import ListadoComics from "@/components/listados/ListadoComics.vue"
export default {
  components:{
    ListadoComics
  }
}
</script>

<style lang="css" scoped>
</style>
