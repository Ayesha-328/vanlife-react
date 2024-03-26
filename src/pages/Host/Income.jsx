import React from 'react'
import IncomeGraph from "../../assets/images/income-graph.png"

function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, 2023", id: "1" },
    { amount: 560, date: "Dec 12, 2022", id: "2" },
    { amount: 980, date: "Dec 3, 2022", id: "3" },
]

const transactionElement= transactionsData.map(trans=>{
  return <div key={trans.id} className="transaction wrapper">
  <h4 className="heading">${trans.amount}</h4>
  <p className="text">{trans.date}</p>
</div>
})
  return (
    <div className="income-container container">
      <h1 className="heading">Income</h1>
      <p className="text">Last <a className="active-link" href="">30 days</a></p>
      <h3 className="main-heading">$2,260</h3>
      <img src={IncomeGraph} alt="graph" className="income-img" />
      <div className="transaction-container">
        <div className="wrapper">
        <h3 className="heading">Your transaction ({transactionsData.length})</h3>
        <p className="text">Last <a className="active-link" href="">30 days</a></p>
        </div>

        {transactionElement}

       
        
      </div>
    </div>
  )
}

export default Income