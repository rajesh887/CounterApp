import './App.css'
import { useState } from 'react'
// state, component

// let state = {
//   count:0
// } this would not work in react you need to follow react formate
// jsx

// function App() {
//   const [count, setCount] = useState(0);
//   function onClickHandler(){
    
//     setCount(count + 1);
//   }

//   return (
//    <div>
//      <button onClick={onClickHandler}>Counter {count}</button>
//    </div>  
  
//   )
// }



 function App(){
    const[count, setCount] = useState(0);

    return(
      <div>
         <CustomButton count={count} setCount={setCount}></CustomButton>
         <CustomButton count={count + 1} setCount={setCount}></CustomButton>
         <CustomButton count={count - 1} setCount={setCount}></CustomButton>
         <CustomButton count={count*5} setCount={setCount}></CustomButton>
         <CustomButton count={count/1} setCount={setCount}></CustomButton>
      </div>
    )
 }

 // component
// so this is good practice to structure the app
 function CustomButton(props){
    
   function onClickHandler(){
    props.setCount(props.count + 1);
   }
  return <button onClick={onClickHandler}>
    Counter {props.count}
    </button>
 }
export default App
