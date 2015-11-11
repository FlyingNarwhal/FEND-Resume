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
	"welcomeMessage": "string to change",
	"skills": ["HTML", " CSS", " JavaScript"],
	"bioPic": "https://s.gravatar.com/avatar/b578acdb4e61cde3df772c53b95394e9?s=80",
	"display": "function"
};

var education = {
	"schools": [],
	"onlineCourses": [{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"date": 12312015,
		"url": "https://udacity.com"
	}],
	"display": "function"
};

var work = {
	"jobs": {
		"employer": "Florence Unified School District",
		"title": "Bus Driver",
		"location": "San Tan Valley, Arizona",
		"dates": "May 2015-Current",
		"description": "I drive kids all over the town."
	}
};

var projects = {
	"projects": [{
		"title": "Sous Chef",
		"dates": "Currently developing",
		"description": "Stop wondering what's for dinner, let's start cooking instead.",
		"images": ["url for images"]
	},{
		"title": "Portfolio",
		"dates": "October 2015",
		"description": "See my projects",
		"images": ["url for images"]
	}],
	"display": "function"
};

// variables for header
var formattedName     = HTMLheaderName.replace("%data%", bio.name);
var formattedRole     = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic      = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMobile   = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail    = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGit      = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter  = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedSkills   = HTMLskills.replace("%data%", bio.skills);

// append header variables to page
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedPic);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGit);
$("#header").append(formattedTwitter);
$("#header").append(formattedLocation);
$("#header").append(formattedSkills);

// variables for work
var formattedEmployer        = HTMLworkEmployer.replace("%data%", work.jobs.employer);
var formattedTitle           = HTMLworkTitle.replace("%data%", work.jobs.title);
var formattedWorkLocation    = HTMLworkLocation.replace("%data%", work.jobs.location);
var formattedWorkDate        = HTMLworkDates.replace("%data%", work.jobs.dates);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs.description);

// append work values
$("#workExperience").append(formattedEmployer);
$("#workExperience").append(formattedTitle);
$("#workExperience").append(formattedWorkLocation);
$("#workExperience").append(formattedWorkDate);
$("#workExperience").append(formattedWorkDescription);