import SellOnTradeet from "./SellerLandingPageUI/SellOnTradeet";
import SellerLandingPageStartSelling from "./SellerLandingPageUI/SellerLandingPageStartSelling";

function SellerLandingPage() {
  return (
    <div className="font-montserrat">
      {/* Start Selling on Tradeet */}
      <SellerLandingPageStartSelling />

      {/* How to sell on Tradeet */}
      <SellOnTradeet />
    </div>
  );
}

export default SellerLandingPage;
