//Har samarbeidet med Jesper Borgersen
import react, { useState } from 'react';

const Alert = (props) => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
    props.changeInputValue(e.target.value);
    props.changeClicked(false);
  };
  const handleClick = () => {
    props.changeClicked(true);
    alert(text);
  };
  return (
    <>
      <input
        type="text"
        id="inputId"
        name="inputName"
        onChange={handleChange}
      />
      <button onClick={handleClick}> klikk </button>
    </>
  );
};

export default Alert;
