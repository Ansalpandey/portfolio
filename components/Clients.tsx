"use client";

import React from "react";
import { companies } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <div className="flex justify-center items-center w-full overflow-hidden mt-10">
      {/* Pass companies as items to InfiniteMovingCards */}
      <InfiniteMovingCards
        items={companies.map((company) => ({
          img: company.img,
          name: company.name,
        }))}
      />
    </div>
  );
};

export default Clients;
