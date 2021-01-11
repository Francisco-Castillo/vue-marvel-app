
//var md5Hash = CryptoJS.MD5("16397462bdba28ff3087370a3da60a2b070d0b4add2271de8bc56ebbf6bfb01c495358808");
import CharacterService from "@/services/characters"

import { createHelpers } from "vuex-map-fields";
const { getCharacterField, updateCharacterField } = createHelpers({
    getterType: "getCharacterField",
    mutationType: "updateCharacterField"
});

export default{
  namespaced:true,
  state:{
    filtro:{
      nameStartsWith:''
    },
    tabla:{
      items:[],
      totalRows: 0,
      currentPage: 1,
      perPage: 20,
      pageOptions: [20,30,50,100],
    }
  },
  mutations:{
    updateCharacterField,

    setTableItems(state,data){
      state.tabla.items=data.results;
      state.tabla.totalRows=data.total;
    }
  },actions:{
    getLista(ctx){
      let promise = CharacterService.getCharacters({
        offset: (ctx.state.tabla.currentPage - 1) * ctx.state.tabla.perPage,
        limit: ctx.state.tabla.perPage,
        nameStartsWith: ctx.state.filtro.nameStartsWith ? ctx.state.filtro.nameStartsWith : null
      });
      return promise.then(r=>{
        console.log("Characters ",r.data.data)
        ctx.commit("setTableItems",r.data.data)
        return r.data.data.results;
      }).catch(e=>{
        console.log("Error ",e)
      })
    }
  },getters:{
    getCharacterField,
    getItems(state){
      return state.tabla.items;
    }
  }
}
