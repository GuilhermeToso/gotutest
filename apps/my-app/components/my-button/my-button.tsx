/* eslint-disable-next-line */
import {useState} from "react";

export function MyButton() {

  const [state, setState] = useState<string>('')

  function generateRandomWord(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charLength = characters.length;
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charLength);
      result += characters.charAt(randomIndex);
    }

    return result;
  }
  return (
    <>
      <button onClick={() => {setState(generateRandomWord(10))}}>
        <style jsx>{`
        div {
          color: pink;
        }
      `}</style>
        <h1>Welcome to MyButton!</h1>
      </button>
      <h2>
        {
          state
        }
      </h2>
    </>

  );
}

export default MyButton;
