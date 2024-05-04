import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import CompanyPage from "../pages/companyPage/CompanyPage";
import HomePage from "../pages/homePage/HomePage";
import SearchPage from "../pages/searchPage/SearchPage";
import CompanyProfile from "../components/companyProfile/CompanyProfile";
import IncomeStatement from "../components/incomeStatement/IncomeStatement";
import DesignPage from "../pages/designPage/DesignPage";
import DesignGuide from "../pages/designGuide/DesignGuide";
import BalanceSheet from "../components/balanceSheet/BalanceSheet";
import CashFlowStatement from "../components/cashFlowStatement/CashFlowStatement";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import ProtectedRout from "./ProtectedRout";
// import LoginPage from "../pages/loginPage/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage />},
            {path: "login", element: <LoginPage />},
            {path: "register", element: <RegisterPage />},
            {path: "search", element: <ProtectedRout><SearchPage /></ProtectedRout>},
            // {path: "design-guide", element: <DesignPage />},
            {path: "design-guide", element: <DesignGuide />},
            {
                path: "company/:ticker",
                element: <ProtectedRout><CompanyPage /></ProtectedRout>,
                children: [
                    {path: "company-profile", element: <CompanyProfile />},
                    {path: "income-statement", element: <IncomeStatement />},
                    {path: "balance-sheet", element: <BalanceSheet />},
                    {path: "cashflow-statement", element: <CashFlowStatement />},
                ]
}
            
        ]
    }
])