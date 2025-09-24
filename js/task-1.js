const lists = document.querySelectorAll(".item");

lists.forEach((list) => {
  list.style.backgroundColor = "#f6f6fe";
  list.style.listStyle = "none";
  list.style.padding = "16px";
  list.style.border = "none";
  list.style.borderRadius = "8px";
  list.style.marginBottom = "24px";
  list.style.fontFamily = "Montserrat, sans-serif";
  list.style.fontWeight = "1000";
});

const allInnerItems = document.querySelectorAll("#categories .item ul li");

allInnerItems.forEach((el) => {
  el.style.listStyle = "none";
  el.style.marginBottom = "8px";
  el.style.marginLeft = "0";
  el.style.padding = "8px";
  el.style.height = "40px";
  el.style.border = "1px solid #808080";
  el.style.borderRadius = "4px";
  el.style.fontFamily = "Montserrat, sans-serif";
  el.style.fontWeight = "400";
});

const titles = document.querySelectorAll("#categories .item h2");
titles.forEach((title) => {
  title.style.marginTop = "0";
  title.style.marginBottom = "0";
});

const categoriesEl = document.querySelectorAll("#categories .item");

console.log("Number of categories:", categoriesEl.length);

categoriesEl.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});

const nestedLists = document.querySelectorAll("#categories .item ul");

nestedLists.forEach((ul) => {
  ul.style.padding = "0";
});
