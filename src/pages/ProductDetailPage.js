import React from "react";
import Navbar from "../features/navbar/navbar";

import ProductDetail from "../features/product/components/productDetail";

export default function ProductDetailPage() {
  return (
    <div>
      <Navbar>
        <ProductDetail />
      </Navbar>
    </div>
  );
}
