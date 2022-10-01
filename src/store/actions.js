import axios from "axios";
export const getTopAnimes=({commit})=>{
    axios.get('https://api.jikan.moe/v4/top/anime')
    .then((response)=>{
      commit('SET_TOP_ANIMES', response.data.data)
    })
}
export const getRandomAnime=({commit})=>{
  axios.get('https://api.jikan.moe/v4/random/anime')
    .then((response)=>{
      commit('SET_RANDOM_ANIME', response.data.data)
    })
}
export const getAnimeById=({commit}, animeId)=>{
axios.get(`https://api.jikan.moe/v4/anime/${animeId}/full`)
    .then((response)=>{
      commit('SET_ANIME', response.data.data)
    })
}