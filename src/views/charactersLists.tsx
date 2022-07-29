import React from 'react';
import { CardList } from '../components/blocks/CardList';
import Loader from '../components/elements/Loader';
// import i18n from '../config/i18n';
import { useCharacters } from '../hooks/useCharacters';

export default function CharactersList() {
  const { loading, characters } = useCharacters()

  return (
    <React.Fragment>
      {loading ? <Loader />
        :
        <CardList characters={characters} />
      }
    </React.Fragment >
  )
}