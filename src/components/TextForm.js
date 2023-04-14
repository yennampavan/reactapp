import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState('');
    const handleUpClick=()=>{
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)   
    }
    const handlelowerclick=()=>{
        console.log("lower case was clicked");
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const clear=()=>{
        console.log("clear clicked");
        setText("")
    }
    const copy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleonchange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
     
    // text="new text";  //wrong way
    // setText("new text"); //correct way
  return (
    <>
        <div>
            <h2>{props.heading}</h2>
    <div className="mb-4">
    <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowerclick}>convert to lowerrcase</button> 
    <button className="btn btn-primary mx-2" onClick={clear}>clear</button>     
    <button className="btn btn-primary mx-2" onClick={copy}>copy</button>     

    
        </div>
    <div className="container my-2">
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}minutes read</p>
    </div>
    <h2>Preview :</h2>
    <p>{text}</p>

        </>
    
    )
}

