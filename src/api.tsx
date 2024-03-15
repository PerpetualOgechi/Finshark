// import { queries } from "@testing-library/react";
import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyCompData, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";


interface searchResponse {
    data: CompanySearch[]
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<searchResponse>(
            
            `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=68a4f49a8278f92820658e3e3aa9a120`
        )
        return data
    } catch (error) {
        if(axios.isAxiosError(error)) {
            console.log("error message:", error.message)
            return error.message
        }else{
            console.log("unexpected error:", error)
            return "An unexpected error has occured"
        }
    }
    
}

export const getCompanyProfile = async (query: string) => {
    try{
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=68a4f49a8278f92820658e3e3aa9a120`
        )
        return data
    } catch(error: any) {
        console.log("Error message from API:", error.message)

    }
}


export const getKeyMetrics = async (query: string) => {
    try{
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=68a4f49a8278f92820658e3e3aa9a120`
        )
        return data
    } catch(error: any) {
        console.log("Error message from API:", error.message)

    }
}

export const getIncomeStatement = async (query: string) => {
    try{
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?apikey=68a4f49a8278f92820658e3e3aa9a120`
        )
        return data
    } catch(error: any) {
        console.log("Error message from API:", error.message)

    }
}

export const getBalanceSheet = async (query: string) => {
    try{
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=100&apikey=68a4f49a8278f92820658e3e3aa9a120`
        )
        return data
    } catch(error: any) {
        console.log("Error message from API:", error.message)

    }
}

export const getCashFlowStatement = async (query: string) => {
    try{
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=68a4f49a8278f92820658e3e3aa9a120`
        )
        return data
    } catch(error: any) {
        console.log("Error message from API:", error.message)

    }
}

export const getCompData = async (query: string) => {
    try{
        const data = await axios.get<CompanyCompData[]>(
            `https://financialmodelingprep.com/api/v4/stock-peers?symbol=${query}&apikey=68a4f49a8278f92820658e3e3aa9a120`
        )
        return data
    } catch(error: any) {
        console.log("Error message from API:", error.message)

    }
}