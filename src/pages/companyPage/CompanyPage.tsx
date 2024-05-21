import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../company'
import { getCompanyProfile } from '../../api'
import Sidebar from '../../components/sidebar/Sidebar'
import CompanyDashboard from '../../components/companyDashboard/CompanyDashboard'
import Title from '../../components/title/Title'
import Spinner from '../../components/spinner/Spinner'
import CompFinder from '../../components/compFinder/CompFinder'
import TenkFinder from '../../components/tenkFinder/TenkFinder'
import { BiMenuAltRight } from "react-icons/bi"
import OutsideClickHandler from "react-outside-click-handler"
import SmallSidebar from '../../components/sidebar/SmallSidebar'


interface Props {}

const CompanyPage = (props: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  let {ticker} = useParams()
  const [company, setCompany] = useState<CompanyProfile>()

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!)
      setCompany(result?.data[0])
    }
    getProfileInit()
  }, [])

  const toggleSidebar =() => setSidebarOpen((prev) =>!prev)
  return (
    <div className='flex justify-center'>
      {company? (
        // ct-docs-disable-sidebar-content overflow-x-hidden
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

          <div className='absolute text-[14px] top-[20px]'>
          {
            sidebarOpen && 
             <OutsideClickHandler
            onOutsideClick={toggleSidebar}
            >
           
            <SmallSidebar toggleSidebar={toggleSidebar} /> 
            
            </OutsideClickHandler>

            
          }
          </div>

         
         <Sidebar />
         

          <CompanyDashboard ticker={ticker!}>
            <div className='absolute top-[0] sb:hidden'><button onClick={toggleSidebar}><BiMenuAltRight size={30} /></button></div>
            <Title title="Company Name" subTitle={company.companyName}></Title>
            <Title title="Price" subTitle={"$" + company.price.toString()}></Title>
            <Title title="DCF" subTitle={"$" + company.dcf.toString()}></Title>
            <Title title="Sector" subTitle={company.sector}></Title>
            {/* <CompFinder ticker={company.symbol} /> */}
            <TenkFinder ticker={company.symbol} />
            {/* <p className='bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4'>{company.description}</p> */}
          </CompanyDashboard>

          

        </div>
      ): (
        <Spinner />
      )}
    </div>
  )
}

export default CompanyPage