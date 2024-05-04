import React, { useEffect, useState } from 'react'
import { CompanyTenK } from '../../company'
import { getTenk } from '../../api'
import TenkFinderItem from './tenkFinderItem/TenKFinderItem'
import Spinner from '../spinner/Spinner'

type Props = {
    ticker: string
}

const TenkFinder = ({ticker}: Props) => {
    const [companyData, setcompanyData] = useState<CompanyTenK[]>()
    useEffect(() => {
        const getTenKData = async () => {
            const value = await getTenk(ticker)
            setcompanyData(value?.data)
        }
        getTenKData()
    }, [])
  return (
    <div className='inline-flex rounded-md shadow-sm m-4'>
        {
            companyData? (
                companyData.slice(0, 5).map((tenk) => {
                    return <TenkFinderItem tenK={tenk} />
                })
            ) : (
                <Spinner />
            )
        }
    </div>
  )
}

export default TenkFinder