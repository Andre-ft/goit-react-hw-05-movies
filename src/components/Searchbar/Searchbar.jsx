import React, { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

// class Searchbar extends Component {
function Searchbar({onSubmit}){
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    setQuery(event.currentTarget.value.toLowerCase() );
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Input query.');
      return;
    }

    onSubmit(query);
    // setQuery('');
  };

    return (
      <header className={s.Searchbar}>
        <form onSubmit={handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query}
            onChange={handleQueryChange}
          />
        </form>
      </header>
    );
}

export default Searchbar;

Searchbar.defaultProps = {
  onSubmit: () => null,
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
