// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){
    let status = this.document.getElementById("flightStatus");
    let bg = this.document.getElementById("shuttleBackground");
    let shuttleHeight = this.document.getElementById("spaceShuttleHeight");

    let takeoff = this.document.getElementById('takeoff');
    takeoff.addEventListener("click", function(){
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")){
            status.innerHTML = "Shuttle in flight";
            bg.style.backgroundColor='blue';
            height.innerHTML = '10000'
        }
    })

    let landing = this.document.getElementById("landing");
    landing.addEventListener("click", function(){
        if (window.confirm("The shuttle is landing. Landing gear engaged.")){
            status.innerHTML = "The shuttle has landed.";
            bg.style.backgroundColor='green';
            height.innerHTML = '0'
        }
    })
})