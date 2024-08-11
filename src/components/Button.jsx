
import React from 'react';
import './Style/Button.css';


    const Button = ({ children }) => {
        return (
          <button className="custom-button">
            {children}
          </button>
        );
      };
      
      export default Button;