import React, {useState, useEffect} from 'react'
import { CompanyBalanceSheet, CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router';
import { getBalanceSheet } from '../../api';
import RatioList from '../ratioList/RatioList';
import Table from '../table/Table';
import Spinner from '../spinner/Spinner';

type props = {}


const config = [
    {
      label: <div className="font-bold">Total Assets</div>,
      render: (company: CompanyBalanceSheet) => company.totalAssets,
    },
    {
      label: "Current Assets",
      render: (company: CompanyBalanceSheet) => company.totalCurrentAssets,
    },
    {
      label: "Total Cash",
      render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
    },
    {
      label: "Property & equipment",
      render: (company: CompanyBalanceSheet) => company.propertyPlantEquipmentNet,
    },
    {
      label: "Intangible Assets",
      render: (company: CompanyBalanceSheet) => company.intangibleAssets,
    },
    {
      label: "Long Term Debt",
      render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
      label: "Total Debt",
      render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
    },
    {
      label: <div className="font-bold">Total Liabilites</div>,
      render: (company: CompanyBalanceSheet) => company.totalLiabilities,
    },
    {
      label: "Current Liabilities",
      render: (company: CompanyBalanceSheet) => company.totalCurrentLiabilities,
    },
    {
      label: "Long-Term Debt",
      render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
      label: "Long-Term Income Taxes",
      render: (company: CompanyBalanceSheet) => company.otherLiabilities,
    },
    {
      label: "Stakeholder's Equity",
      render: (company: CompanyBalanceSheet) => company.totalStockholdersEquity,
    },
    {
      label: "Retained Earnings",
      render: (company: CompanyBalanceSheet) => company.retainedEarnings,
    },
  ];
  

const BalanceSheet = () => {
    const ticker = useOutletContext<string>()
    const [balanceSheet, setbalanceSheet] = useState<CompanyBalanceSheet>()
    useEffect(() => {
        const getData = async () => {
            const value = await getBalanceSheet(ticker)
            setbalanceSheet(value?.data[0])
        }
        getData()
    }, []) 
  return <>
  {
    balanceSheet? 
    (<>
    { <RatioList config={config} data={balanceSheet} /> 
    // <Table config={config} data={balanceSheet} />
    }
    </>) 
    : (
        <Spinner />
    )
  }
  </>
}

export default BalanceSheet