//Har samarbeidet med Jesper Borgersen

import { useState } from 'react';
import Food from './components/Food';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [isClicked, setClicked] = useState(false);

  return (
    <Wrapper>
      <Title title="It works!" />
      {isClicked ? <p> {inputValue} </p> : null}
      <Food />
      <Alert changeInputValue={setInputValue} changeClicked={setClicked} />
    </Wrapper>
  );
};

export default App;
