//
// index page js
//

// show hostname of this server
const showHostName = ()=>{
  // hostname
  const hostValue = location.hostname;
  // dom area
  const hostArea = document.getElementById("main-hostname");
  if (hostArea) {
    hostArea.innerHTML = `${hostValue}`;
  }
}

// register event listener
window.addEventListener("load", ()=>{
  showHostName();
});
