var json = {
  doItems: [
    {
      title: "Pride @ Kristin School",
      link: "01-09-2022.html",
      img: "https://i.imgur.com/sjGLX5b.png",
      color: "purple-300"
    },
    {
      title: "Campus-wide Composting",
      link: "01-08-2022.html",
      img: "https://i.imgur.com/jFKEGen.png",
      color: "green-200"
    },
    {
      title: "StudentForward, Inter-School Connection",
      link: "01-07-2022.html",
      img: "https://i.imgur.com/L8s3VFt.jpg",
      color: "blue-200"
    },
    {
      title: "Tsunami Research Project / My IB EE",
      link: "01-11-2022.html",
      img: "https://i.imgur.com/y5505xZ.jpg",
      color: "sky-200"
    },
    {
      title: "Kristin School Sustainability Website",
      link: "01-12-2022.html",
      img: "https://i.imgur.com/yFADY7t.png",
      color: "teal-100"
    }
  ]
};

var doPosts = document.getElementsByClassName("do-blog")[0];
var doItems = json.doItems;

//for (var i = 0; i < doItems.length; i++) {
for (var i = 0; i < 3; i++) {
  var div = document.createElement("div");
  div.classList.add(
    "bg-" + doItems[i].color,
    "w-64",
    "h-24",
    "ml-2",
    "mt-2",
    "flex"
  );
  doPosts.appendChild(div);
  var img = document.createElement("img");
  img.classList.add("w-24", "h-24", "object-cover");
  var p = document.createElement("div");
  p.classList.add(
    "not-italic",
    "px-1",
    "text-base",
    "w-40",
    "hover:italic",
    "hover:underline",
    "inline-block",
    "justify-end",
    "pl-3",
    "pt-1",
    "font-serif"
  );
  p.innerHTML =
    "<a href='/things/done/" +
    doItems[i].link +
    "'>" +
    doItems[i].title +
    " > </a>";
  img.setAttribute("src", doItems[i].img);
  div.appendChild(img);
  div.appendChild(p);
}
var btn = document.createElement("div");
btn.classList.add(
  "bg-gray-100",
  "hover:bg-gray-200",
  "ml-2",
  "mt-2",
  "max-h-[3.25rem]"
);

btn.innerHTML =
  "<a class='not-italic px-8 py-3 text-gray-700 w-full flex items-center justify-center hover:italic' href='#' onclick='loadMore'>Load More</a>";
doPosts.appendChild(btn);

function loadMore() {
  for (var i = 3; i < doItems.length; i++) {
    var div = document.createElement("div");
    div.classList.add(
      "bg-" + doItems[i].color,
      "w-64",
      "h-24",
      "ml-2",
      "mt-2",
      "flex"
    );
    doPosts.appendChild(div);
    var img = document.createElement("img");
    img.classList.add("w-24", "h-24", "object-cover");
    var p = document.createElement("div");
    p.classList.add(
      "not-italic",
      "px-1",
      "text-base",
      "w-40",
      "hover:italic",
      "hover:underline",
      "inline-block",
      "justify-end",
      "pl-3",
      "pt-1",
      "font-serif"
    );
    p.innerHTML =
      "<a href='/things/done/" +
      doItems[i].link +
      "'>" +
      doItems[i].title +
      " > </a>";
    img.setAttribute("src", doItems[i].img);
    div.appendChild(img);
    div.appendChild(p);
  }
}
