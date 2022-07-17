import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import ListRender from './ListRender'




function App() {
  const [total, setTotal] = useState(0)
  const [expense, setexpense] = useState(0)
  const [date, setDate] = useState()
  const [valx, setValx] = useState()

  const [income, setincome] = useState(0)
  const [amount, setAmount] = useState(0)
  const [list, setList] = useState([])
  
  const storeAmount = (e) => {
    setAmount(e.target.value, console.log("Amount: ", amount))
  }
  const storeDate = (e) => {
    setDate(e.target.value, console.log("Date: ", date))
  }
  const storevalue = (e) => {
    setValx(e.target.value, console.log("Valx: ", valx))
  }
  const SetMainData = () => {
    console.log("Button Clicked")
    setList({
      ...list,
      amount: amount,
      date: date,
      valx: valx
    })
  }
  console.log(list)




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>EXPENSE TRACKER</h2>
      </header>

      <div className="main-cont">

        <div className="bal">
          <h1>Total Balance : 1000</h1>
        </div>
        <div className="show-bals">
          <div className="show-bals1">
            <h3 className="same">INCOME</h3>
            <h2 className="same">{income}</h2>
          </div>
          <div className="show-bals2">
            <h3 className="same">EXPENSE</h3>
            <h2 className="same">{expense}</h2>
          </div>
        </div>
        <h2>ADD NEW TRANSECTION</h2>
        <div className="line"></div>

        <div className="input-take">

          <div className="same2">
            <h3>Enter Amount</h3>
            <input type="text" className="input" placeholder="Enter Amount .." onChange={(e) => { storeAmount(e) }} />
          </div>
          <div className="same2">
            <h3>Enter Date</h3>
            <input type="date" className="input" placeholder="Enter Your Task .." onChange={(e) => { storeDate(e) }} />
          </div>

          <div className="same2">
            <h3>Enter Category</h3>
            <select name="cars" className="input" onClick={(value) => { storevalue(value) }}>
              <option value="income">INCOME</option>
              <option value="expenses">EXPENSES</option>
            </select>
          </div>
        </div>
        <button className="button-9" onClick={() => SetMainData()}>ADD TRANSECTION</button>
      </div>
      <div className="render-list">
        <h2>ALL TRANSECTION</h2>
        <div className="line"></div>
        
      </div>
    </div>
  );
}

export default App;

// {
//   list.map((item,index)=>{
//     return(
//       <div>
//        {index}
//       </div>
//     )
//   })  
// }


// {
//   list.map((item) => {
//     <div className="list-main">
//       {/* <div className="same3">{item.date}</div> */}
//       <div className="same3">{item.amount}</div>
//       <div className="same3">{item.type}</div>
//     </div>
//   })
// }