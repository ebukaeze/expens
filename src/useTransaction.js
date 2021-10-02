import { useContext } from "react";

import { ExpenseTrackerContext } from './Context/context';


import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";

const useTransaction = (title) => {
 resetCategories();
 const { transactions } = useContext(ExpenseTrackerContext);
 const transactionPerType =  transactions.filter((t) => t.type === title);
 const total = transactionPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
 const categories = title === 'Income' ? incomeCategories : expenseCategories;

 console.log({ transactionPerType, total, categories });

 transactionPerType.forEach((t) => {
     const category = categories.find((c) => c.type === t.category)

     if(category) category.amount += t.amount;
 });

 const filteredCategory = categories.filter((c) => c.amount > 0);

 const chartData = {
     datasets:[
         {
             data: filteredCategory.map((c) => c.amount),
             backgrundColor: filteredCategory.map((c) => c.color),
         }
     ],
     labels: filteredCategory.map((c) => c.type),
 }

   return { filteredCategory, total, chartData } 
}