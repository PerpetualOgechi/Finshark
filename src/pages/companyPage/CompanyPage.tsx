import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../company'
import { getCompanyProfile } from '../../api'
import Sidebar from '../../components/sidebar/Sidebar'
import CompanyDashboard from '../../components/companyDashboard/CompanyDashboard'
import Title from '../../components/title/Title'
import Spinner from '../../components/spinner/Spinner'
import CompFinder from '../../components/compFinder/CompFinder'

interface Props {}

const CompanyPage = (props: Props) => {
  let {ticker} = useParams()
  const [company, setCompany] = useState<CompanyProfile>()

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!)
      setCompany(result?.data[0])
    }
    getProfileInit()
  }, [])
  return (
    <div>
      {company? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

          <Sidebar />

          <CompanyDashboard ticker={ticker!}>
            <Title title="Company Name" subTitle={company.companyName}></Title>
            <Title title="Price" subTitle={company.price.toString()}></Title>
            <Title title="Sector" subTitle={company.sector}></Title>
            <Title title="DCF" subTitle={company.dcf.toString()}></Title>
            <CompFinder ticker={company.symbol} />
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