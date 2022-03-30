import React from "react"
import {Link} from 'react-router-dom'
import { SINGLE_POKEMON_URL } from "utils/urls"

const List = ({pokemons}) => {
    return (
        <section className="list">
            {pokemons.map((pokemon => {
             return   <Link
                key={pokemon.name}
                to={`details/${pokemon.name}`}
                className="list-element"
                >{pokemon.name}
                </Link>
            }))}
        </section>
    )
}

export default List