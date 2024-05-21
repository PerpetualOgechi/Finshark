import React from 'react'
import { Link } from 'react-router-dom'
import {FaHome} from "react-icons/fa"


interface Props {
    toggleSidebar: any
}

const SmallSidebar = ({toggleSidebar}: Props) => {
  return (
    // sb:block py-4 px-6 top-0 bottom-0 w-64 bg-white shadow-xl left-0 absolute flex-row flex-nowrap lg:z-10 z-9999 transition-all duration-300 ease-in-out transform md:translate-x-0 -translate-x-full
    <nav className="sb:hidden relative">

            {/* <button className="flex md:hidden items-center justify-center cursor-pointer text-blueGray-700 border-l-0 border-r border-t border-b border-solid border-blueGray-100 text-xl leading-none bg-white rounded-r border border-solid border-transparent absolute left-0 top-0  focus:outline-none z-9998">

              <i className="fas fa-ellipsis-v"></i>
              Hi Dear

            </button> */}

            <div className="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto overflow-x-hidden">

              <div className="flex bg-white p-5 shaddow flex-col items-stretch opacity-100 relative mt-4 overflow-y-auto overflow-x-hidden h-auto z-40 items-center flex-1 rounded w-full">

                <div className="md:flex-col md:min-w-full flex flex-col list-none">

                  <Link onClick={toggleSidebar} to="company-profile" className='flex md:min-w-full text-bluegray-500b text-medium uppercase font-bold items-center pt--1 pb-4 no-underline'>
                    <FaHome />
                    <h6 className='ml-3'>Company profile</h6>
                  </Link>

                  <Link onClick={toggleSidebar} to="income-statement" className='flex md:min-w-full text-bluegray-500b text-medium uppercase font-bold items-center pt--1 pb-4 no-underline'>
                    <FaHome />
                    <h6 className='ml-3'>Income statement</h6>
                  </Link>

                  <Link onClick={toggleSidebar} to="balance-sheet" className='flex md:min-w-full text-bluegray-500b text-medium uppercase font-bold items-center pt--1 pb-4 no-underline'>
                    <FaHome />
                    <h6 className='ml-3'>Balance Sheet</h6>
                  </Link>

                  <Link onClick={toggleSidebar} to="cashflow-statement" className='flex md:min-w-full text-bluegray-500b text-medium uppercase font-bold items-center pt--1 pb-4 no-underline'>
                    <FaHome />
                    <h6 className='ml-3'>Cashflow Statement</h6>
                  </Link>


                </div>

              </div>

            </div>

          </nav>
  )
}

export default SmallSidebar