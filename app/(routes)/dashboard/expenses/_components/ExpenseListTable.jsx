"use client";
import { Trash } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { db } from "@/utils/dbConfig";
import { Expenses } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";

const ExpenseListTable = ({ expensesList, refreshData }) => {
  const deleteExpence = async (expence) => {
    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, expence.id))
      .returning();

    if (result) {
      toast("Expence Deleted!");
      refreshData();
    }
  };
  return (
    <div className=" mt-3">
      <div className=" grid grid-cols-4 bg-slate-200 p-2">
        <h2 className=" font-bold">Name</h2>
        <h2 className=" font-bold">Amount</h2>
        <h2 className=" font-bold">Date</h2>
        <h2 className=" font-bold">Action</h2>
      </div>
      {expensesList.map((expence, index) => (
        <div key={uuidv4()} className=" grid grid-cols-4 bg-slate-50 p-2">
          <h2>{expence.name}</h2>
          <h2>{expence.amount}</h2>
          <h2>{expence.createdAt}</h2>
          <h2>
            <Trash
              className=" text-red-600 cursor-pointer"
              onClick={() => deleteExpence(expence)}
            />
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ExpenseListTable;
