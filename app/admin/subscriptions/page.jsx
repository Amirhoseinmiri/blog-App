"use client";
import axios from "axios";
import SubTableItem from "../../../components/adminComponents/SubTableItem";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
const SubScriptions = () => {
  const [emails, setEmails] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("/api/email");
    setEmails(res.data.emails);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deleteEmail = async (id) => {
    const res = await axios.delete("/api/email", { params: { id } });
    if (res.data.success) {
      toast.success(res.data.msg);
      fetchData();
    }
  };
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Subscription</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails?.map((item, i) => (
              <SubTableItem
                email={item.email}
                deleteEmail={deleteEmail}
                date={item.date}
                id={item._id}
                key={i}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubScriptions;
