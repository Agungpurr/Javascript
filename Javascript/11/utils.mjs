export function buyTollRoadCard(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money >= 25) {
        console.log("buying card");
        resolve({ tollRoadCard: true, balance: 0 });
      } else {
        reject(new Error("not enough money to buy card"));
      }
    }, 1000);
  });
}

export function topUpBalance(card, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (card) {
        console.log("topping up balance");
        resolve({ ...card, balance: card.balance + amount });
      } else {
        reject(new Error("no card"));
      }
    }, 1000);
  });
}

export function useTollRoad(card) {
  const TOLL_PRICE = 10;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (card.balance < TOLL_PRICE) {
        reject(new Error("not enough balance"));
      } else {
        card.balance -= TOLL_PRICE;
        console.log("using toll road");
        resolve();
      }
    }, 1000);
  });
}
