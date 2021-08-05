import React, { useState, useEffect, useRef, Fragment} from 'react';



const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep}) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();
  
  

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked =null;
    }
  }, [data]);

  

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }
  
  const nextClickHandler = (e) => {
   
    onAnswerUpdate(prevState =>[...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if(activeQuestion < numberOfQuestions -1) {
      onSetActiveQuestion(activeQuestion + 1);
          }else {
      onSetStep(3);
    }
  
  }
   
function lerr(){
 
   
  if(true) {
  onSetActiveQuestion(activeQuestion -1);
  
  } 
}
  
  return( 
    
    <div className="card">
      <div className="card-content">
      
        <div className="content"><h4 className="num">{data.num}</h4>
        <h2 className="mb-5">{data.question}</h2>
        
        <div className="control"  ref={radiosWrapper}>
          {data.choices.map((choice, i)=>(
              <label className="radio has-background-light" key={i}>
                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                {choice}
              </label>
            ))}
            </div>
          <div className="indicator">
      <div className="q1" id="p1" >1</div>
			<div className="q2" id="p2">2</div>
			<div className="q3" id="p3">3</div>
			<div className="q4"id="p4">4</div>
			<div className="q5" id="p5">5</div>
			<div className="q6"id="p6">6</div>
			<div className="q7"id="p7">7</div>
			<div className="q8" id="p8">8</div>
			<div className="q9"id="p9">9</div>
			<div className="q10"id="p10">10</div>
      </div>
      
          {error && <div className="has-text-danger">{error}</div>}
          
          <button  className="btn1" onClick={nextClickHandler}>Siguiente</button> 
  
       
       
         
         
       
          </div>
      </div>
     
    </div>
  );
          
}


export default Question;