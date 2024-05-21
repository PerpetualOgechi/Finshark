import React from 'react'
// import { testIncomeStatementData } from './testData'
// import { type } from 'os'
// import { render } from '@testing-library/react'




interface Props {
    config: any;
    data: any
}



const Table = ({config, data}: Props) => {
    const renderRows = data.map((company: any) => {
        return (
            <tr key={company.cik}>
                {config.map((val: any) => {
                    return (
                        <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>{val.render(company)}</td>   
                    )
                })}
                
            </tr>
        )
    })
    // const renderedHeaders = configs.map((config: any) => {
    //     return (
    //         <th 
    //         className='p-4 text-left text-sm font-medium text-grey-500 uppercase tracking-wider' 
    //         key={config.label}
            
    //         >{config.labal}</th>
    //     )
    // })

    const renderedHeaders = config.map((config: any) => {
        return (
            
            <th 
            className='p-4  text-center text-sm font-medium text-grey-500 uppercase tracking-wider' 
            key={config.label}
            
            >{config.label}</th>
            

        )
        
    })

    
   
  return (
    <div className='bg-white min-w-full  p-4 sm: p-6 xl: p-8 '>
        <table className='w-full '>
            <thead className='shadow bg-gray-100 rounded-lg min-w-full  m-5'>{renderedHeaders}</thead>
            <tbody>{renderRows}</tbody>
        </table>
    </div>
  )
}

export default Table