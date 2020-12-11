import React from 'react'
import { Link } from 'react-router-dom'

function SideMenu() {
    const [menuPosition,setMenuPosition] = React.useState(false);

    return (
        <>
            <span className="openMenu desktop" onClick={()=>setMenuPosition(!menuPosition)}>
                <div></div>
                <div></div>
                <div></div>
            </span>
            <aside className="w-80 h-screen bg-gray shadow-md w-fulll  sidemenu" style={{left:menuPosition ? 0:"-100%"}}>
                <div className="position-relative">
                <span className="mobile closeMenu" onClick={()=>setMenuPosition(false)}>X</span>
                <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
                    <div className="text-sm">
                <h1 className="text-white pb-3">Titus Ltd</h1>
                        <Link className="d-block bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" to="/">Expenses</Link>
                        <Link className="d-block bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" to="/add_expense">Add Expense</Link>
                        <Link className="d-block bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300" to="/chart">Chart</Link>
                    </div>
                </div>
                </div>
            </aside>
        </>
    )
}

export default SideMenu
