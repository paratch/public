// show hostname of this server
const showHostName = ()=>{
    const hostValue = location.hostname;
    
    const hostArea = document.getElementById("main-hostname"); 
    hostArea.innerHTML = `${hostValue}`;
}

// register event listener
window.addEventListener('load', ()=>{
  showHostName();
});
