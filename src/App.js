import React from 'react'
import {useState} from 'react'
import './App.css'

function App() {

const [billAmount, setbillAmount] = useState(0)
const [cashGiven, setcashGiven] = useState(0)
const [list, setlist] = useState([])

const showMessage = (message) => {
    console.log(message)
}

const calculateChange = () => {
    if(billAmount>0){
        if(cashGiven > billAmount){
            const amountToBeReturned=cashGiven-billAmount;
            const finalList= calculateDenomination(amountToBeReturned)
            setlist(finalList)
            

            
        }else{
            showMessage("The cash Should be Greater than equal to bill Amount")
        }
    }else{
        showMessage('Invalid Bill Amount')
    }
}


const calculateDenomination = (returnAmount) => {

    const Denominationlist=[2000,500,100,20,10,5,1];
    const list=[]    
    let temp=0;
    for(let i=0;i<Denominationlist.length;i++){
        temp=returnAmount/Denominationlist[i]
        list.push(~~temp)
        returnAmount=returnAmount-(~~temp*Denominationlist[i]);
    }
    return list;

    
}



  return (
    <div>
        <h1 className="heading">Cash Register Manager</h1>
        <h5>Enter the bill amount and cash given by the customer and know minimum number of notes to return</h5>
        <h3>Bill Amount</h3>
        <input type="number" value={billAmount} onChange={(e)=>setbillAmount(e.target.value)}></input>
        <h3>Cash Given</h3>
        <input type="number" value={cashGiven} onChange={(e)=>setcashGiven(e.target.value)}></input>
        <br></br>
        <input type="button" value="Check" onClick={calculateChange}></input>
        <table border="black">
            <tbody>
            <tr>
                <th>No of Notes</th>
                {list.map((item, index)=> <td key={index}>{item}</td>)}
            </tr>
            <tr>
                <th>Notes</th>
                <td>2000</td>
                <td>500</td>
                <td>100</td>
                <td>20</td>
                <td>10</td>
                <td>5</td>
                <td>1</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default App