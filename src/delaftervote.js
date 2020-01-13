import React from 'react';
import './delaftervote.css';

function Delaftervote() {
  return (
  <div className="aftervote">
    <h1 className="headtext"> YOUR VOTE HAS BEEN RECORDED. </h1>
    <h2 className="text"> PLEASE WAIT TILL THE POLL ENDS.</h2>
    <div className='loader loader1'>
     <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <img src="logo_main.png" className="logo" alt="VITCMUN Logo"></img>
  </div>
  );
}

export default Delaftervote;
