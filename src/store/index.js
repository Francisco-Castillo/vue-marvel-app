import Vue from 'vue'
import Vuex from 'vuex'
import CharacterModule from "./CharacterModule.js"
import ComicModule from "./ComicModule.js"
Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        CharacterModule: CharacterModule,
        ComicModule: ComicModule,
    }
});

export default store;
