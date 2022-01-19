import './App.css';
import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){

  const qualityArray = [
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

  const [ qualities, setQuality ] = useState([]);
  const [ devCharacteristics, setDevChar ] = useState('');
  const [ matchCount, setMatchCount ] = useState(0);
  const [ catPerson, setCatPerson ] = useState(false);
  const [ culturePerson, setCulturePerson ] = useState(0);
  const [ memePerson, setMemePerson] = useState(false);

  const goodDevQualities = [1, 2, 3, 4, 6, 10, 12, 13];
  const badDevQualities = [7, 11, 15];
  let qualityCheck;
    
  const checkValue = (arr1, arr2) => arr2.filter(element => arr1.includes(element.id));

  const handleChange = selectedTraits => {

    let characteristics = '';
    let culture = []
    
    setQuality(selectedTraits)
    selectedTraits.forEach((element, index) => {
      const connector = index === selectedTraits.length - 1 ? '' : ', ';
      if (element.id === 9) {
        setCatPerson(true);
        culture = [...culture, true]
      }
      if (element.id === 14){
        setMemePerson(true);
      }

      if (element.id === 6) {
        culture = [...culture, true]
      }

      if (element.id === 5) {
        culture = [...culture, true]
      }

      if(index === 0) {
        characteristics = element.label + connector;
      } else {
        characteristics = characteristics + element.label + connector ;
      }
    });
    setDevChar(characteristics);
    
    setCulturePerson(culture.length);

  };


  useEffect(() => {
      const goodCount = checkValue(goodDevQualities, qualities).length
      const badCount = checkValue(badDevQualities, qualities).length
      setMatchCount(goodCount - badCount)
      console.log({matchCount, goodCount, badCount})
  }, [qualities, matchCount])


  // Match Count Criteria
  // -4 - Stop it, get some help
  // -3 - Nope ! Nope ! OMG !
  // -2 - Nope ! Nope !
  // -1 - Nope !
  // 0 - neutral
  // 1 - Okey ! Okey ! It's happenning !
  // 1+ - Yup, nice dev bro !
  // special (id - 5, 6, 9) - Oh, I see... A person of culture
  // special (id - 9) - Perfect !


  if (matchCount === -3) {
    qualityCheck = <p>Nope ! Nope ! OMG !</p>;
  }

  if (matchCount === -2) {
    qualityCheck = <p>Nope ! Nope !</p>;
  }

  if (matchCount === -1) {
    qualityCheck = <p>Nope !</p>;
  }

  if (matchCount === 0) {
    qualityCheck = <p>Tell me your qualities !</p>;
  }

  if (matchCount >= 1 ) {
    qualityCheck = <p>And ?</p>;
  }

  if (matchCount === 8 ) {
    qualityCheck = <p>Yup, nice dev bro !</p>;
  }

  if (matchCount === -3 && memePerson) {
    qualityCheck = <p>Stop it, get some help !</p>;
  }

  if (matchCount === 8 && memePerson ) {
    qualityCheck = <p>Okey ! Okey ! It's happenning !</p>;
  }

  if (matchCount === 0 && memePerson) {
    qualityCheck = <p>*plop* Noïce !</p>
  }

  if (catPerson) {
    qualityCheck = <p>Perfect !</p>;
  }

  if (culturePerson === 3) {
    qualityCheck = <p>Oh, I see... A person of culture</p>;
  }
    
    
  const notify = () => toast(<span>{qualityCheck}</span>);

  return (
    <div>
    <p>Dev best qualities :</p>
    <Select
      className='selector'
      multiple={true}
      closeMenuOnSelect={false}
      options={qualityArray}
      isClearable
      isSearchable
      isMulti
      onChange={handleChange}
    />

    {/* <div style={{color: '#555', margin: '10px'}}>
      <span>{devCharacteristics}</span>
    </div> */}

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
