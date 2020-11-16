//starting variables
// Constants
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];
  
  // Data
  var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
  ];

//Algorithm
//1. Random availability generator
//1.1. Generate the availability

var randomAvailabilityGenerator = () => {
    for (member of myTeam){
        for (i = 0;i < member.availability.length; i++) {
            member.availability[i] = Boolean(Math.round(Math.random()));
        }
    }
}

randomAvailabilityGenerator();

//1.2. Print the availability for each team member

var showTeamAvailability = () => {
    for (member of myTeam){
        console.log("%c%s%s", "font-weight: 900", "Disponibilidad de ", member.name);
        for (i = 0;i < member.availability.length; i++) {
            var availability = member.availability[i] ? "Sí" : "No"
            console.log(WORK_HOURS[i]+": "+availability)
        }
    console.log("------------------")
    }
}

showTeamAvailability();


//2. Look for the first free space for a meeting