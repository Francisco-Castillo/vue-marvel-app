<template>
  <div class="bg-black">
    <b-jumbotron header="Personajes" bg-variant="dark" text-variant="white"/>
    <b-container>
      <b-row>
        <b-col lg="6">
          <FiltroCharacter/>
        </b-col>
      </b-row>
    </b-container>
    <ListadoCharacter/>
  </div>

</template>

<script>
import ListadoCharacter from "@/components/listados/ListadoCharacters.vue"
import FiltroCharacter from "@/components/filtros/FiltroCharacters.vue"
export default{
  name:"Character",
  components:{
    ListadoCharacter,
    FiltroCharacter
  }
}
</script>
<style lang="css" scoped>
.bg-black{
    background-image: linear-gradient(black ,grey);
}
</style>
