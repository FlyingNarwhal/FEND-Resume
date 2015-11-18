var bio = {
	"name": "Joe Dahle",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "(623) 349-1206",
		"email": "joe.dahle@gmail.com",
		"github": "https://github.com/FlyingNarwhal",
		"twitter": "@FlyingNarwhal",
		"location": "Phoenix, Arizona"
	},
	"welcomeMessage": "Resume for me, and stuff",
	"skills": ["HTML", " CSS", " JavaScript"],
	"bioPic": "images/fry.jpg",
	"display": function() {
		// variables for header
		var formattedName    	  = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole    	  = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPic     	  = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedMobile  	  = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail   	  = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGit     	  = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter 	  = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation	  = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedSkills     = HTMLskills.replace("%data%", bio.skills);

		// append header variables to page
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGit);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(formattedPic);
		$("#header").append(HTMLskillsStart);	
		for(skill in bio.skills){
			formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#header").append(formattedSkills);
		}
	}
}

var education = {
	"schools": [],
	"onlineCourses": [{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"date": "December 31st 2015",
		"url": "https://udacity.com"
	}],
	"display": function() {
		for(course in education.onlineCourses){
			//variables for online courses
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

			//append online course HTML
			$("#education").append(HTMLschoolStart)
			$(".education-entry").append(formattedOnlineTitle);
			$(".education-entry").append(formattedOnlineSchool);
			$(".education-entry").append(formattedOnlineDates);
			$(".education-entry").append(formattedOnlineURL);
		}
	}
}

var work = {
	"jobs": [{
		"employer": "Florence Unified School District",
		"title": "Bus Driver",
		"location": "San Tan Valley, Arizona",
		"dates": "May 2015 - Currently",
		"description": "I drive kids all over town."
	},
	{
		"employer": "Kroger",
		"title": "Day Stock",
		"location": "San Tan Valley, Arizona",
		"dates": "May 2011 - March 2013",
		"description": "I put stuff on shelves and stuff."
	}],
	"display": function() {
		$("#workExperience").append(HTMLworkStart);
		for(job in work.jobs){
			//variables for work
			var formattedEmployer        = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle           = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkLocation    = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWorkDate        = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			// append work values
			$(".work-entry").append(formattedEmployer);
			$(".work-entry").append(formattedTitle);
			$(".work-entry").append(formattedWorkLocation);
			$(".work-entry").append(formattedWorkDate);
			$(".work-entry").append(formattedWorkDescription);
		}
	}
};

var projects = {
	"projects": [{
		"title": "Sous Chef",
		"dates": "Currently developing",
		"description": "Stop wondering what's for dinner, let's start cooking instead.",
		"images": ["file:///home/joe/Dropbox/udacity/resume/images/souschef.png"]
	}],
	"display": function() {
		$("#projects").append(HTMLprojectStart);
		for(project in projects.projects){
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			
			$(".project-entry").append(formattedProjectTitle);
			$(".project-entry").append(formattedProjectDate);
			$(".project-entry").append(formattedProjectDescription);
			$(".project-entry").append(formattedProjectImage);
		}

	}
};

function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

work.display();
bio.display();
education.display();
projects.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);