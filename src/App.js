import logo from './logo.svg';
import './App.css';
import React from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
  
const quality = [
  {value: 'curiosity', label: 'Curiosity'},
  {value: 'autonomy', label: 'Autonomy'},
  {value: 'take initiatives', label: 'Take initiatives'},
  {value: 'hunger for knowledge', label: 'Hunger for knowledge'},
  {value: 'coffee addict', label: 'Coffee addict'},
  {value: 'play video games', label:'Play video games'},
  {value: 'play video games at work', label: 'Play video games at work'},
  {value: 'back problems', label: 'Back problems', isDisabled: true},
  {value: 'have a cat', label: 'Have a cat'},
  {value: 'versatile', label: 'Versatile'},
  {value: '', label: ''},
  {value: 'teamwork', label: 'Teamwork'},
  {value: 'reachable', label: 'Reachable'},
  {value: 'know a lot of meme', label: 'Know a lot of meme'},
  {value: 'sleeping during meetings', label: 'Sleeping during meetings'},
]


var qualityCheck;
if(
    quality[6] && quality[10] && quality[14]){
    qualityCheck = <p>Nope !</p>;
    }
  else if
    (quality[6], quality[14] && quality[6], quality[10] && quality[10], quality[14]){
    qualityCheck = <p>Nope ! Nope !</p>;
  }
  else if
    (quality[6], quality[10], quality[14]){
    qualityCheck = <p>Nope ! Nope ! OMG !</p>
  }
  else if
    (quality[13], quality[6] && quality[13], quality[10] && quality[14], quality[13] && quality[14], quality[6], quality[13] && quality[13], quality[6], quality[10] && quality[13], quality[10], quality[14] && quality[14], quality[6], quality[10], quality[13]){
    qualityCheck = <p>Stop it, get some help</p>;
  }
  else if
    (quality[8]){
    qualityCheck = <p>Perfect.</p>;
  }
  else if
    (quality[8], quality[0], quality[1], quality[2], quality[4], quality[5], quality[3], quality[9], quality[12], quality[11]){
    qualityCheck = <p>Okey ! Okey ! It's happenning !</p>;
  }
  else if
    (quality[8], quality[1], quality[2], quality[3], quality[0], quality[9], quality[12], quality[11]){
    qualityCheck = <p>Yup, nice dev bro !</p>;
  }
  else if
    (quality[1], quality[2], quality[3], quality[0], quality[10], quality[12], quality[11]){
    qualityCheck = <p>Yup, nice dev bro !</p>;
  }
  else if
  ( quality[8], quality[5], quality[4]){
    qualityCheck = <p>Oh, I see... A person of culture</p>;
  }
else{
  qualityCheck = <p>Tell me what are the qualities of a good developer</p>;
}



function App() {
  return (
    <div>
    <p>Dev best qualities :</p>
    <Select
      multiple={true}
      closeMenuOnSelect={false}
      isClearable
      isSearchable
      components={makeAnimated}
      isMulti
      getValue
      options={quality}
    />
    {qualityCheck}
    </div>
  );
}

export default App;
