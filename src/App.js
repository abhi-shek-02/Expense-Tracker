import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)
  const [expense, setexpense] = useState(0)
  const [income, setincome] = useState(0)


  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState()
  const [valx, setValx] = useState()
  const [list, setList] = useState([])
  const [OBlist, setOBList] = useState({})


  const storeAmount = (e) => {
    setAmount(e.target.value)
  }
  const storeDate = (e) => {
    setDate(e.target.value)
  }
  const storevalue = (e) => {
    setValx(e.target.value)
  }

  const SetMainData = () => {
    console.log("Button Clicked", valx, amount)
    if (valx === "incomes") {
      setTotal(parseInt(income) + parseInt(expense))
      setincome(parseInt(income) + parseInt(amount))
    }
    else if (valx === "expenses") {
      setexpense(parseInt(expense) - parseInt(amount))
      setTotal(parseInt(income) + parseInt(expense))
    }

    setOBList({
      amount: amount,
      date: date,
      valx: valx
    })
    setList([...list, OBlist]);
    console.log(list)
  }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>EXPENSE TRACKER</h2>
      </header>
      <div className="main-cont">

        <div className="bal">
          <h1>Total Balance : {total}</h1>
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
            <select className="input" onClick={(value) => { storevalue(value) }}>
              <option value="" disabled>--Please choose </option>
              <option value="incomes">INCOME</option>
              <option value="expenses">EXPENSES</option>
            </select>
          </div>
        </div>
        <button className="button-9" onClick={() => SetMainData()}>ADD TRANSECTION</button>
      </div>
      <div className="render-list">
        <h2>ALL TRANSECTION</h2>
        <div className="line"></div>
        {
          list?.map((item) => {
            <div className="list-main">
              <div className="same3">{item.date}</div>
              <div className="same3">{item.amount}</div>
              <div className="same3">{item.type}</div>
            </div>
          })
        }
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