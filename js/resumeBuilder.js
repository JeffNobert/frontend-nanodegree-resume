var bio = {
	"name": "Jeff Nobert", 
	"role": "Web Developer",
	"contacts": {
		"mobile": "555-555-1111",
		"email": "jeff@jeff.com",
		"github": "JeffNobert",
		"twitter": "JeffNobert",
		"location": "Quebec City, Qc, Canada"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
	"skills": [
		"Java", "SQL", "Backend Developer", "saving the universe"
	],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools": [
	  {
	  	"name": "University of Sherbrooke",
	  	"city": "Sherbrooke, Qc, Canada",
	  	"degree": "BS",
	  	"major": ["CS"],
	  	"dates": 2001,
	  	"location": "2500, boul. de l'Université, Sherbrooke (Québec) CANADA J1K 2R1"
	  },
	  {
	  	"name": "Cegep de l'Outaouais",
	  	"city": "Gatineau, Qc, Canada",
	  	"degree": "DEC",
	  	"major": ["CS"],
	  	"dates": 2007,
	  	"location": "333 Boulevard de la Cité-des-Jeunes, Hull, QC"	
	  }
	],
	"onlineCourses": [
	  {
	  	"title": "Front-End Web Developer Nanodegree",
	  	"school": "Udacity",
	  	"dates": 2015,
	  	"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	  }
	]
}

var work = {
	"jobs": [
	  {
	  	"employer": "Myca",
	  	"title": "Team Lead",
	  	"dates": "2011 - Present",
	  	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae viverra lorem, sed molestie enim. Sed sit amet urna faucibus, dignissim mi non, aliquam lorem. Aenean ullamcorper, nisi in tincidunt molestie, quam mauris vestibulum nisi, in convallis augue erat non sapien. Quisque odio tellus, laoreet at dui vitae, gravida posuere sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed convallis egestas tortor nec placerat. Proin iaculis dapibus tincidunt. Sed tempus nisi eu dapibus rhoncus. Proin gravida gravida dui a elementum. Fusce lacus massa, efficitur venenatis sagittis at, interdum eu mi. Pellentesque accumsan, neque consectetur consectetur pellentesque, mi.",
	  	"location": "2800, rue Louis-Lumière, Suite 200 Québec, Québec G1P 0A4 Canada"
	  },
	  {
	  	"employer": "Korem",
	  	"title": "Java Developer",
	  	"dates": "2008-2009",
	  	"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae viverra lorem, sed molestie enim. Sed sit amet urna faucibus, dignissim mi non, aliquam lorem. Aenean ullamcorper, nisi in tincidunt molestie, quam mauris vestibulum nisi, in convallis augue erat non sapien. Quisque odio tellus, laoreet at dui vitae, gravida posuere sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed convallis egestas tortor nec placerat. Proin iaculis dapibus tincidunt. Sed tempus nisi eu dapibus rhoncus. Proin gravida gravida dui a elementum. Fusce lacus massa, efficitur venenatis sagittis at, interdum eu mi. Pellentesque accumsan, neque consectetur consectetur pellentesque, mi.",
	  	"location": "330 St. Vallier Street East, Suite 240 Quebec, QC G1K 9C5"
	  }
	]
}

var projects = {
	"projects": [
	  {
		"title": "Sample Project 1",
		"dates": "2015",
		"description": "",
		"images": [
			"",""
		]
	 }
	]
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}
work.display = function () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + " " + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$("#education").append(HTMLonlineClasses);

	for(onlineCourse in education.onlineCourses) {		
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedTitleSchool = formattedTitle + " " + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
}

work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.pageX, loc.pageY);
});



function inName(intName) {
	var intNames = intName.trim().split(" ");
	var firstName = capitalizeFirstLetter(intNames[0]);
	var lastName = intNames[0].toUpperCase();
	var formattedName = firstName + " " + lastName;
	return formattedName;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

