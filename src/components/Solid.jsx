import { createSignal } from 'solid-js';
import './Counter.css';

export  function SampleCounter({ children }) {
  const [count, setCount] = createSignal(0);
  const add = () => {
	  setCount(count() + 1);
	  console.log("add", count());
  }
  const subtract = () => {
	  setCount(count() - 1);
	  console.log("sub", count());
  }

  const getCount = () => {
	  console.log("get");
    return count();
  }

  return (
    <>
      <div class="counter">
        <button onClick={subtract}>-</button>
        <pre>{count()}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="counter-message">{children}</div>
    </>
  );
}


