import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Navbar from '../../components/navbar/Navbar';

import Search from '../../components/search/Search';
import ListPortfolio from '../../components/potfolio/listPortfolio/ListPortfolio';
import CardList from '../../components/cardList/CardList';

interface Props {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([])
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string>("")

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
      
  }

  const onPortfolioCreate = (e: any) => {
    e.preventDefault()
    const exists = portfolioValues.find((value) => value === e.target[0].value)
    if(exists) return;

    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio)
  }

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value
    })
    setPortfolioValues(removed)
  }
 
  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const result = await searchCompanies(search) ;
    if(typeof result === "string") {
      setServerError(result)
    }else if(Array.isArray(result.data)) {
      setSearchResult(result.data)
    }
    
  }
  return (
    <div className="App">
      
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      {serverError && <h3>Unable to connect to API</h3>}
      {/* {!serverError ? <h3>Connected</h3> : <h3>Unable to connect to API</h3>} */}
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
    
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
      
    </div>
  )

}

export default SearchPage