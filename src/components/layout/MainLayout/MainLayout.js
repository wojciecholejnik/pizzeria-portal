import React from 'react';


const MainLayout = ({...props}) => (
  <div>
    <p>Jestem MainLayout</p>
    {props.children}
  </div>
);

export default MainLayout;
