var json = {
  doItems: [
    {
      title: "Pride @ Kristin School",
      link: "/things/done/01-09-2022.html",
      img: "https://i.imgur.com/sjGLX5b.png",
      color: "purple-300"
    },
    {
      title: "Campus-wide Composting",
      link: "/things/done/01-08-2022.html",
      img: "https://i.imgur.com/jFKEGen.png",
      color: "green-200"
    },
    {
      title: "StudentForward, Inter-School Connection",
      link: "/things/done/01-07-2022.html",
      img: "https://i.imgur.com/L8s3VFt.jpg",
      color: "sky-200"
    },
    {
      title: "Tsunami Research Project / My IB EE",
      link:
        "https://docs.google.com/document/u/1/d/e/2PACX-1vR5uNeS-f968KCeJ7kxjDhZ-IpYNilVJj_s3dY_Fbs5ZxoUS6N-XdUOgYUhLSNvs2rIXSBCzWT3Qb8D/pub",
      img: "https://i.imgur.com/2rkt8Bn.jpg",
      color: "blue-200"
    },
    {
      title: "Kristin School Sustainability Website",
      link: "https://kristinsustainability.school.nz",
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
  p.innerHTML = `<a onclick="document.getElementById('img${i}').style.display='inline'" href='${doItems[i].link}'>${doItems[i].title} ></a> <img id='img${i}' class='w-[35px] hidden' src='https://i.imgur.com/ztoT0Sf.gif'></img>`;
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
  "<a class='not-italic px-8 py-3 text-gray-700 w-full flex items-center justify-center hover:italic' href='#' onclick='loadMore()'>Load More</a>";
doPosts.appendChild(btn);

function loadMore() {
  btn.remove();
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
    p.innerHTML = `<a onclick="document.getElementById('img${i}').style.display='inline'" href='${doItems[i].link}' target="_blank">${doItems[i].title}</a> <img id='img${i}' class='w-[30px] hidden' src='https://i.imgur.com/ztoT0Sf.gif' onclick="this.style.visibility='visible';"> </img>`;
    img.setAttribute("src", doItems[i].img);
    div.appendChild(img);
    div.appendChild(p);
  }
}
