import React, { useState } from 'react';
import './myStyle.css'




function LetterGenerator() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const generatedLetter = `Dear ${inputValue},

I hope this letter finds you well. I am writing to inform you that [insert message here].

Sincerely,
[Your Name]`;
    setOutputValue(generatedLetter);
  };

  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        {/* Page title */}
        <div className='title'>Letter Generator</div>

        {/* First rectangele Editable filed */}
        <div id='rec1'>
          <div className='head'>Editable Field</div>

          {/* Name filed */}
          <label className="text">Name<br /> 
            <input className='inputBox' type="text" placeholder='Kapilan'/>
            <div className='space'></div>{/* space between two filed*/}
            <input className='inputBox' type="text" placeholder='Middle Name'/>
            <div className='space'></div>
            <input className='inputBox' type="text" placeholder='Srikaran'/>
          </label>

          <div className='bigspace'></div> {/* space between two filed name*/}

          {/* Address filed */}
          <label className="text">Address<br />
            <input className='inputBox' type="text" placeholder='No 39, Waddukoddai'/>   <div className='space'></div>
            <input className='inputBox' type="text" placeholder='Arali'/>   <div className='space'></div>
            <input className='inputBox' type="text" placeholder='Jaffna'/>   <div className='space'></div>
            <input className='inputBox' type="text" placeholder='Northen Province'/>
            <select className='inputBox'>
              <option>Northen Province</option>
              <option>southern Province</option>
            </select>
          </label>

        </div>

        {/* Second rectangele details */}
        <div id='rec2'>
          <div className='head2'>Details</div>

          {/* Date of birth */}
          <label className="text2">Date of Birth<br /> 
            <input className='inputBox' type="text" readOnly value={"14/8/1998"} /> 
          </label>

          <div className='bigspace2'></div>{/* space between two filed name*/}

          {/* Personal Mail */}
          <label className="text2">Personal Mail<br /> 
            <input className='inputBox' type="text" readOnly value={"kapilansrikaran@gmail.com"}/> 
          </label>

          <div className='bigspace2'></div>

          {/* Faculty filed */}
          <label className="text2">Faculty<br /> 
            <input className='inputBox' type="text" readOnly value={"Faculty of Technology"}/> 
          </label>
          <div className='bigspace2'></div>

          {/* Front Office Position */}
          <label className="text2">Front Office Position<br /> 
            <input className='inputBox' type="text" readOnly value={"Team Leader"}/> 
          </label>
          <div className='bigspace2'></div>

          {/* Back Office Position */}
          <label className="text2">Back Office Position<br /> 
            <input className='inputBox' type="text" readOnly value={"Team Leader"}/> 
          </label>
          <div className='bigspace2'></div>

          {/* Join Date in AISEC */}
          <label className="text2">Join Date in AIESEC<br /> 
            <input className='inputBox' type="text" readOnly value={"4/5/2020"}/> 
          </label>
          <div className='bigspace2'></div>

          {/* TL / Manager Name */}
          <label className="text2">TL / Manager Name<br /> 
            <input className='inputBox' type="text" readOnly value={" "}/> 
          </label>

          {/* Second rectangel second column filed */}

          {/* Gender */}
          <label className="text3">Gender<br /> 
            <input className='inputBox' type="text" readOnly value={"Male"}/> 
          </label>
          <div className='bigspace3'></div>

          {/* AIESEC Mail */}
          <label className="text3">AIESEC Mail<br /> 
            <input className='inputBox' type="text" readOnly value={"kapilan.sri@aiesec.net"}/> 
          </label>
          <div className='bigspace3'></div>

          {/* WhatsApp Number */}
          <label className="text3">WhatsApp Number<br /> 
            <input className='inputBox' type="text" readOnly value={"(+94)77 582 8006"}/> 
          </label>
          <div className='bigspace3'></div>

          {/* Front Office Function */}
          <label className="text3">Front Office Function<br /> 
            <input className='inputBox' type="text" readOnly value={"oGV"}/> 
          </label>
          <div className='bigspace3'></div>

          {/* Back Office Function */}
          <label className="text3">Back Office Function<br /> 
            <input className='inputBox' type="text" readOnly value={"BD"}/> 
          </label>
          <div className='bigspace3'></div>

          {/* OEVP Name */}
          <label className="text3">OEVP Name<br /> 
            <input className='inputBox' type="text"readOnly value={"Dlueen"}/> 
          </label>
          
        </div>


        <div className='bottompart'>
          Select the type of letter
          <select className='inputBox2'>
              <option>Service Letter</option>
              <option>Confirmation letter</option>
              
          </select>
        </div>
        
        <button type='submit' className='btnmain'>Generate the Letter</button>
 

        {/* <label htmlFor="inputValue">Recipient Name:</label>
        <input id="inputValue" type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Generate Letter</button> */}
      </form>
      
      {/* <p>{outputValue}</p> */}
    </div>
  );
}

export default LetterGenerator;

