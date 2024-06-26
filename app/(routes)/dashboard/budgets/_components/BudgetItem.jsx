import Link from "next/link";
import React from "react";

const BudgetItem = ({ budget }) => {
  const calcProgressPrecent = () => {
    const perc = (budget?.totalSpend / budget?.amount) * 100;
    return perc.toFixed(2);
  };
  return (
    <div className="p-5 border rounded-lg hover:shadow-md cursor-pointer h-[170px]">
      <Link href={"/dashboard/expenses/" + budget?.id} className=" ">
        <div className=" flex flex-col items-start lg:flex-row lg:items-center justify-between">
          <div className=" flex gap-2 items-center">
            <h2 className=" text-2xl p-3 bg-slate-100 rounded-full px-4">
              {budget?.icon}
            </h2>
            <div>
              <h2 className=" font-bold">{budget?.name}</h2>
              <h2 className=" text-sm text-gray-500">
                {budget?.totalItem} Item
              </h2>
            </div>
          </div>
          <h2 className=" font-bold text-primary text-lg">${budget?.amount}</h2>
        </div>

        <div className=" mt-5">
          <div className=" flex items-center justify-between mb-3">
            <h2 className=" text-xs text-slate-400">
              ${budget?.totalSpend ? budget?.totalSpend : 0} Spend
            </h2>
            <h2 className=" text-xs text-slate-400">
              ${budget?.amount - budget?.totalSpend} Remaning
            </h2>
          </div>
          <div className=" w-full bg-slate-300 h-2 rounded-full">
            <div
              className="bg-primary h-2 rounded-full"
              style={{
                maxWidth: `${calcProgressPrecent()}%`,
              }}
            ></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BudgetItem;
