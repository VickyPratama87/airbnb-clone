import React from "react";
import hotel1 from "../assets/hotel1.jpg";
import RentalCard from "./RentalCard";

const Rentals = () => {
  const rentals = [
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
    {
      image: hotel1,
      title: "Ubud, Indonesia",
      describe: "1,638 kilometers away",
      date: "Feb 24 - Mar 1",
      price: "$95 night",
    },
  ];

  return (
    <>
      <div className="px-6 pt-2 pb-4 md:px-10 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10 ">
        {rentals.map((rental) => (
          <RentalCard image={rental.image} title={rental.title} rating={rental.rating} describe={rental.describe} date={rental.date} price={rental.price} />
        ))}
      </div>
    </>
  );
};

export default Rentals;
