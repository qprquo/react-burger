import React from 'react';
import PropTypes from 'prop-types';
import {Container} from '../layout/layout';
import mainStyles from './main.module.css';

const Main = ({children, className='', ...rest}) => {
  return (
    <main className={`${mainStyles['main']} ${className}`} {...rest}>
      <Container>
        {children}
      </Container>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string
};

export default Main;
