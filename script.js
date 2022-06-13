let saveBtns = ["9amSave", "10amSave", "11amSave", "12pmSave", "1pmSave", "2pmSave", "3pmSave", "4pmSave", "5pmSave", "6pmSave", "7pmSave"];
let textareaIds = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

//set current date
var currDate = moment();
$("#currentDay").text(currDate.format("dddd, MMMM Do"));

//add event listeners to save buttons
for(let i = 0; i < saveBtns.length; i++){
    let saveBtn = document.getElementById(saveBtns[i]);

    saveBtn.addEventListener("click", () => {
        let textId = saveBtns[i].slice(0,-4);
        let textInput = document.getElementById(textId); 
        let text = textInput.value;
        
        localStorage.setItem(textId, text);
                  
    })
}


let textAreas = () => {
    
    //background-color to indicate past, present, or future
    var now = moment().hours();
    
    for(let i = 0; i < textareaIds.length; i++) {
        let timeSlot = document.getElementById(textareaIds[i]);
        let timeId = timeSlot.id;
        let amPm = timeId.slice(-2);
        let hour = timeId.slice(0,-2);
        let time;

        if(amPm == "pm" && timeId !== "12pm") {
            time = Number(hour) + 12;
            console.log(timeId)
        } else {
            time = hour;
        }

        if(now > time) {
            timeSlot.classList.add("past")
        } else if (now < time) {
            timeSlot.classList.add("future")
        } else {
            timeSlot.classList.add("present")

        }
        
        let getInput = window.localStorage.getItem(timeId) || [];
        timeSlot.textContent = getInput;

    }

}

textAreas();