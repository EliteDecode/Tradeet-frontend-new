import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/index.css";
import App from "./App.jsx";

import {store} from "./services/app/store.js";
import { Provider } from "react-redux";

import Home from "./pages/home/Home.jsx";

import SignUp from "./pages/auths/Registeration/SignUp.jsx";
import ConfirmNumber from "./pages/auths/Registeration/ConfirmNumber.jsx";
import VerificationCode from "./pages/auths/Registeration/VerificationCode.jsx";
import VerificationFailed from "./pages/auths/Registeration/VerificationFailed.jsx";
import VerificationSuccess from "./pages/auths/Registeration/VerificationSuccess.jsx";
import SuccessfulVerification from "./pages/auths/Registeration/SuccessfulVerification.jsx";
import Auths from "./components/AuthComponents/Auths.jsx";
import ForgotPassword from "./pages/auths/forgetPassword/ForgotPassword.jsx";
import Login from "./pages/auths/login/Login.jsx";
import DonationLogin from "./pages/auths/donation/Login.jsx";
import DonationRegistration from "./pages/auths/donation/DonationRegistration.jsx";
import Donation from "./components/donation/Donation.jsx";
import AllOngoingFundraising from "./components/donation/AllOngoingFundraising.jsx";
import DonationDetails from "./components/donation/DonationDetails.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import TrackOrder from "./components/TrackOrder/TrackOrder.jsx";
import IncorrectNumber from "./components/TrackOrder/IncorrectNumber.jsx";
import TrackNumberConfirmation from "./components/TrackOrder/TrackNumberConfirmation.jsx";
import Notification from "./components/Notification/Notification.jsx";
import CampaignForm from "./components/Campaign/CampaignForm.jsx";
import Confirmationscreen from "./components/Campaign/Confirmationscreen.jsx";
import Donor from "./components/donationFlow/Donation";
import DonationLayout from "./components/donationFlow/DonationLayout";
import DonationCharity from "./components/donationFlow/DonationCharity";
import CharityDetail from "./components/donationFlow/CharityDetail";
import DonationItemsFilled from "./components/donationFlow/DonationItemsFilled";
import MailVerification from "./pages/auths/forgetPassword/MailVerification.jsx";
import ResetPassword from "./pages/auths/forgetPassword/ResetPassword.jsx";
import ResetSuccessful from "./pages/auths/forgetPassword/ResetSuccessful.jsx";
import SellerLandingPage from "./components/Seller/SellerLandingPage/SellerLandingPage.jsx";
import SellerSignUpInformation from "./components/Seller/SellerSignUpInfomation/SellerSignUpInformation.jsx";
import SellerBussinessInformation1 from "./components/Seller/SellerBussinessInformation.jsx/SellerBussinessInformation1.jsx";
import SellerBussinessInformation2 from "./components/Seller/SellerBussinessInformation.jsx/SellerBussinessInformation2.jsx";
import SellerPaymentInformation from "./components/Seller/SellerPaymentInformation/SellerPaymentInformation.jsx";
import SellerAddProduct from "./components/Seller/SellerAddProduct/SellerAddProduct.jsx";
import SellerManageProducts from "./components/Seller/SellerManageProducts/SellerManageProducts.jsx";
import SellerPromationPage from "./components/Seller/SellerPromationPage/SellerPromationPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import SearchPageActive from "./components/Search/SearchPageActive.jsx";
import SearchPageEmpty from "./components/Search/SearchPageEmpty.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/donation/all",
        element: <AllOngoingFundraising />,
      },
      {
        path: "/donation/:id",
        element: <DonationDetails />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/products",
        element: (
          <h2 className="h-screen text-2xl flex justify-center items-center">
            In production
          </h2>
        ),
      },
      {
        path: "/promotion",
        element: (
          <h2 className="h-screen text-2xl flex justify-center items-center">
            In production
          </h2>
        ),
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "",
        element: <PrivateRoute />,
        children: [
          {
            path: "/trackOrder",
            element: <TrackOrder />,
          },
        ],
      },

      {
        path: "/incorrectNumber",
        element: <IncorrectNumber />,
      },
      {
        path: "/trackNumberConfirmation",
        element: <TrackNumberConfirmation />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/campaign",
        element: <CampaignForm />,
      },
      {
        path: "/sellerLandingPage",
        element: <SellerLandingPage />,
      },
      {
        path: "/SellerSignUpInformation",
        element: <SellerSignUpInformation />,
      },
      {
        path: "/SellerBussinessInformation1",
        element: <SellerBussinessInformation1 />,
      },
      {
        path: "/SellerBussinessInformation2",
        element: <SellerBussinessInformation2 />,
      },
      {
        path: "/SellerPaymentInformation",
        element: <SellerPaymentInformation />,
      },
      {
        path: "/SellerAddProduct",
        element: <SellerAddProduct />,
      },
      {
        path: "/SellerManageProducts",
        element: <SellerManageProducts />,
      },
      {
        path: "/SellerPromationPage",
        element: <SellerPromationPage />,
      },
      {
        path: "/SearchPageActive",
        element: <SearchPageActive />,
      },
      {
        path: "/SearchPageEmpty",
        element: <SearchPageEmpty />,
      },
      {
        path: "/donor",
        element: <Donor />,
        children: [
          {
            path: "/donor",
            element: <DonationLayout />,
          },
          {
            path: "/donor/charity",
            element: <DonationCharity />,
          },
          {
            path: "/donor/charity/:charityname",
            element: <CharityDetail />,
          },
          {
            path: "/donor/donationitemsfilled",
            element: <DonationItemsFilled />,
          },
        ],
      },
    ],
  },

  {
    path: "/auth",
    element: <Auths />,
    children: [
      {
        path: "/auth",
        element: <SignUp />,
      },
      {
        path: "/auth/confirm",
        element: <ConfirmNumber />,
      },
      {
        path: "/auth/verification",
        element: <VerificationCode />,
      },
      {
        path: "/auth/verification-failed",
        element: <VerificationFailed />,
      },
      {
        path: "/auth/verification-success",
        element: <VerificationSuccess />,
      },
      {
        path: "/auth/successful",
        element: <SuccessfulVerification />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/donation-login",
        element: <DonationLogin />,
      },
      {
        path: "/auth/DonationAuth",
        element: <DonationRegistration />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/auth/forgot-password/verify",
        element: <MailVerification />,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/auth/reset-successful",
        element: <ResetSuccessful />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
