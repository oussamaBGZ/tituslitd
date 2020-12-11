import React from 'react'
import {  useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useFirebaseConnect } from 'react-redux-firebase'
import {
    withFirebase,
  } from "react-redux-firebase";
function Home({ firebase: { remove } }) {
    // const expenses = useSelector(state => state.expenses)
    const history=useHistory()
    useFirebaseConnect([
        { path: 'expenses' }
      ])
    
      const expenses = useSelector((state) => state.firebase.ordered.expenses)
    return (
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
            <h1>All Expenses</h1>
            <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fullname</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Date</th>
                            {/* <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Desc</th> */}
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Amount</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300" />
                            <th className="px-6 py-3 border-b-2 border-gray-300" />
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {expenses &&
                            expenses.map(el => <tr key={el.key}>
                            
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <div className="text-sm leading-5 text-blue-900">{el.value.name}</div>
                                </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{el.value.date}</td>
                            {/* <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{el.desc}</td> */}
                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                                        <span aria-hidden className="absolute inset-0  opacity-50 rounded-full" />
                            <span className="relative text-xs">{el.value.expenseState}</span>
                                    </span>
                                </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{el.value.amount}</td>
                                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                    <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none" onClick={()=>remove("expenses/"+el.key)}>Delete</button>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                    <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none" onClick={()=>history.push('/expense/'+el.key)}>View Details</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
                </div>
            </div>
        </div>
    )
}

export default withFirebase(Home)
