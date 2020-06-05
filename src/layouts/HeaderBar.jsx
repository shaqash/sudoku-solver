import React from 'react';                                                
import {                                                                                  
  Image, Header,                                                                          
} from 'semantic-ui-react';                                                               

const HeaderBar = () => {                                                                 
  return (                                                                                
    <div>                                                                                 
      <Header as="h5" floated="left">                                                     
        <Header.Content>                                                                  
          <Image src={''} avatar circular />                      
          <span>                                                                          
            Sudoku solver
          </span>                                                                         
        </Header.Content>                                                                 
      </Header>                                                                           
    </div>                                                                                
  );                                                                                      
};                                                                                        
export default HeaderBar;            
