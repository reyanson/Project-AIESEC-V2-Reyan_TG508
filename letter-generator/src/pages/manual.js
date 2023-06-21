import React, { useState } from 'react';
import './manual.css'

function Manual(){
    return(
    <div>
        <div className='tagname'>Name<br />
            <input type="text" className='box' placeholder='First Name'/>
            <input type="text" className='box' placeholder='Middle Name'/>
            <input type="text" className='box' placeholder='Last Name'/>
        </div>

        <div className='space1'></div>

        <div className='tagname'>Birth Date <span className='tagname1'>Gender</span><br />
        
            <select className='box1'>
                <option>1</option>
                <option>2</option>
                <option>2</option>
            </select>
            <select className='box1'>
                <option>1</option>
                <option>2</option>
                <option>2</option>
            </select>
            <select className='box1'>
                <option>1</option>
                <option>2</option>
                <option>2</option>
            </select>

            {/* Gender option */}
            <select className='box3'>
                    <option>Please Select</option>
                    <option>2</option>
                    <option>2</option>
            </select>

            <div className='space1'></div>
            <div>Username
                <span className='tagname1' style={{marginLeft:'25.3%'}}>
                    Password
                    <span className='tagname1' style={{marginLeft:'325px'}}>Confirm Password</span>
                    
                    <input type="text" name='username' className='box' placeholder='' style={{marginLeft:'40px',top:'-4px'}} />
                    <input type="password" name='password' className='box' placeholder='' style={{top:'-3px'}} />
                    
                    
                </span>                
                <br />
                <input type="text" name='confirm password' className='box' placeholder='' style={{marginLeft:'875px',top:'-40px'}} />                
            </div>

            <div name='mail addresses' style={{marginTop:'-30px'}}>Personal Mail
                <span style={{marginLeft:'370px'}}>AIESEC Mail</span><br />
                <input type="text" name='Personal Mail' className='box' placeholder='' style={{width:'439px'}}/>
                <br />
                <input type="password" name=' AIESEC Mail' className='box' placeholder='' style={{width:'439px',marginLeft:'546px',top:'-41px'}}/>
            </div>
            
            <div name='addresses' style={{marginTop:'-30px'}}>Address
                <input type="text" name='Street Name' className='box3' placeholder='Street Name' style={{width:'320px',top:'37px',left:'-118.0px'}}/>
                <input type="text" name='Line2' className='box3' placeholder='Line2' style={{width:'320px',top:'37px',left:'-135px'}}/>
                <input type="text" name='City' className='box3' placeholder='City' style={{width:'237px',top:'37px',left:'-157px'}}/>
                <select name='Province' className='box3' style={{width:'264px',top:'-3.2px',left:'907px'}} >
                <option>Select Province</option>
                <option>2</option>
                <option>2</option>
            </select>
                
            </div>

            

            <div name='addresses' style={{marginTop:'10px'}}>Faculty
                <select name='Province' className='box3' style={{top:'37px',left:'-112.0px'}} >
                    <option>Select Faculty</option>
                    <option>2</option>
                    <option>2</option>
                </select>
                <span style={{marginLeft:'30px'}}>Whatsapp Number</span><br />
            
                <input type="text" name='whappnum' className='box3' placeholder='(+94)77 123 4567' style={{width:'320px',top:'-5px',left:'476px'}}/> 
            </div>

            <div name='PositionAndFunction' style={{marginTop:'10px'}}>
                <span>
                    Front Office Position

                </span>
                
                <span style={{top:'-36px',marginLeft:'117px'}}>
                    Front Office Function

                </span>
                <span style={{top:'-36px',marginLeft:'103px'}}>
                    Back Office Position

                </span>

                <span style={{top:'-36px',marginLeft:'106px'}}>
                    Back Office Function

                </span>
                <div>
                    <select name='Front Office Position' className='box3' style={{width:'264px',left:'-38px'}} >
                        <option>Front Office Position</option>
                        <option>2</option>
                        <option>2</option>
                    </select>

                    <span>
                        <select name=' Front Office Function' className='box3' style={{width:'264px',left:'-22px'}} >
                        <option>  Front Office Function</option>
                        <option>2</option>
                        <option>2</option>
                        </select>
                    </span>

                    <span>
                        <select name='Back Office Position' className='box3' style={{width:'264px',left:'-10px'}} >
                        <option>Back Office Position</option>
                        <option>2</option>
                        <option>2</option>
                        </select>
                    </span>

                    <span>
                        <select name='Back Office Function' className='box3' style={{width:'264px',left:'6px'}} >
                        <option> Back Office Function </option>
                        <option>2</option>
                        <option>2</option>
                        </select>
                    </span>

                </div>
            </div>


            <div name='Row8' style={{marginTop:'12px'}}>
                    <span>
                        Join Date in AIESEC
                    </span>
                    <span style={{marginLeft:'213px'}}>
                        OEVP Name
                    </span>
                    <span style={{marginLeft:'227px'}}>
                        TL / Manager Name
                    </span>
                    

                <div>
                    <span>
                        <select className='box1'>
                        <option>1</option>
                        <option>2</option>
                        <option>2</option>
                        </select>
                        <select className='box1'>
                        <option>1</option>
                        <option>2</option>
                        <option>2</option>
                        </select>
                        <select className='box1'>
                        <option>1</option>
                        <option>2</option>
                        <option>2</option>
                        </select>
                    </span>
                    <span>
                        <select name='OEVP Name' className='box3' style={{width:'264px',left:'25px'}} >
                        <option> OEVP Name </option>
                        <option>2</option>
                        <option>2</option>
                        </select>
                    </span>
                    <span>
                        <input type="password" name=' AIESEC Mail' className='box' placeholder='' style={{width:'439px',marginLeft:'812px',top:'-43px'}}/> 
                    </span>
                        
                </div>
                    
                </div> {/*row8 finished */}

                <div name='row9' style={{marginTop:'-28px'}}> {/* row9 start*/}
                    <label>Profile Upload</label><br />
                    <input type='file' />

                </div>{/* row9 Finished*/}

                <div>{/* Reset and Register button*/}

                    <span>
                        <input type='reset'  className='btn' style={{marginLeft:'-200px',top:'1100px'}} value={'Reset'}/> 
                    </span>

                    <span>
                        <input type='submit' className='btn' style={{marginLeft:'350px',top:'1100px'}} value={'Register'}/> 
                    </span>
                    

                </div>
                
                
 

                

            
        </div>

        

    </div>
        
        
    );
}
export default Manual;
