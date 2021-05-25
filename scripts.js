function init (){
    let flight = document.getElementById("flightStatus");
    let takeOff = document.getElementById("takeoff");
    let bkgrnd = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let land = document.getElementById("landing");
    let abort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let rocket = document.getElementById('rocket');
    let shuttleHoriz = 0;
    let shuttleVert = 0;

        /* Part 2:  When the "Take off" button is clicked, the following should happen:  A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d., b.) The flight status should change to "Shuttle in flight.", c.) The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue, d.) The shuttle height should increase by 10,000 miles. */
        takeOff.addEventListener("click", function(){
            let ready = window.confirm("Confirm that shuttle is ready for takeoff.");
            if (ready === true) {
                flight.innerHTML = "Shuttle in flight."
                bkgrnd.style.background = 'blue';
                shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
            }
        })
        /* Part 3:  When the "Land" button is clicked, the following should happen:  a.) A window alert should let the user know "The shuttle is landing. Landing gear engaged.", b.) The flight status should change to "The shuttle has landed.", c.) The background color of the shuttle flight screen should change from blue to green., d.) The shuttle height should go down to 0.*/
        land.addEventListener("click", function(){
           window.alert("The shuttle is landing. Landing gear engaged.");
           flight.innerHTML = "The shuttle has landed."
           bkgrnd.style.background = 'green';
           shuttleHeight.innerHTML = 0;
        })

        /* Part 4:  When the "Abort Mission" button is clicked, the following should happen:  a.) A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d. b.) The flight status should change to "Mission aborted.", c.) The background color of the shuttle flight screen should change from blue to green., d.) The shuttle height should go to 0.*/
        abort.addEventListener("click", function(){
            let confirmAbort = window.confirm("Confirm that you want to abort the mission");
            if (confirmAbort === true){
                flight.innerHTML = "Mission aborted."
                bkgrnd.style.background = 'green';
                shuttleHeight.innerHTML = 0;
            }
        })

        /* Part 5:  When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen: a.) The rocket image should move 10 px in the direction of the button that was clicked., b.) If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.*/    
        up.addEventListener("click", function(){
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
            shuttleVert -= 10;
            rocket.style.top = shuttleVert + 'px';
        })

        down.addEventListener("click", function(){
            if (Number(shuttleHeight.innerHTML) >= 10000) {
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
            }
            shuttleVert += 10;
            rocket.style.top = shuttleVert + 'px';
        })

        right.addEventListener("click", function(){
            shuttleHoriz += 10;
            rocket.style.left = shuttleHoriz + 'px';
        })

        left.addEventListener("click", function(){
            shuttleHoriz -= 10;
            rocket.style.left = shuttleHoriz + 'px';
        })

}

window.addEventListener("load", init);