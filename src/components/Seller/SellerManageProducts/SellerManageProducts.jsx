import { useState } from "react";
import SellerManageProductsBody from "./SellerManageProductsUI/SellerManageProductsBody";

function SellerManageProducts() {
  const [promotion, setPromotion] = useState(false);

  const handleOpenPromotion = () => {
    setPromotion(true);
  };

  const handleClosePromotion = () => {
    setPromotion(false);
  };

  return (
    <div>
      <SellerManageProductsBody
        handleOpenPromotion={handleOpenPromotion}
        handleClosePromotion={handleClosePromotion}
        promotion={promotion}
      />
    </div>
  );
}

export default SellerManageProducts;
