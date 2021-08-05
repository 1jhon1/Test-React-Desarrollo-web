


const Start = ({onQuizStart}) => { 

 const na=()=>{
  var texto=document.getElementById("uno").value;
  document.getElementById("dos").value=texto;
}

 function onClic(){
  na();
  onQuizStart();
 
}

  return(
   
    <div className="card"> 
      <div className="card-content">
        <div className="content">
          <h1> Inicio del Test</h1>
          <div className="input-contenedor" >
       <i class="fas fa-user icon"></i>
          <input type="text" placeholder="Nombre Completo" className="input" name="Nombre" id="uno" ></input>
          <input type="submit" value="Iniciar"  className="btn"  onClick={onClic} ></input>
         
       
			 </div>
         
        
        </div>
  
      </div>
      
    </div>
  );
}

export default Start;
