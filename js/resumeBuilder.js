/*
 * 4 JavaScript objects containing Bio, Education, Work and Projects, used to populate HTML
 */
var bio = {
    "name": "Richard Chan",
    "role": "Front-End Engineer",
    "welcomeMessage": "Hello there! My name is Richard and I'm a self-taught Web Developer creating beautiful website projects.",
    "biopic": "images/small.jpeg",
    "contacts": {
        "website": "richardchan.me",
        "mobile": "415-812-3810",
        "email": "richardchanme@gmail.com",
        "linkedin": "@rchrdchn",
        "github": "@rchrdchn",
        "location": "California"
    },
    "skills": ["HTML5 / CSS3 / SASS", "JavaScript / jQuery", "JSON / AJAX", "Sketch / Adobe Photoshop", "WordPress"],
    "display": function() {

        $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
        $("#header").prepend(HTMLheaderName.replace('%data%', bio.name));

        $.each(bio.contacts, function(key, value) {
            $('#topContacts').append(HTMLcontactGeneric.replace("%contact%", key).replace('%data%', value));
            $('#footerContacts').append(HTMLcontactGeneric.replace("%contact%", key).replace('%data%', value));
        });

        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

        $('#header').append(HTMLskillsStart);

        $.each(bio.skills, function(value) {
            $('#skills').append(HTMLskills.replace('%data%', bio.skills[value]));
        });

    }

};

var education = {
    "schools": [{
            "name": "City University of Hong Kong",
            "location": "Hong Kong SAR, China",
            "degree": "Bachelor's of Science",
            "dates": "2013-2014",
            "majors": ["Leadership in Business Entrepreneurship"],
            "url": "http://www.cityu.edu.hk/",
        },
        {
            "name": "San Francisco State University",
            "location": "San Francisco, CA, US",
            "degree": "Bachelor's of Science",
            "dates": "2012-2014",
            "majors": ["Business Administration, Management"],
            "url": "http://www.sfsu.edu/",
        }
    ],
    "onlineCourses": [{
        "title": "Front-End Web Development",
        "school": "Udacity",
        "dates": 2017,
        "url": "https://www.udalocation.com/course/front-end-web-developer-nanodegree--nd001",
    }],
    "display": function() {

        // SCHOOL EDUCATION

        $.each(education.schools, function(ed) {

            $('#education').append(HTMLschoolStart); // header

            var educations = education.schools;

            var sName = HTMLschoolName.replace('%data%', educations[ed].name).replace("#", educations[ed].url);
            var sDates = HTMLschoolDates.replace('%data%', educations[ed].dates);
            var sLocation = HTMLschoolLocation.replace('%data%', educations[ed].location);
            var sDegree = HTMLschoolDegree.replace('%data%', educations[ed].degree);
            var sMajors = HTMLschoolMajor.replace('%data%', educations[ed].majors);

            $('.education-entry:last').append(sName + sDegree + sDates + sLocation + sMajors);
        });

        // ONLINE COURSES

        $('#education').append(HTMLonlineClasses); // header

        $.each(education.onlineCourses, function(ed) {
            $('#education').append(HTMLschoolStart);

            var onlineEd = education.onlineCourses;

            var oTitle = HTMLonlineTitle.replace('%data%', onlineEd[ed].title);
            var oSchool = HTMLonlineSchool.replace('%data%', onlineEd[ed].school);
            var oDates = HTMLonlineDates.replace('%data%', onlineEd[ed].dates);
            var oUrl = HTMLonlineURL.replace("#", onlineEd[ed].url).replace('%data%', onlineEd[ed].url);

            $('.education-entry:last').append(oTitle + oSchool + oDates + oUrl);
        });
    }
};

var work = {
    "jobs": [{
            "description": [
                "Design + create mobile-first responsive websites and landing panges for clients.",
                // "Create unique web experiences using HTML5, CSS3, and JavaScript"
            ],
            "employer": "Freelance",
            "title": "Web Developer",
            "dates": "january 2016 - present",
            "location": "California, US"
        },
        {
            "description": [
                "Created 30+ HTML/CSS responsive email templates as well as landing pages.",
                // "Delivered 25+ nurturing campaigns with 20%+ open% in monthly basis."
            ],
            "employer": "Apttus",
            "title": "Marketing Developer",
            "dates": "january 2015 - october 2016",
            "location": "San Mateo, CA, US"
        },
        {
            "description": [
                "Executed social media, marketing programs, and website development resulting in an increase of image branding + new leads in the Bay Area of 45%+ YOY.",
                // "Implemented SEO strategies on website links and backlinks for organic results."
            ],
            "employer": "Coldwell Banker",
            "title": "Marketing Specialist",
            "dates": "june 2011 - december 2016",
            "location": "San Francisco, CA, US"
        },
        {
            "description": [
                "Managed sales team, hiring, inventory and restocking.",
                // "Grew business 20% year-over-year."
            ],
            "employer": "Hercules SA",
            "title": "Retail Store Manager",
            "dates": "june 2005 - july 2008",
            "location": "Maracay, Venezuela"
        }],
    "display": function() {

        $.each(work.jobs, function(job) {

            $('#workExperience').append(HTMLworkStart); // header

            var myJobs = work.jobs[job];

            var myEmployer = HTMLworkEmployer.replace('%data%', myJobs.employer);
            var myTitle = HTMLworkTitle.replace('%data%', myJobs.title);
            var myDates = HTMLworkDates.replace('%data%', myJobs.dates);
            var myLocation = HTMLworkLocation.replace('%data%', myJobs.location);
            var myDescription = HTMLworkDescription.replace('%data%', myJobs.description);

            $('.work-entry:last').append(myEmployer + ' ' + myTitle + myDates + myLocation + myDescription);

        });

    }

};

var projects = {
    "projects": [{
            "title": "Classic Arcade Game",
            "dates": 2017,
            "description": "You will be provided with visual assets and a game loop engine; using these tools you must add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
            "images": ["http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg", ],
        },
        {
            "title": "Website Optimization",
            "dates": 2017,
            "description": "You will optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
            "images": ["http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg", ],
        },
        {
            "title": "Neighborhood Map",
            "dates": 2017,
            "description": "You will develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this application, including: map markers to identify popular locations or places you’d like to visit, a search function to easily discover these locations, and a listview to support simple browsing of all locations. You will then research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
            "images": ["http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg", ],
        },
        {
            "title": "Feed Reader Testing",
            "dates": 2017,
            "description": "In this project, you will be learning about testing with Javascript. Testing is an important part of the development process and many organizations practice a standard known as 'test-driven development' or TDD. This is when developers write tests first, before they ever start developing their application. Whether you work in an organization that writes tests extensively to inform product development or one that uses tests to encourage iteration, testing has become an essential skill in modern web development!",
            "images": ["http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg", ],
        }],
    "display": function() {

        $.each(projects.projects, function(p) {

            $('#projects').append(HTMLprojectStart); // header

            var projectss = projects.projects[p];

            var pTitle = HTMLprojectTitle.replace('%data%', projectss.title);
            var pDates = HTMLprojectDates.replace('%data%', projectss.dates);
            var pDescription = HTMLprojectDescription.replace('%data%', projectss.description);

            $('.project-entry:last').append(pTitle + pDates + pDescription);

            $.each(projectss.images, function(i) {
                var pImages = HTMLprojectImage.replace('%data%', projectss.images[i]);
                $('.project-entry:last').append(pImages);
            });

        });

    }

};

bio.display();
education.display();
work.display();
projects.display();


// BUILD AND SHOW MAP

function displayMap() {
    $('#mapDiv').append(googleMap);
}

displayMap();