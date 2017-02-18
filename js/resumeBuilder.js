 var bio = {
 	"name": "Richard Chan",
 	"role": "Front-End Web Developer", 
 	"welcomeMessage": "Hello there!",
 	"biopic": "images/small.jpeg",
 	"contacts": {
 		"website": "richardchan.me",
 		"mobile": "415-812-3810",
 		"email": "richardchanme@gmail.com",
 		"linkedin": "@rchrdchn",
 		"github": "@rchrdchn",
 		"location": "California, US"
 	},
 	"skills": [ "HTML", "CSS", "JavaScript", "jQuery", "SASS", "Git", "WordPress", "JSON", "AJA", "Adobe Photoshop"]
 };

 $("#header").append(HTMLheaderName.replace("%data%", bio.name));
 $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
 
 if (bio.skills.length > 0 ) {

 	$("#header").append(HTMLskillsStart);

 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
 	$("#skills").append(formattedSkill);
 }

 var work = {
	 "jobs": [
		 {
			  "description": "Design + create mobile- rst responsive websites and landing panges for clients.",
			  "employer": "Freelance",
			  "title": "Web Developer",
			  "dates": "january 2016 - present",
			  "location": "California, US"
		},
		{
			 "description": [
				 "Created 30+ HTML/CSS responsive email templates as well as landing pages.",
				 "Delivered 25+ nurturing campaigns with 20%+ open% in monthly basis."
				 ],
			 "employer": "Apttus",
			 "title": "Marketing Developer",
			 "dates": "january 2015 - october 2016",
			 "location": "San Mateo, CA, US"
		},
		{
			 "description": [
				 "Executed social media, marketing programs, and website development resulting in an increase of image branding + new leads in the Bay Area of 45%+ YOY.",
				 "Implemented SEO strategies on website links and backlinks for organic results."
				 ],
			 "employer": "Coldwell Banker",
			 "title": "Marketing Specialist",
			 "dates": "june 2011 - december 2016",
			 "location": "San Francisco, CA, US"
		}
	]
 };

 for (jobs in work.jobs) {
 	$("#workExperience").append(HTMLworkStart);

 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 	var formattedEmployerTitle = formattedEmployer + formattedTitle;

 	$(".work-entry:last").append(formattedEmployerTitle);
 }

 var projects = {
 	"projects": [
	 	{
		 	"title": "Classic Arcade Game",
		 	"dates": "2017",
		 	"description": "",
		 	"images": ["urls"]
		 },
		 {
		 	"title": "Website Optimization",
		 	"dates": "2017",
		 	"description": "",
		 	"images": ["urls"]
		 },
		 {
		 	"title": "Neighborhood Map",
		 	"dates": "2017",
		 	"description": "",
		 	"images": ["urls"]
		 },
		 {
		 	"title": "Feed Reader Testing",
		 	"dates": "2017",
		 	"description": "",
		 	"images": ["urls"]
		 }
	 ]
 };

 var education = {
 	"schools": [
	 	{
		 	 "name": "location University of Hong Kong",
			 "location": "Hong Kong SAR, China",
			 "degree dates": "2013-2014",
			 "major": ["Entrepreneurship", "Management"],
			 "website": "http://www.cityu.edu.hk/"
	 	},
	 	{
		 	 "name": "San Francisco State University",
			 "location": "San Francisc, CA, US",
			 "degree dates": "2012-2014",
			 "major": ["Business Administration, Management"],
			 "website": "http://www.sfsu.edu/"
	 	}
 	],
 	"onlineCourses": [
 		{
 			"title": "Front-End Web Development",
 			"school": "Udacity",
 			"dates": 2017,
 			"url": "https://www.udalocation.com/course/front-end-web-developer-nanodegree--nd001"
 		}
 	]
 };

 