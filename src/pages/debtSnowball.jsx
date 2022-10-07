import { useEffect, useState, useContext } from "react"
import DataContext from "../context/dataContext"
import DataService from "../services/dataService"
import "../components/debtSnowball.css"


const DebtSnowball = () => {

    const [userDebts, setUserDebts] = useState([])
    const [snowballedUserDebts, setSnowballedUserDebts] = useState([])
    const [snowball, setSnowball] = useState(0)
    const [snowballApplied, setSnowballApplied] = useState(false)

    let activeBudget = useContext(DataContext).activeBudget

    const getUserDebts = async() => {
        if (userDebts.length < 1){
            let payload = []
            if (activeBudget.expenses){
                activeBudget.expenses.forEach(expense => {
                    if (expense.expensePriority === '5'){
                        payload.push(expense)
                    }
                })
            }
            let service = new DataService()
            let data = await service.updateExpenseData(payload)
           
            setUserDebts(data)
            setSnowballedUserDebts(data)
        }

    }

    useEffect(() => {
        getUserDebts()
        // eslint-disable-next-line
    }, [])

    const setDebtEndPoints = async() => {

        let copy = [...userDebts]

        let payload = []
        payload.push(snowball)
        copy.forEach(debt => {
            payload.push(debt)
        })
        let service = new DataService()
        let data = await service.snowball(payload)

        setSnowballedUserDebts(data)

        updateProgressValue(data)
    }

    const onChange = (e) => {
        let val = e.target.value
        val = parseFloat(val)
        setSnowball(val)
    }

    const updateProgressValue = (data) => {
        // let element = document.querySelector('.debt-display')
        let elements = document.querySelectorAll('.debt-display')

        for (let i = 0; i < elements.length; i++){
            let newWidth = (data[i].new_end_point / parseInt(userDebts[i].months_to_paid)) * 100
            if (newWidth > 100){
                newWidth = 100
            }
            elements[i].style.width =  newWidth + '%'
        }
    }

    const applySnowball = async() => {
        setSnowballApplied(true)
        await setDebtEndPoints()
    }

    return (
        <div className="debt-snowball container">
            {!userDebts &&
            <div className="container">
                <h1 className="header">This tool is only functional if you have a budget with financed expenses.</h1>
                {/* <div className="btn-container">
                    <button className="btn" onClick={budgetHome}>Budget Home</button>
                </div> */}

            </div>
            }
            <div className="input-container">
                <label className="snowball-amount-label label">Additional Payment</label>
                <input name="snowball" className="snowball-amount" type="number" step={'0.01'} placeholder="Amount" onChange={onChange}/>
            </div>
            <div className="btn-container">
                <button className="snowball-btn btn" onClick={applySnowball}>Apply Snowball</button>
            </div>
            <div className="debt-list">
                {userDebts &&
                    snowballedUserDebts.map(debt => (
                        <div key={debt.debt_index} className="debt-card">
                            <div className="debt-title-container">
                                <h4 className="debt-title">{debt.expenseName}</h4>
                            </div>
                            <div className="debt-range">
                                <label>Current Balance</label>
                                <label>Months To Paid</label>
                            </div>
                            <div className="debt-range">
                                <label className="range-lable">{debt.todays_principle}</label>
                                <label className="range-lable">{debt.months_to_paid}</label>
                            </div>
                            <div className="debt-display-container">
                                <div className="debt-display">
                                    {debt.new_end_point}
                                </div>
                            </div>
                            {snowballApplied &&
                            <div className="debt-info">
                                New months to payoff: {debt.new_end_point}
                                    <div className="savings">
                                        Total savings: ${(debt.total_interest_at_min_payment - debt.total_interest_paid_snowball).toFixed(2)}
                                    </div>
                            </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DebtSnowball