/*
 * 4 JavaScript objects containing Bio, Education, Work and Projects, used to populate HTML
 */

 // BIO SECTION INCLUDING DISPLAY FUNCTION

var bio = {
    "name": "Richard Chan",
    "role": "Front-End Developer",
    "welcomeMessage": "Hey there! My name is Richard and I believe in helping people create meaningful experiences through web development.",
    "biopic": "images/small.jpeg",
    "contacts": {
        "website": "richardchan.me",
        "mobile": "415-812-3810",
        "email": "richardchanme@gmail.com",
        "linkedin": "@rchrdchn",
        "github": "@rchrdchn",
        "location": "California"
    },
    "skills": ["HTML5 / CSS3 / SASS", "JavaScript / jQuery", "JSON / AJAX", "Bootstrap", "Sketch", "Adobe Creative Suite", "WordPress / Squarespace", "Git / Github", "Microsoft Office", "Salesforce / Marketo"],
    "display": function() {

        $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role)); // this makes ROLE shows up on top

        $("#header").prepend(HTMLheaderName.replace('%data%', bio.name)); // this makes NAME shows up on top before ROLE (PREPEND)

        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
        
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

        $('#header').append(HTMLskillsStart);

        // adding all skills to top of the page - next to biopic

        $.each(bio.skills, function(data2) {
            $('#skills').append(HTMLskills.replace('%data%', bio.skills[data2]));
        });

        // adding all contact info to header as well as footer of the page

        $.each(bio.contacts, function(data1, data2) {
            $('#topContacts').append(HTMLcontactGeneric.replace("%contact%", data1).replace('%data%', data2));
            $('#footerContacts').append(HTMLcontactGeneric.replace("%contact%", data1).replace('%data%', data2));
        }); 

    }

};

// EDUCATION SECTION INCLUDING DISPLAY FUNCTION

var education = {
    "schools": [
        {
            "name": "Codify Academy",
            "location": "San Francisco, California",
            "degree": "Front-End Development",
            "dates": "2017",
            "majors": ["Web Development"],
            "url": "http://codifyacademy.com/",
        },
        {
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
        "title": "Front-End Web Development Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udalocation.com/course/front-end-web-developer-nanodegree--nd001",
    }],
    "display": function() {

        // SCHOOL EDUCATION

        $.each(education.schools, function(edu) {

            $('#education').append(HTMLschoolStart); // this appends SCHOOL EDUCATION to #education header

            var educations = education.schools;

            var myName = HTMLschoolName.replace('%data%', educations[edu].name).replace("#", educations[edu].url);
            var myDegree = HTMLschoolDegree.replace('%data%', educations[edu].degree);
            $('.education-entry:last').append(myName + myDegree);

            var myDates = HTMLschoolDates.replace('%data%', educations[edu].dates);
            $('.education-entry:last').append(myDates);

            var myLocation = HTMLschoolLocation.replace('%data%', educations[edu].location);
            $('.education-entry:last').append(myLocation);

            var myMajors = HTMLschoolMajor.replace('%data%', educations[edu].majors);
            $('.education-entry:last').append(myMajors);
        });

        // ONLINE COURSES

        $('#education').append(HTMLonlineClasses); // this appends ONLINE EDUCATION to #education header

        $.each(education.onlineCourses, function(edu) {
            $('#education').append(HTMLschoolStart);

            var onlineEd = education.onlineCourses;

            var myTitle = HTMLonlineTitle.replace('%data%', onlineEd[edu].title);
            var mySchool = HTMLonlineSchool.replace('%data%', onlineEd[edu].school);
            $('.education-entry:last').append(myTitle + mySchool);

            var myDates = HTMLonlineDates.replace('%data%', onlineEd[edu].dates);
            $('.education-entry:last').append(myDates);

            var myUrl = HTMLonlineURL.replace("#", onlineEd[edu].url).replace('%data%', onlineEd[edu].url);
            $('.education-entry:last').append(myUrl);

        });
    }
};


// WORK SECTION INCLUDING DISPLAY FUNCTION

