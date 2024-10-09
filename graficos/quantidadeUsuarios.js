import{ getCSS,tickConfig } from "./common.js"
async function quantidadeUsuariosPorRede() {
    const url ='https://.githubusercontent.com/guilhermeonrails/api/main/'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = await res.json()
    const
}
