"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "sonner";

const AddExpense = ({ budgetId, refreshData }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const addNewExpence = async () => {
    const result = await db
      .insert(Expenses)
      .values({
        name: name.toUpperCase(),
        amount: amount,
        budgetId: budgetId,
        createdAt: moment().format("DD/MM/yyyy"),
      })
      .returning({ insertedId: Budgets.id });

    console.log(result);
    if (result) {
      refreshData();
      toast("New Expence Added!");
      setName("");
      setAmount(0);
    }
  };

  return (
    <div className=" border p-5 rounded-lg">
      <h2 className=" font-bold text-lg">Add Expense</h2>
      <div className=" mt-2">
        <h2 className=" text-black font-medium my-1">Exspence Name</h2>
        <Input
          placeholder="e.g. Bedroom Decor"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className=" mt-2">
        <h2 className=" text-black font-medium my-1">Expence amount</h2>
        <Input
          type="number"
          placeholder="e.g. 1000$"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <Button
        onClick={() => addNewExpence()}
        disabled={!(name && amount)}
        className="mt-3 w-full"
      >
        Add New Expence
      </Button>
    </div>
  );
};

export default AddExpense;
