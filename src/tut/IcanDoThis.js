const items = [
  { id: "m1", name: "Sushi", amount: 1, price: 22.99 },
  { id: "m2", name: "Schnitzel", amount: 3, price: 16.5 },
  { id: "m3", name: "Barbecue Burger", amount: 1, price: 12.99 },
];

// parasyti funkicja kuri ima masyva ir id kaip argumenta
// ir grazina masyva be to nario kurio id buvo paduota

function removeOne(arr, id) {
  console.log("delete ran");
}

// delete (items, m1); // =>
// [
//    { id: "m2", name: "Schnitzel", amount: 3, price: 16.5 },
//    { id: "m3", name: "Barbecue Burger", amount: 1, price: 12.99 },
//]

// console.log("test");

function decrOne(arr, id) {}
// parasyti funkcija kuri pamazina kiek vientetu jei kiekis daugiau uz 1

function delteOrDecrese(arr, id) {
  // abu dalukus
  // parasyti funkcija kuri pamazina kiek vientetu jei kiekis daugiau uz 1
  // parasyti funkicja kuri ima masyva ir id kaip argumenta
  // ir grazina masyva be to nario kurio id buvo paduota
  /* 
  1. Atsirinkti objektu su kuriuo dirbsim // { id: "m2", name: "Schnitzel", amount: 3, price: 16.5 },
  2. jei amount > 1 
  2.1 sumazinam amount
  2.2 kitu atveju pasalinam ta item
  */
  let updatedItems;
  const foundItem = arr.find((item) => item.id === id);
  console.log({ foundItem });

  if (foundItem.amount > 1) {
    updatedItems = arr.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
  } else if (foundItem.amount === 1) {
    // grazinam masyva be rasto item
    updatedItems = arr.filter((item) => item.id !== id);
  }

  console.log("updatedState", updatedItems);
}

delteOrDecrese(items, "m3");
