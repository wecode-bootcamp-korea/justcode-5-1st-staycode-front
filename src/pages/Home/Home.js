import React from 'react';

import css from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
function Home() {
  return (
    <>
      <div className={css.container}>home</div>
      <FontAwesomeIcon className={css.coffee} icon={faCoffee} />
    </>
  );
}

export default Home;
