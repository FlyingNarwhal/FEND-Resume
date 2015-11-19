var data = "%data%";

var bio = {
	"name": "Joe Dahle",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "(623) 349-1206",
		"email": "joe.dahle@gmail.com",
		"github": "FlyingNarwhal",
		"twitter": "@FlyingNarwhal",
		"location": "Phoenix, Arizona"
	},
	"welcomeMessage": "Resume for me, and stuff",
	"skills": ["HTML", " CSS", " JavaScript"],
	"bioPic": "images/fry.jpg",
	"display": function() {
		// variables for header
		var $header = $("#header");
		var $topContacts = $("#topContacts");
		var $footerContacts = $("#footerContacts");

		var formattedName    	  = HTMLheaderName.replace(data, bio.name);
		var formattedRole    	  = HTMLheaderRole.replace(data, bio.role);
		var formattedPic     	  = HTMLbioPic.replace(data, bio.bioPic);
		var formattedMobile  	  = HTMLmobile.replace(data, bio.contacts.mobile);
		var formattedEmail   	  = HTMLemail.replace(data, bio.contacts.email);
		var formattedGit     	  = HTMLgithub.replace(data, bio.contacts.github);
		var formattedTwitter 	  = HTMLtwitter.replace(data, bio.contacts.twitter);
		var formattedLocation	  = HTMLlocation.replace(data, bio.contacts.location);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace(data, bio.welcomeMessage);
		var formattedSkills     = HTMLskills.replace(data, bio.skills);

		// append header variables to page
		$header.prepend(formattedName, formattedRole);
		$topContacts.append(formattedMobile, formattedEmail, formattedGit, formattedTwitter, formattedLocation);
		$header.append(formattedWelcomeMsg, formattedPic, HTMLskillsStart);
		$footerContacts.append(formattedMobile, formattedEmail, formattedGit, formattedTwitter, formattedLocation);

		for(var skill in bio.skills){
			formattedSkills = HTMLskills.replace(data, bio.skills[skill]);
			$header.append(formattedSkills);
		}
	}
};

var education = {
	"schools": [{
		"school": {
			"name": "MIT",
			"location": "Cambridge, Massachusetts",
			"degree": "Computer Science",
			"majors": ["Computer Science"],
			"dates": "2011-2015",
			"url": "web.mit.edu"
		}
	}],
	"onlineCourses": [{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"date": "2015",
		"url": "https://udacity.com"
	}],
	"display": function() {
		var $edu = $("#education");
		$edu.append(HTMLschoolStart);
		for(var i = 0; i < education.schools.length; i++){
			var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].school.name);
			var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[i].school.degree);
			var formattedschoolDate = HTMLschoolDates.replace(data, education.schools[i].school.dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].school.location);
			var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].school.majors);

			//apply formatted text
			$(".education-entry").append(formattedSchoolName,
																	formattedSchoolDegree,
																	formattedschoolDate,
																	formattedSchoolLocation,
																	formattedSchoolMajor);
		}

		$edu.append(HTMLonlineClasses);		
		$edu.append(HTMLonlineStart);

		for(var course in education.onlineCourses){
			//variables for online courses

			var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[course].school);
			var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[course].date);
			var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[course].url);

			//append online course HTML
			$(".online-entry").append(formattedOnlineTitle, 
															formattedOnlineSchool,
															formattedOnlineDates,
															formattedOnlineURL);
		}
	}
};

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
		for(var job in work.jobs){
			//variables for work
			var formattedEmployer        = HTMLworkEmployer.replace(data, work.jobs[job].employer);
			var formattedTitle           = HTMLworkTitle.replace(data, work.jobs[job].title);
			var formattedWorkLocation    = HTMLworkLocation.replace(data, work.jobs[job].location);
			var formattedWorkDate        = HTMLworkDates.replace(data, work.jobs[job].dates);
			var formattedWorkDescription = HTMLworkDescription.replace(data, work.jobs[job].description);

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
		"images": ["images/souschef.png"]
	}],
	"display": function() {
		$("#projects").append(HTMLprojectStart);
		for(var project in projects.projects){
			var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
			var formattedProjectDate = HTMLprojectDates.replace(data, projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
			var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[project].images);
			
			$(".project-entry").append(formattedProjectTitle);
			$(".project-entry").append(formattedProjectDate);
			$(".project-entry").append(formattedProjectDescription);
			$(".project-entry").append(formattedProjectImage);
		}

	}
};

// function inName(name) {
// 	name = name.trim().split(" ");
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	return name[0] + " " + name[1];
// }

work.display();
bio.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);