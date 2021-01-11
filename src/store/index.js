import Vue from 'vue'
import Vuex from 'vuex'
import CharacterModule from "./CharacterModule.js"
Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        CharacterModule: CharacterModule,

    }
});

export default store;
