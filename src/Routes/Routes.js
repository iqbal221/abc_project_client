import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LoginPage from "../Pages/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage";
import CreatePage from "../Pages/CreatePage";
import SummaryPage from "../Pages/SummaryPage";
import TotalTypePage from "../Pages/TotalTypePage";
import DashboardPage from "../Pages/DashboardPage";
import UpdatePage from "../Pages/UpdatePage";
import SalaryPage from "../Pages/Head/SalaryPage";
import SellPage from "../Pages/Head/SellPage";
import OfficeRentPage from "../Pages/Head/OfficeRentPage";
import StationaryPage from "../Pages/Head/StationaryPage";



export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<LoginPage></LoginPage>
            },
            {
                path:"/registration",
                element:<RegistrationPage></RegistrationPage>
            },
            {
                path:"/CreatePage",
                element:<CreatePage></CreatePage>
            },
            {
                path:"/SummaryPage",
                element:<SummaryPage></SummaryPage>
            },
            {
                path:"/TotalTypePage",
                element:<TotalTypePage></TotalTypePage>
            },
            {
                path:"/DashboardPage",
                element:<DashboardPage></DashboardPage>
            },
            {
                path:"/SalaryPage",
                element:<SalaryPage></SalaryPage>
            },
            {
                path:"/SellPage",
                element:<SellPage></SellPage>
            },
            {
                path:"/OfficeRentPage",
                element:<OfficeRentPage></OfficeRentPage>
            },
            {
                path:"/StationaryPage",
                element:<StationaryPage></StationaryPage>
            },
            {
                path:"/SummaryPage",
                element:<SummaryPage></SummaryPage>
            },
            {
                path:"/UpdatePage/:id",
                element:<UpdatePage></UpdatePage>
            },
        ]
    }
])