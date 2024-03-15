import React from 'react'
import Table from '../../components/table/Table'
import RatioList from '../../components/ratioList/RatioList'
import { testIncomeStatementData } from '../../components/table/testData';

type props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
  },
  
];


const DesignGuide = (props: props) => {
  return (
    <>
        <h1>Perpy's Design page</h1>
        <h3>Design-guide - This is a design guide for Perpy's Design. These are reuseable components of the app with breif instructions on how to use them.</h3>
        <RatioList data={testIncomeStatementData} config={tableConfig} />
        <Table data={testIncomeStatementData} config={tableConfig} />
        <h3>
         Table - Table takes in a configuration object and company data as params. use the configs to style your table.
        </h3>
    </>
  )
}

export default DesignGuide