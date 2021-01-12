
//var md5Hash = CryptoJS.MD5("16397462bdba28ff3087370a3da60a2b070d0b4add2271de8bc56ebbf6bfb01c495358808");
import ComicService from "@/services/comics"

import { createHelpers } from "vuex-map-fields";
const { getComicField, updateComicField } = createHelpers({
    getterType: "getComicField",
    mutationType: "updateComicField"
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
      perPage: 100,
      pageOptions: [20,30,50,100],
    }
  },
  mutations:{
    updateComicField,

    setTableItems(state,data){
      state.tabla.items=data.results;
      state.tabla.totalRows=data.total;
    }
  },actions:{
    getLista(ctx){
      let promise = ComicService.getComics({
        offset: (ctx.state.tabla.currentPage - 1) * ctx.state.tabla.perPage,
        limit: ctx.state.tabla.perPage,

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
    getComicField,
    getItems(state){
      return state.tabla.items;
    }
  }
}
