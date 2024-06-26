import React from 'react'


interface Props {
  config: any;
  data: any
}



const RatioList = ({config, data}: Props) => {
  const renderedRows = config.map((row: any) => {
    return (
      <li className='py-3 sm:py-4 shadow'>
        <div className='flex items-center space-x-20'>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {row.label}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {row.subTitle && row.subTitle}
            </p>
          </div>
          <div className="flex text-gray-900 text-base font-semibold items-center">
            {row.render(data)}
          </div>
        </div>
      </li>
    )

  })
  return <div className='bg-white rounded-lg mb-4 ml-4 mt-4 p-4 sm:p-6 h-full'>
    
    
    <ul className="devide-y devided-gray-200">{renderedRows}</ul>
  </div>
  
 
}

export default RatioList