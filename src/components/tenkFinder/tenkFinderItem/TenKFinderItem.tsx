import React from 'react'
import { Link } from 'react-router-dom'
import { CompanyTenK } from '../../../company'

type Props = {
    tenK: CompanyTenK
}

const TenkFinderItem = ({ tenK }: Props) => {
    const fillingDate = new Date(tenK.fillingDate).getFullYear()
  return <Link
  reloadDocument
  to={tenK.finalLink}
  type='button'
  className='inline-flex items-center p-4 text-md mr-5 text-white bg-lightGreen rounded-md'>10k - {tenK.symbol} - {fillingDate}</Link>
}

export default TenkFinderItem