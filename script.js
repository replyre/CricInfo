import { APIKEY } from "./config.js";
let MatchData = "";
let filterData = "";
async function getmatches() {
  document.querySelector(
    ".matches"
  ).innerHTML = `<div class="loading"><img src="./loading.gif"></div>`;
  const res = await fetch(
    `https://api.cricapi.com/v1/cricScore?apikey=${APIKEY}`
  );
  const Data = await res.json();
  MatchData = Data;
  console.log(Data);
  console.log(
    Data.data.filter((e) => {
      return e.t1 == "" || e.t2 == "";
    })
  );
  filterData = Data.data;
  showMatches(Data.data);
}
getmatches();

// showMatches(MatchData.data);
function showMatches(data) {
  if (data.length === 0) {
    document.querySelector(
      ".matches"
    ).innerHTML = `<div class="loading"><img src="./out.gif"> Not Found</div>`;
    return;
  }
  document.querySelector(
    ".matches"
  ).innerHTML = `<div class="loading"><img src="./loading.gif"></div>`;

  document.querySelector(".matches").innerHTML = "";
  data.map((match) => {
    const match_tile = document.createElement("div");
    match_tile.classList.add("match-tile");
    match_tile.innerHTML = `<p>${match.series}</p> 
  <div class="teams">
  <div class="t1">
  <img src="${match.t1img || "./cricket.png"}">
 ${match.t1.split("[")[1] ? match.t1.split("[")[1].split("]")[0] : match.t1}
  <span class="score"> ${match.t1s === "" ? "--" : match.t1s}</span>
  </div>
    <div class="status">
    <img src="./vs.png"/ width="40px"> 
    <p>${match.status}</p>
    </div>
  <div class="t2">
  <img src="${match.t2img || "./cricket.png"}">
  ${match.t2.split("[")[1] ? match.t2.split("[")[1].split("]")[0] : match.t2}
  <span class="score"> ${match.t2s === "" ? "--" : match.t2s}</span>
  </div>
  </div>`;
    document.querySelector(".matches").appendChild(match_tile);
  });
  document.querySelector(".load").classList.remove("animate");
  document.querySelector(".load").style.pointerEvents = "auto";
  // console.log(data);
}

["change", "keydown"].forEach((evt) =>
  document.querySelector("input").addEventListener(evt, (e) => {
    const filterSearchData = filterData.filter((match) => {
      return (
        match.series.includes(e.target.value) ||
        match.t2.includes(e.target.value.toUpperCase()) ||
        match.t1.includes(e.target.value.toUpperCase())
      );
    });
    // console.log(filterData);
    clearStatus();
    showMatches(filterSearchData);
  })
);

document.querySelector("select").addEventListener("change", (e) => {
  if (e.target.value == "all") {
    filterData = MatchData.data;
    showMatches(filterData);
    document.querySelector("input").value = "";
    return;
  }
  filterData = MatchData.data.filter((ele) => {
    return ele.matchType == e.target.value;
  });
  // console.log(filterData);
  showMatches(filterData);
  document.querySelector("input").value = "";
  clearStatus();
});

document.querySelector(".load").addEventListener("click", (e) => {
  document.querySelector(".load").classList.add("animate");
  document.querySelector(".load").style.pointerEvents = "none";
  document.querySelector("input").value = "";
  document.querySelector("select").value = "all";
  document.querySelector(".completed").style.backgroundColor =
    " rgba(129, 185, 241, 0.473)";
  document.querySelector(".completed").style.color = "black";
  document.querySelector(".live").style.backgroundColor =
    "rgba(129, 185, 241, 0.473)";
  document.querySelector(".live").style.color = "black";
  getmatches();
});
let live = false;
document.querySelector(".live").addEventListener("click", (e) => {
  if (!live) {
    clearAll();
    document.querySelector(".live").style.backgroundColor =
      "rgba(241, 129, 129, 0.473)";
    document.querySelector(".live").style.color = "red";
    live = true;
    const filterData = MatchData.data.filter((e) => {
      return (
        !e.status.includes("won") &&
        !e.status.includes("start") &&
        !e.status.includes("tied")
      );
    });
    // console.log(filterData);
    showMatches(filterData);
  } else {
    clearAll();
    document.querySelector(".live").style.backgroundColor =
      " rgba(129, 185, 241, 0.473)";
    document.querySelector(".live").style.color = "black";
    live = false;
    showMatches(MatchData.data);
  }
});

let completed = false;
document.querySelector(".completed").addEventListener("click", (e) => {
  if (!completed) {
    clearAll();
    document.querySelector(".completed").style.backgroundColor =
      "rgba(159, 241, 129, 0.473)";
    document.querySelector(".completed").style.color = "green";
    completed = true;
    const filterData = MatchData.data.filter((e) => {
      return e.status.includes("won");
    });
    // console.log(filterData);
    showMatches(filterData);
  } else {
    clearAll();
    document.querySelector(".completed").style.backgroundColor =
      " rgba(129, 185, 241, 0.473)";
    document.querySelector(".completed").style.color = "black";
    completed = false;
    showMatches(MatchData.data);
  }
});

function clearAll() {
  document.querySelector("input").value = "";
  document.querySelector("select").value = "all";
  document.querySelector(".completed").style.backgroundColor =
    " rgba(129, 185, 241, 0.473)";
  document.querySelector(".completed").style.color = "black";
  document.querySelector(".live").style.backgroundColor =
    "rgba(129, 185, 241, 0.473)";
  document.querySelector(".live").style.color = "black";
  live = false;
  completed = false;
}

function clearStatus() {
  document.querySelector(".completed").style.backgroundColor =
    " rgba(129, 185, 241, 0.473)";
  document.querySelector(".completed").style.color = "black";
  document.querySelector(".live").style.backgroundColor =
    "rgba(129, 185, 241, 0.473)";
  document.querySelector(".live").style.color = "black";
  live = false;
  completed = false;
}
