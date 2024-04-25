import React, { useState, useEffect, useCallback } from 'react';  // Ajouter useCallback ici
import './SearchBar.css';  // Assurez-vous que le style CSS est correctement appliqué
import _ from 'lodash';  // Importation correcte de lodash

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    // Créer une version debounced de la fonction de recherche
    const debouncedSearch = useCallback(_.debounce((query) => {
        onSearch(query);
    }, 300), []);  // Utilisation de lodash pour debounce

    useEffect(() => {
        if (query.length > 0) { // Si tu veux éviter de rechercher des chaînes vides
            debouncedSearch(query);
        }
    }, [query, debouncedSearch]); // Effectuer une recherche chaque fois que `query` change

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                placeholder="Rechercher des utilisateurs, posts, groupes..."
                value={query}
                onChange={handleInputChange}
                aria-label="Recherche"
            />
        </form>
    );
};

export default SearchBar;