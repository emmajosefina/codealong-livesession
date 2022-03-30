import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { SINGLE_POKEMON_URL } from "utils/urls"
import styled from 'styled-components'

const GoBackButton = styled.button`
padding: 10px;
color: green;
background-color: red;
font-style: italic;
` 

const Details = () => {

    const [details, setDetails] = useState({})
    const {pokemonName} = useParams()
    const navigate = useNavigate()

    const onBackButtonClick = () => {
        // navigate(-1)
        navigate('/')
    }

// useEffect update, in this case renders pokemonName
    useEffect(() => {
    
        fetch(SINGLE_POKEMON_URL(pokemonName)).then(res => res.json()).then(data => setDetails(data))
    }, [pokemonName])
console.log(details)
    return (
<div>
    <GoBackButton onClick={onBackButtonClick}>Go back</GoBackButton>
        <h2>{details.name}</h2>
        {/* <img src={details.sprites.other["official-artwork"].front_default} />

        <img src={details.sprites ?  details.sprites.other["official-artwork"].front_default : ""}/> */}
        <img src={details.sprites ? details.sprites.other["official-artwork"].front_default : ""}/>
        </div>
    )
}

export default Details