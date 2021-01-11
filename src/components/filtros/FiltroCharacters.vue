<template>
  <div>
     <b-form inline>
      <b-form-input v-model="filtro.nameStartsWith" placeholder="Nombre de personaje"></b-form-input>
      <b-button variant="danger" @click="getLista">Buscar</b-button>
     </b-form>
  </div>

</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { createHelpers } from "vuex-map-fields";

const { mapFields } = createHelpers({
  getterType: "CharacterModule/getCharacterField",
  mutationType: "CharacterModule/updateCharacterField"
});
export default {
  computed: {
    ...mapGetters("CharacterModule",["getItems"]),
    ...mapFields({
      filtro: "filtro",
    })
  },
  methods:{
    ...mapActions("CharacterModule",["getLista"])
  }
}
</script>

<style lang="css" scoped>
</style>
