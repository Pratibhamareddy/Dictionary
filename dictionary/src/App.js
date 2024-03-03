import React, { useState } from 'react';

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [dictionary] = useState([
    { word: 'React', meaning: 'A JavaScript library for building user interfaces.' },
    { word: 'Component', meaning: 'A reusable building block in React.' },
    { word: 'State', meaning: 'An object that stores data for a component.' },
  ]);

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === lowerCaseSearchTerm
    );

    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>
      <h3>Definition:</h3>
      <div>{definition}</div>
    </div>
  );
};

export default XDictionary;
