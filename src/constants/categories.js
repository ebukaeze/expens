const incomeColors = ["#d233ce", "#154731", "#165f40", "#16784f", "#14915f", "#10ac6e", "#123123", "#164d3e", "#1f333f"];
const expenseColors = ["#b2cc43", "#b50d12", "#bf2f1f", "#c9452c", "#d3583a", "#dc6a48", "#e5758", "#e22dd4", "#fc1f11"];



export const incomeCategories = [
    { type: 'Business', amount: 0, color: incomeColors[0] },
    { type: 'Investment', amount: 0, color: incomeColors[1] },
    { type: 'Salary', amount: 0, color: incomeColors[2] },
    { type: 'Labour', amount: 0, color: incomeColors[3] },
    { type: 'Services', amount: 0, color: incomeColors[4] },
    { type: '', amount: 0, color: incomeColors[5] },
    { type: 'Business', amount: 0, color: incomeColors[6] },
    { type: 'Business', amount: 0, color: incomeColors[7] },
    { type: 'Other', amount: 0, color: incomeColors[8] },

];

export const expenseCategories = [
    { type: 'Food', amount: 0, color: expenseColors[0] },
    { type: 'Travel', amount: 0, color: expenseColors[1] },
    { type: 'Utility Bill', amount: 0, color: expenseColors[2] },
    { type: 'Rent', amount: 0, color: expenseColors[3] },
    { type: 'Health', amount: 0, color: expenseColors[4] },
    { type: 'Education', amount: 0, color: expenseColors[5] },
    { type: 'Family', amount: 0, color: expenseColors[6] },
    { type: 'Miscelleanous', amount: 0, color: expenseColors[7] },
    { type: 'Other', amount: 0, color: expenseColors[8] },

]


expenseCategories.forEach((expense, index) => {
    
})