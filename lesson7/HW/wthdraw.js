export const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client);
  const balanceOfClient = balances[indexOfClient];

  if (amount > balanceOfClient) {
    return -1;
  } else {
    return balanceOfClient - amount;
  }
};
// =
// export const withdraw = (clients, balances, client, amount) => {
//   const indexOfClient = clients.indexOf(client);

//   if (amount > balances[indexOfClient]) {
//     return -1;
//   }
//   return balances[indexOfClient] - amount;
// };
// =
// export const withdraw = (clients, balances, client, amount) => {
//   const indexOfClient = clients.indexOf(client);
//   return amount > balances[indexOfClient] ? -1 : balances[indexOfClient] - amount;
// };

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
// //output
//37
//и массив balances должен быть [1400, 37, -6]
