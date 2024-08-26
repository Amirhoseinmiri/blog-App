"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const SubTableItem = ({ email, id, date, deleteEmail }) => {
  const emailDate = new Date(date);
  return (
    <tr className="bg-white border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : "no Email"}
      </th>
      <td className="px-6 py-4 hidden sm:block">{emailDate.toDateString()}</td>
      <td className="px-6 py-4">
        <Image
          src={assets.delteIcon}
          width={20}
          height={20}
          alt="delete icon"
          onClick={() => deleteEmail(id)}
          className="cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default SubTableItem;
