import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { render } from '@testing-library/react';





function App(){

  const quality = [
    {value: 'curiosity', label: 'Curiosity', id: 1},
    {value: 'autonomy', label: 'Autonomy', id: 2},
    {value: 'take initiatives', label: 'Take initiatives', id: 3},
    {value: 'hunger for knowledge', label: 'Hunger for knowledge', id: 4},
    {value: 'coffee addict', label: 'Coffee addict', id: 5 },
    {value: 'play video games', label:'Play video games', id: 6 },
    {value: 'play video games at work', label: 'Play video games at work', id: 7 },
    {value: 'back problems', label: 'Back problems', id: 8 , isDisabled: true},
    {value: 'have a cat', label: 'Have a cat', id: 9 },
    {value: 'versatile', label: 'Versatile', id: 10 },
    {value: 'playing football at office', label: 'Playing football at office', id: 11 },
    {value: 'teamwork', label: 'Teamwork', id: 12 },
    {value: 'reachable', label: 'Reachable', id: 13 },
    {value: 'know a lot of meme', label: 'Know a lot of meme', id: 14 },
    {value: 'sleeping during meetings', label: 'Sleeping during meetings', id: 15 },
  ];

  const qualityIds = quality.map(item => (item.id))

  const [result,setResult]=useState([]);
  
  const checkValue = (arr, target) => target.every(v => arr.includes(v));

  const handleChange = e => {
    const targetIds = e.map(item => (item.id))
    setResult(targetIds)
  };
  
  var qualityCheck;
    if
        (
          checkValue([7], result) || 
          checkValue([11], result) ||
          checkValue([15], result)
        ){
        qualityCheck = <p>Nope !</p>;
      }
      else if
        (
          (checkValue([7], result) &&
          checkValue([11], result)) ||
          (checkValue([11], result) &&
          checkValue([15], result)) ||
          (checkValue([7], result) &&
          checkValue([15], result))
          ){
        qualityCheck = <p>Nope ! Nope !</p>;
      }
      else if
        (result === 7, 11, 15){
        qualityCheck = <p>Nope ! Nope ! OMG !</p>
      }
      else if
        (result === 7, 14 && 11, 14 && 14, 15 && 7, 11, 14 && 7, 14, 15 && 11, 14, 15 && 7, 11, 14, 15){
        qualityCheck = <p>Stop it, get some help</p>;
      }
      else if
        (checkValue([9], result)){
        qualityCheck = <p>Perfect.</p>;
      }
      else if
        (result === 1, 2, 3, 4, 5, 6, 9, 10, 12, 13, 14){
        qualityCheck = <p>Okey ! Okey ! It's happenning !</p>;
      }
      else if
        (result === 1, 2, 3, 4, 5, 6, 10, 12, 13){
        qualityCheck = <p>Yup, nice dev bro !</p>;
      }
      else if
        (result === 1, 2, 3, 4, 5, 6, 9, 10, 12, 13){
        qualityCheck = <p>Yup, nice dev bro !</p>;
      }
      else if
      (result === 5, 6, 9){
        qualityCheck = <p>Oh, I see... A person of culture</p>;
      }
    else{
      qualityCheck = <p>Tell me what are the qualities of a good developer</p>;
    }

    const notify = () => toast(<span>{qualityCheck}</span>);

  return (
    <div>
    <p>Dev best qualities :</p>
    <Select
      className='selector'
      multiple={true}
      closeMenuOnSelect={false}
      options={quality}
      isClearable
      isSearchable
      isMulti
      onChange={handleChange}
    />

    <h1>{result}</h1>
    <button className='response' onClick={notify}>I'm a good dev ?</button>

    <ToastContainer
      position="top-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />

    </div>
  );
}

export default App;
