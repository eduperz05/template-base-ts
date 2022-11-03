import { rollDice } from './component/dice';


function server() {
  console.log('!Hola!');
  let dice = rollDice();
  console.log(dice);
}


server();