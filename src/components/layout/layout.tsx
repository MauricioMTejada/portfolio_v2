import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

interface IOutlineLayout {
    children: ReactNode;
  }

const OutlineLayout: React.FC<IOutlineLayout>  = ({ children }) => {
  return (
    <div style={{
        border: '2px solid gray',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '4rem',
         }}>
      {children}
    </div>
  );
};

OutlineLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OutlineLayout;
