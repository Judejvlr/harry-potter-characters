import Character from "../types/character"


const baseURL = process.env.REACT_APP_API

/**
 * It takes an array of objects and returns an array of objects with the same properties
 * @param apiResponse - []: This is the response from the API.
 * @returns An array of characters
 */
const fromApiResponseToCharacter = (apiResponse: []) => {
  if (Array.isArray(apiResponse)) {
    const characters = apiResponse.map(character => {
      const { name, gender, house, dateOfBirth, wizard, hogwartsStudent, hogwartsStaff, actor, alive, image } = character
      return { name, gender, house, dateOfBirth, wizard, hogwartsStudent, hogwartsStaff, actor, alive, image }
    })
    return characters as Character[]
  }
  return []
}

/**
 * It takes the response from the API, converts it to JSON, and then converts it to a Character object.
 * @returns A promise that resolves to an array of characters.
 */
export default function getCharacters(): Promise<Character[]> {
  const apiURL = `${baseURL}/characters`
  return fetch(apiURL)
    .then(response => response.json())
    .then(fromApiResponseToCharacter)
}

