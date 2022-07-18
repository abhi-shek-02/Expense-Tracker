import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
// 
function App() {
  const [total, setTotal] = useState(0)
  const [expense, setexpense] = useState(0)
  const [income, setincome] = useState(0)


  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState('')
  const [valx, setValx] = useState('')
  const [list, setList] = useState([])

  const [startIndex, setStartIndex] = useState(1)
  const [endIndex, setEndIndex] = useState(10)

  const storevalue = (e) => {
    setValx(e.target.value)
  }

  const SetMainData = () => {
    if (!valx) {
      alert('Please Select Type')
      return
    }
    if (!date) {
      alert('Please Select Date')
      return
    }
    console.log("Button Clicked", valx, amount)
    if (valx === "INCOME") {
      setincome(parseInt(income) + parseInt(amount))
      setTotal((e) => e + parseInt(amount))
    }
    else if (valx === "EXPENSE") {
      setexpense(parseInt(expense) - parseInt(amount))
      setTotal((e) => e - parseInt(amount))

    }

    const tempObj = {
      amount,
      date,
      valx,
    }
    setList([...list, tempObj]);
    // console.log(list)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>EXPENSE TRACKER</h2>
      </header>
      <div className="main-cont">

        <div className="bal">
          <h1><span className="red">Total Balance </span> : {total}</h1>
        </div>
        <div className="show-bals">
          <div className="show-bals1">
            <h3 className="same">INCOME</h3>
            <h2 className="same"><span className="green">{income}</span></h2>
          </div>

          <div className="show-bals2">
            <h3 className="same">EXPENSE</h3>
            <h2 className="same"><span className="red">{expense}</span></h2>
          </div>
        </div>
        <h2>ADD NEW TRANSACTION</h2>
        <div className="line"></div>

        <div className="input-take">

          <div className="same2">
            <h3>Enter Amount</h3>
            <input type="text"
              className="input"
              placeholder="Enter Amount .."
              onChange={(e) => {
                setAmount(e.target.value)
              }} />
          </div>
          <div className="same2">
            <h3>Enter Date</h3>
            <input type="date"
              className="input"
              placeholder="Enter Your Task .."
              onChange={(e) => {
                setDate(e.target.value)
              }} />
          </div>

          <div className="same2">
            <h3>Enter Category</h3>
            <select className="input" onClick={(value) => { storevalue(value) }}>
              <option value="" >--Please choose </option>
              <option value="INCOME">INCOME</option>
              <option value="EXPENSE">EXPENSES</option>
            </select>
          </div>
        </div>
        <button className="button-9" onClick={() => SetMainData()}>ADD TRANSACTION</button>
      </div>
      <div className="render-list">
        <h2>TRANSACTION HISTORY</h2>
        <div className="line"></div>
        {
          list?.map((item, index) => {
            return (
              <>
                {index >= startIndex - 1 && index <= endIndex - 1 ? (
                  <div className="list-main">
                    <div className="same3" ><span className="same4">{item.date}</span></div>
                    <div className="same3"><span className="same4"> $ {item.amount}</span></div>
                    <div className="same3"><span className="same4">{item.valx}</span></div>
                  </div>
                ) : null}
              </>
            )
          })}
        <div
          style={{
            marginTop: 20,
            display: 'flex',
            width: '100vw',
            justifyContent: 'space-around',
            marginBottom: 20,
          }}
        >
          <button
            className="button-x"
            onClick={() => {
              if (list.length > endIndex) {
                setStartIndex(startIndex + 10)
                setEndIndex(endIndex + 10)
              }
            }}
          >
            Increase {startIndex}
          </button>
          <button
            className="button-x"
            onClick={() => {
              if (startIndex >= 10) {
                setStartIndex(startIndex - 10)
                setEndIndex(endIndex - 10)
              }
            }}
          >
            Decrease {endIndex}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
