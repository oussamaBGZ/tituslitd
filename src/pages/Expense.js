import React from 'react'
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
    withFirebase,
} from "react-redux-firebase";

function Expense({ firebase: { update } }) {
    let { id } = useParams();
    const expense = useSelector((state) => state.firebase.ordered.expenses.find(el => el.key == id))

    const history = useHistory()
    const [submited, setSubmited] = React.useState(false)
    const [name, setName] = React.useState(expense.value.name)
    const [date, setDate] = React.useState(expense.value.date)
    const [desc, setDesc] = React.useState(expense.value.desc)
    const [amount, setAmount] = React.useState(expense.value.amount)
    const [expenseState, setExpenseState] = React.useState(expense.value.expenseState)

    const handelSubmit = (e) => {
        e.preventDefault()
        setSubmited(true)

        console.log("sds", submited)
        update("expenses/" + id, {
            "name": name,
            "date": date,
            "desc": desc,
            "amount": amount,
            "expenseState": expenseState
        }).then(() => {
            setSubmited(false)
            history.push('/')
        })
    }
    return (
        <div className=" md:mt-0 md:col-span-2">
            <h1>{name} expense</h1>
            <form onSubmit={(e) => handelSubmit(e)}>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-12 sm:col-span-12">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <select value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                                    <option value="" disabled selected>Enter a Name</option>
                                    <option value="Jhon Doe">Jhon Doe</option>
                                    <option value="oussama bgz">oussama bgz</option>
                                    <option value="Cohen Carey">Cohen Carey</option>
                                    <option value="Luciano Wiley">Luciano Wiley</option>
                                    <option value="Arfa Frye">Arfa Frye</option>
                                    <option value="Sacha Jimenez">Sacha Jimenez</option>
                                    <option value="Latisha Marsden">Latisha Marsden</option>
                                    <option value="Barney Odling">Barney Odling</option>
                                    <option value="Veronica Eastwood">Veronica Eastwood</option>
                                    <option value="Elena Mcclure">Elena Mcclure</option>
                                    <option value="Elvis Macgregor">Elvis Macgregor</option>
                                    <option value="Reagan Michael">Reagan Michael</option>
                                </select>
                            </div>
                            <div className="col-span-12 sm:col-span-12">
                                <label htmlFor="expensesDate" className="block text-sm font-medium text-gray-700">Date of expenses</label>
                                <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="expenses date" type="date" name="expensesDate" id="expensesDate" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" required />
                            </div>
                            <div className="col-span-12 sm:col-span-12">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="description" name="description" id="description" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" required />
                            </div>
                            <div className="col-span-12 sm:col-span-12">
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (EUR)</label>
                                <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="amount" type="number" name="amount" id="amount" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" required />
                            </div>

                            <div className="col-span-12 sm:col-span-12">
                                <label htmlFor="aprovedState" className="block text-sm font-medium text-gray-700">Expenses state</label>
                                <select value={expenseState} onChange={(e) => setExpenseState(e.target.value)} id="aprovedState" name="aprovedState" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                                    <option value="" disabled selected>Enter a choice</option>
                                    <option value="no">No</option>
                                    <option value="yes">yes</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        {!submited ?
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Save
                    </button>
                            :
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default withFirebase(Expense)
