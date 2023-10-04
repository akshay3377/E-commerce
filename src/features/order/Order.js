import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Order() {
  const dispatch = useDispatch();
  const order = useSelector();

  return (
    <div>
      <div>order</div>
    </div>
  );
}
