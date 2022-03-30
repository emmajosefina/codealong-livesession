import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { SINGLE_POKEMON_URL } from "utils/urls"

const Details = () => {

    const [details, setDetails] = useState({})
    const {pokemonName} = useParams()


    useEffect(() => {
    
        fetch(SINGLE_POKEMON_URL(pokemonName)).then(res => res.json()).then(data => setDetails(data))
    }, [])
console.log(details)
    return (
<div>
        <h2>{details.name}</h2>
        {/* <img src={details.sprites.other["official-artwork"].front_default} />

        <img src={details.sprites ?  details.sprites.other["official-artwork"].front_default : ""}/> */}
        <img src={details.sprites ? details.sprites.other["official-artwork"].front_default : ""}/>
        </div>
    )
}

export default Details