<template>
  <div>
    <b-container class="p-4">
      <b-row v-if="getItems">
        <b-col lg="12">
          <div v-if="getItems.length > 0">
            <carousel :margin="10" :items="4">
                <b-img v-for="item in getItems" v-bind:key="item.id" thumbnail fluid :src="item.thumbnail.path.concat('.jpg')" alt="Image 1" :title="item.name" />
            </carousel>
          </div>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from "vuex";
import {
  createHelpers
} from "vuex-map-fields";
import carousel from 'vue-owl-carousel2'

const {
  mapFields
} = createHelpers({
  getterType: "CharacterModule/getCharacterField",
  mutationType: "CharacterModule/updateCharacterField"
});

export default {
  name: "ListadoCharacter",
  components: {
    carousel
  },
  computed: {
    ...mapGetters("CharacterModule", ["getItems"]),
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
  created() {
    this.clienteProviderLocal().then(s => {
      console.log(s);
    });

  }
}
</script>

<style scoped>
.color-blanco {
  color: white !important;
}
</style>
