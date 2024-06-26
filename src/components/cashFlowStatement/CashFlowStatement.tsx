import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router';
import { getCashFlowStatement } from '../../api';
import Table from '../table/Table';
import Spinner from '../spinner/Spinner';
import { formatLargeMonetaryNumber } from '../../helpers/NumberFormating';

type props = {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
  },
  ];
  

const CashFlowStatement = (props: props) => {
    const ticker = useOutletContext<string>()
    const [cashFlowData, setCashFlowData] = useState<CompanyCashFlow[]>()
    useEffect(() =>{
        const fetchCashflow = async () => {
            const result = await getCashFlowStatement(ticker!)
            setCashFlowData(result!.data)
        }
        fetchCashflow()
    }, [])
    
  return <>
  {
    cashFlowData ? 
    (
        <>
        <div className='overflow-x-auto'>
          <div className='w-[800px] md:w-full'>
          <Table config={config} data={cashFlowData} />
          </div>
        </div>
        </>
    ) 
    : (
        <Spinner />
    )
  }
  </>
}

export default CashFlowStatement