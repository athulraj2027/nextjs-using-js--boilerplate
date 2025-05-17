"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import axios from "axios";
import CheckoutButton from "./CheckOutButton";

const CardWrapper = ({ title, price, features, upGradeBtn }) => {
  const purchaseHandler = async () => {
    try {
      const response = await axios.post("/api/purchase/");
    } catch (error) {
      console.error("Errorr in purchasing :", error);
    }
  };
  return (
    <Card className="bg-amber-300 shadow-2xl flex flex-col justify-around text-white text-center p-3 py-5 sm:h-[400px] w-[300px]">
      {" "}
      <CardHeader>
        <CardTitle className="text-5xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <h1 className="text-4xl font-bold text-blue-500">₹ {price}</h1>
        <h2 className="text-xl">Features</h2>
        <ul>
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        {upGradeBtn ? <CheckoutButton price={price} plan={title} /> : null}
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
