import React from 'react';
import ReactDOM from 'react-dom';
import Knight from './Knight';
import Square from './Square';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
  	<Square black>
    	<Knight />
    </Square>,
    document.getElementById('mount')
  );
})
