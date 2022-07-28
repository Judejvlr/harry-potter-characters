import { useEffect, useState } from 'react';
import getCharacters from '../services/getCharacters';
import Character from '../types/character';

/**
 * It returns an object with two properties: loading and characters. 
 * 
 * The loading property is a boolean that indicates whether the characters are currently being fetched.
 * The characters property is an array of Character objects. 
 * 
 * The useEffect hook is used to fetch the characters from the API. 
 * The useEffect hook is called whenever the setCharacters function is called. 
 * The setCharacters function is called whenever the characters are fetched from the API. 
 * 
 * @returns An object with two properties: loading and characters.
 */
export function useCharacters() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([] as Array<Character>)

  useEffect(function () {
    setLoading(true)
    getCharacters()
      .then((characters: Array<Character>) => {
        setCharacters(characters)
        setLoading(false)
      })
  }, [])

  return { loading, characters }
}