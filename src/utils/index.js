/*const formatTime = time => {
    if(time < 60) {
      return time < 10 ? `0${time}s` : `${time}s`;
    }else {
      return Math.floor(time / 60) + 'm' + (time % 60) + 's';
    }
  }
  
  export {
    formatTime
  }*/
  import React,{Component} from 'react';
 
  const index = ({onQuizStart}) => {
   
    return(
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h1> Inicio del Test</h1>
   
            <input type="text" placeholder="Nombre Completo" className="input" id="uno" ></input>
            <input type="submit" value="Iniciar" className="btn" onClick={onQuizStart} ></input>
            
          
          </div>
    
        </div>
        
      </div>
    );
  }
  
  export default index;