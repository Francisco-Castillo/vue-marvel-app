<template >
<div>
  <b-container class="p-4" >
  <b-row v-if="getItems">
    <b-col v-for="item in getItems" v-bind:key="item.id" lg="3">
      <b-img thumbnail fluid :src="item.thumbnail.path.concat('.jpg')" alt="Image 1"></b-img>
      <h3 class="color-blanco p-2">{{item.name}}</h3>
    </b-col>
  </b-row>
</b-container>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { createHelpers } from "vuex-map-fields";

const { mapFields } = createHelpers({
  getterType: "CharacterModule/getCharacterField",
  mutationType: "CharacterModule/updateCharacterField"
});

export default{
  name:"ListadoCharacter",

  computed: {
    ...mapGetters("CharacterModule",["getItems"]),
    ...mapFields({
      lista: "tabla",
    })
  },
  methods: {
    ...mapActions("CharacterModule", ["getLista"]),

    clienteProviderLocal: function() {
      return this.getLista();
    },

  },
  mounted () {
    this.clienteProviderLocal().then(s => {
      console.log(s);
    });

  }
}
</script>

<style scoped>
.color-blanco{
  color:white !important;
}
</style>
