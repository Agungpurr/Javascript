import { buyTollRoadCard, topUpBalance, useTollRoad } from "./utils.mjs";

async function getTollAccess() {
  try {
    const card1 = await buyTollRoadCard(25);
    const card2 = await topUpBalance(card1, 10);
    await useTollRoad(card2);
  } catch (error) {
    console.log(error.message);
  }
}

// Jangan hapus kode di bawah ini
getTollAccess();
