"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import CardInfo from "./_components/CardInfo";
import { db } from "@/utils/dbConfig";
import { eq, getTableColumns, sql, desc } from "drizzle-orm";
import { Budgets, Expenses } from "@/utils/schema";
import { RecahrtsBarChart } from "recharts";
import CustomBarChart from "./_components/CustomBarChart";

const Dashboard = () => {
  const { user } = useUser();
  const [budgetList, setBudgetList] = useState([]);
  const [chartWidth, setChartWidth] = useState(500);

  const getBudgetInfo = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
        totalItem: sql`count(${Expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress))
      .groupBy(Budgets.id)
      .orderBy(desc(Budgets.id));

    setBudgetList(result);
    console.log(result);
  };

  useEffect(() => {
    getBudgetInfo();
  }, [user]);

  useLayoutEffect(() => {
    function updateSize() {
      // Update the chart width based on the window width
      setChartWidth(window.innerWidth < 768 ? window.innerWidth - 100 : 500);
      // You can adjust the value (32) based on your layout and padding/margin
    }
    window.addEventListener("resize", updateSize);
    updateSize(); // Call once initially to set the initial width
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className=" p-5 ">
      <h2 className=" font-bold text-3xl">Hi, {user?.fullName} 👋🏻</h2>
      <p className=" text-gray-500">
        Here's what happening with your money, Lets manage your expence
      </p>
      <CardInfo budgetList={budgetList} />
      <div className=" grid grid-cols-1 md:grid-cols-3 mt-6 gap-2">
        <div className=" col-span-2">
          <CustomBarChart budgetlist={budgetList} width={chartWidth} />
        </div>
        <div className=" col-span-1">Other content</div>
      </div>
    </div>
  );
};

export default Dashboard;