var work = {
    "jobs": [{
            "description": [
                "Create + maintain Mobile-First responsive websites and landing pages for clients.",
                // "Create unique web experiences using HTML5, CSS3, and JavaScript" (COMMENTED OUT UNTIL I FIND HOW TO CREATE A SECOND BULLET POINT WITH A BREAK)
            ],
            "employer": "Freelance",
            "title": "Front-End Developer",
            "dates": "january 2016 - present",
            "location": "California, US"
        },
        {
            "description": [
                "Created 30+ HTML/CSS responsive email templates as well as landing pages.",
                // "Delivered 25+ nurturing campaigns with 20%+ open% in monthly basis." (COMMENTED OUT UNTIL I FIND HOW TO CREATE A SECOND BULLET POINT WITH A BREAK)
            ],
            "employer": "Apttus",
            "title": "Marketing Developer",
            "dates": "january 2015 - october 2016",
            "location": "San Mateo, CA, US"
        },
        {
            "description": [
                "Designed, developed and maintained websites and landing pages for real estate agents utilizing HTML, CSS, WordPress, and Squarespace.",
                // "Implemented SEO strategies on website links and backlinks for organic results." (COMMENTED OUT UNTIL I FIND HOW TO CREATE A SECOND BULLET POINT WITH A BREAK)
            ],
            "employer": "Coldwell Banker",
            "title": "Marketing Web Developer",
            "dates": "june 2011 - december 2016",
            "location": "San Francisco, CA, US"
        },
        {
            "description": [
                "Managed sales team, hiring, inventory and restocking",
                " Grew business 20% year-over-year." // (COMMENTED OUT UNTIL I FIND HOW TO CREATE A SECOND BULLET POINT WITH A BREAK)
            ],
            "employer": "Hercules SA",
            "title": "Retail Store Manager",
            "dates": "june 2005 - july 2008",
            "location": "Maracay, Venezuela"
        }],
    "display": function() {

        $.each(work.jobs, function(j) {

            $('#workExperience').append(HTMLworkStart); // this appends WORK EXPERIENCE to #workExperience header

            var myJobs = work.jobs[j];

            var myEmployer = HTMLworkEmployer.replace('%data%', myJobs.employer);
            var myTitle = HTMLworkTitle.replace('%data%', myJobs.title);
            $('.work-entry:last').append(myEmployer + ' ' + myTitle);

            var myDates = HTMLworkDates.replace('%data%', myJobs.dates);
            $('.work-entry:last').append(myDates);

            var myLocation = HTMLworkLocation.replace('%data%', myJobs.location);
            $('.work-entry:last').append(myLocation);

            var myDescription = HTMLworkDescription.replace('%data%', myJobs.description);
            $('.work-entry:last').append(myDescription);

        });

    }

};


// PROJECTS SECTION INCLUDING DISPLAY FUNCTION

// var project = {
//     "projects": [{
//             "title": "Classic Arcade Game",
//             "dates": "2017",
//             "description": "You will be provided with visual assets and a game loop engine; using these tools you must add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
//             "images": ["http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg", ],
//         },
//         {
//             "title": "Website Optimization",
//             "dates": "2017",
//             "description": "You will optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
//             "images": ["http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg", ],
//         },
//         {
//             "title": "Neighborhood Map",
//             "dates": "2017",
//             "description": "You will develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this application, including: map markers to identify popular locations or places you’d like to visit, a search function to easily discover these locations, and a listview to support simple browsing of all locations. You will then research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
//             "images": ["http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg", ],
//         },
//         {
//             "title": "Feed Reader Testing",
//             "dates": "2017",
//             "description": "In this project, you will be learning about testing with Javascript. Testing is an important part of the development process and many organizations practice a standard known as 'test-driven development' or TDD. This is when developers write tests first, before they ever start developing their application. Whether you work in an organization that writes tests extensively to inform product development or one that uses tests to encourage iteration, testing has become an essential skill in modern web development!",
//             "images": ["http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg", ],
//         }],
//     "display": function() {

//         $.each(project.projects, function(proj) {

//             $('#projects').append(HTMLprojectStart); // this appends PROJECTS to #projects header

//             var projectsss = project.projects[proj];

//             var myTitle = HTMLprojectTitle.replace('%data%', projectsss.title);
//             $('.project-entry:last').append(myTitle);

//             var myDates = HTMLprojectDates.replace('%data%', projectsss.dates);
//             $('.project-entry:last').append(myDates);

//             var myDescription = HTMLprojectDescription.replace('%data%', projectsss.description);
//             $('.project-entry:last').append(myDescription);

//             $.each(projectsss.images, function(img) {
//                 var myImages = HTMLprojectImage.replace('%data%', projectsss.images[img]);
//                 $('.project-entry:last').append(myImages);
//             });

//         });

//     }

// };

bio.display(); // DISPLAYING ALL BIO ON PAGE
education.display(); // DISPLAYING EDUCATION ON PAGE
work.display(); // DISPLAYING WORK ON PAGE
// project.display(); // DISPLAYING PROJECTS ON PAGE


// SHOWING MAP AT LAST

function displayMap() {
    $('#mapDiv').append(googleMap);
}

displayMap();