"use client";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ExpenseListTable from "./_components/ExpenseListTable";

const ExpencesPage = () => {
  const { user } = useUser();
  const [expensesList, setExpensesList] = useState([]);
  const isMounted = useRef(true);

  const getAllExpences = useMemo(
    () =>
      async function getAllExpences() {
        const result = await db
          .select({
            id: Expenses.id,
            name: Expenses.name,
            amount: Expenses.amount,
            createdAt: Expenses.createdAt,
          })
          .from(Budgets)
          .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
          .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
          .orderBy(desc(Expenses.id));

        if (isMounted.current) {
          setExpensesList(result);
          console.log(result);
        }
      },
    [user]
  );

  useEffect(() => {
    getAllExpences();
  }, [getAllExpences]);

  return (
    <div className="p-5">
      <div>
        <h2 className="font-bold text-2xl">
          {user?.fullName.toUpperCase()}, Here is all your expenses
        </h2>

        <div>
          <ExpenseListTable
            expensesList={expensesList}
            refreshData={getAllExpences}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpencesPage;
