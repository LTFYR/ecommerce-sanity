"use client";
import { Checkout } from "@/features/checkout/Checkout";
import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

const CheckoutPage: NextPage = () => {
  return (
    <Box>
      <Checkout />
    </Box>
  );
};

export default CheckoutPage;
