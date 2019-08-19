//getting references
let presentSearch = document.getElementById("presentSearch");
let presentHome = document.getElementById("presentHome");

let searchRef = document.getElementById("search");
let homeRef = document.getElementById("homePage");
let topBarHome = document.getElementById("home");

let topBarSearch = document.getElementById("searchButton");
let searchBarRef = document.getElementById("searchBar");
let searchInputRef = document.getElementById("searchInput");

let bodyRef = document.querySelector('body');
let resultsDivRef = document.getElementsByClassName('results');
let searchDivRef = document.getElementById('search');
// let footer1Ref = document.getElementById('foot1');
// let footer2Ref = document.getElementById('foot2');

let textRef = document.querySelector("p");
let stockImg = document.querySelector("stockImg img")
let stockDiv = document.getElementById("stockImg")
// console.log(footer2Ref)
// //footer
// footer2Ref.style.display = 'none';
// footer1Ref.style.display = 'block';
// console.log("help");

//assigning variables for the arrays where we access the information from
let programNamesArray = ['All Star Code', 'CLAE', 'Black Girls Code', 'Discovery Day Camp', 'Black Arts Institute', 'Art History and Curatorial Studies', 'Choplet', 'Girls Who Code', 'Black Girls Sew', 'MITES', 'Kettering University', 'National Society of Black Engineers', 'SMASH Academy', 'iUrbanTeen', 'Mathematics Engineering Science Achievement', 'SAMS', 'Cronkite Institute for HS', 'S.A.F.E Passage Summer Camp', 'Kettering University Academically Interested Minds', 'Camp Nia', 'Heritage Camp'];
let programPicsArray = ['allstar.png', 'carleton.png', 'blackGirlsCode.png', 'discovery.png', 'blackArtsIns.png', 'spelman.png', 'choplet.png', 'girlsWhoCode.png', 'blackGirlsSew.png', 'mites.png', 'kettering1.png', 'NSBE.png', 'smash.png', 'iUrbanTeen.png', 'MESA.png', 'carnegie.png', 'ASU.png', 'BFLyouth.png', 'Kettering2.png', 'sistersOfNia.png', 'heritage.png'];
let programLinksArray = [
'https://www.allstarcode.org/',
'https://www.carleton.edu/admissions/visit/clae/',
'http://www.blackgirlscode.com/',
'http://www.centralstate.edu/camp/',
'https://stellaadler.com/classes/black-arts-theater/', 
'https://www.spelman.edu/academics/summer-programs/art-history-curatorial-studies', 
'https://choplet.com/ceramic-classes/kids-pottery-ceramic-camp',
'https://girlswhocode.com/',
'http://www.blackgirlssew.org/',
'http://web.mit.edu/mites/',
'https://www.kettering.edu/precollege/residential#aim',
'https://www.nsbe.org/home.aspx', 
'https://www.smash.org/programs/smash-academy/',
'https://iurbanteen.org/', 
'https://mesausa.org/', 
'https://admission.enrollment.cmu.edu/pages/access-sams', 
'https://cronkite.asu.edu/outreach/high-school-institute',
'http://www.bflyouth.org/safe-passage-summer-camp.html', 
'https://www.kettering.edu/precollege/residential#aim',
'http://www.sistersofnia.org/our-curriculum/program-events/', 
'https://www.tubmanmuseum.com/heritage-camp/'
];
let programDescriptionsArray = [];

programDescriptionsArray = [
'All Star Code: All Star Code is a nonprofit computer science education organization focused on motivated Black and Latino young men. Few organizations prepare this underserved group for careers in the innovation economy. Our ultimate goal is to close the wealth, income and opportunity gaps.',
"CLAE: A free, inspiring summer program designed for the best and brightest college-bound students from high schools across the country. The Carleton Liberal Arts Experience (CLAE) supports 52 high school students who have just completed their sophomore year to come to Carleton for a one-week, academic summer program, all expenses paid by Carleton. CLAE introduces students to the strengths of a liberal arts education through an array of courses in science, art, social sciences, and technology",
'Black Girls Code: Black Girls CODE introduces computer coding lessons to young girls from underrepresented communities in programming languages such as Scratch or Ruby on Rails. Black Girls CODE has set out to prove to the world that girls of every color have the skills to become the programmers of tomorrow.',
'Discovery Day: Central State University Extension’s Discovery Day Camp is an engaging youth summer program for rising 3rd-5thgrade students. Each day will focus on a different theme and explore science, technology, engineering, agriculture, and mathematics (STEM) through experiential learning. Students will be enrolled on a first-come, first served basis once all application material is received',
'Black Art theater: The Black Arts Institute offers both a one-week winter and five-week summer comprehensive exploration of the history of the contemporary Black theater tradition, led by a world-class faculty including Stephen McKinley Henderson, Ruben Santiago-Hudson, Phylicia Rashad, Michele Shay and Sonia Sanchez.',
'Spelman: During the four-week program, students attend lectures and engage in discussions at Spelman, in the Atlanta University Center, and at the High Museum of Art while making site visits to other locations in Atlanta and the region.'
'Choplet: In our Kids Pottery Ceramic Camp, kids are invited to join a professional ceramic studio and explore the numerous possibilities clay has to offer, such as wheel throwing, hand building, sculpting, tile/mosaic making, decorating and glazing. At our facility, students have the satisfaction of creating an artwork from scratch and bringing it to its final completion. Every day participants are encouraged to explore their creativity and begin a new project led by an accomplished artist',
'Girls Who code: Our Summer Immersion Program is a free​ ​7-week introductory computer science ​program ​for​ ​10th-11th grade girls going into their junior or senior year of high school. During the 7-week program, participants​ ​learn​ about ​computer science,​ ​gain​ ​exposure​ ​to​ ​tech​ ​jobs,​ ​and​ ​join​ ​​a sisterhood​ ​of​ ​girls​ ​who​ ​are​ ​using​ ​computer​ ​science​ ​to​ ​become​ ​change-makers.',
'Black girls sew: Black Girls Sew™ offers classes, workshops and summer camps to teach sewing and design skills to students of all ages, races and levels of experience. Sew Green™ is a series of eco-friendly workshops for adults. The Sew Green Fashion Camp™ is a summer camp for children ages 7 to 16 with an interest in fashion and sewing but little to no exposure to the industry',
'MITES: Minority Introduction to Engineering and Science (MITES) is a rigorous six-week residential academic enrichment program for rising high school seniors. This national program stresses the value and reward of pursuing advanced technical degrees and careers while developing the skills necessary to achieve success in science and engineering.',
'Kettering 1: This camp exposes students to the field of computer engineering by using technology that is currently being used for developing intelligent systems. They learn how consumer electronics, automobiles and robots are made smart by using microcontrollers embedded in these products. Students design, build and program entry-level microcontroller-based applications, such as robots, and learn how to wire sensors to the processor and implement programs to make their robot intelligent.',
'NSBE: The Training Institute offers training for current and prospective business owners. The primary focus is on creating technical companies; however, the program is open and valuable for all. The training is offered via webinar, Regional and Annual Conferences and via local activities.',
'Smash: SMASH Academy, our flagship program, is a three-year STEM- intensive residential college prep program that empowers students to deepen their talents and pursue STEM careers. Every summer, scholars are immersed in tuition-free studies at leading universities throughout the country.  During the academic year, scholars participate in monthly programming.',
'iUrbanTeen: At each STEM Summit over 150 attendees will learn about what’s new in the amazing world of technology, how technology affects our daily lives, and they can find themselves in a career track.  Our summit workshops are hands-on and interactive learning experiences' ,
'MESA: The program provides teacher training, academic tutoring, internships, field trips and pre-college pathways into STEM college programs',
'SAMS: The Summer Academy for Math and Science (SAMS) is a six-week residential summer program at Carnegie Mellon University for minoritized student groups interested in pursuing STEM-related undergraduate majors. The program offers two distinct cohorts for rising seniors and a smaller cohort for rising juniors. Admitted students engage in a rigorous curriculum taught by our world renowned faculty and staff who are deeply committed to student success. Selected students have an opportunity to choose from two different academic tracks; Science and Engineering, and Computer Science.',
'ASU:For two weeks every summer, the Walter Cronkite School of Journalism and Mass Communication brings top-performing high school students to ASU for two weeks of intensive, hands-on experiences in broadcast and digital journalism.',
'BFL Youth:Members will experience and participate in an intensive eight weeks of African and African-American students, Dance and Drama, field trips, arts and crafts, sports, swimming and much more',
'Kettering 2: This includes a variety of camps that focuses on many scientific topics such as computer engineering and robotics in preparation for college.',
'Sisters of Nia:With an Afrocentric foundation, the camp addresses self-esteem, self-confidence, self-control, self-expression, cultural awareness, health & exercise, and proper diet via the performing arts',
'Heritage:Children ages 7-12 participate in one-week sessions of the Tubman Heritage Summer Camps that features arts and crafts activities, character building, physical fitness, math & literacy exercises, African American history and creative writing'
];

//when the top search div is pressed it shows the search page
topBarSearch.onclick = function(event){
  event.preventDefault();
  homeRef.style.display = "none";
  searchRef.style.display = "block";
  footer1Ref.style.display = 'block';

}

//when the top home div is pressed it switches to the home div
topBarHome.onclick = function(event){
  event.preventDefault();
  homeRef.style.display = "block";
  searchRef.style.display = "none";
  footer1Ref.style.display = 'block'
}
let programDivs = [];
for (i = 0; i < programNamesArray.length; i++){
  //there exists a div im going to put everything into later
  //big div is the box im working with for each program
  //big div changes background
  let bigDiv = document.createElement('div');
  bigDiv.classList.add("results");
  bigDiv.style.display = 'flex';

  //image adding to big div (left side)
  let img = document.createElement('img');
  img.src =  programPicsArray[i];
  img.style.height = ('100px');
  img.classList.add("campLogo");
  bigDiv.appendChild(img);

  //im adding a right side div and setting it as column
  let rightDiv = document.createElement('div');
  programDivs.push(bigDiv);
  rightDiv.style.flexDirection = 'column';
  //im adding the top title to the right side div
  let titlePart = document.createElement('h3');
  titlePart.innerHTML = programNamesArray[i];
  titlePart.style.display = 'inline';
  //considering linking using an a tag
  let titleLinkPart = document.createElement('a');
  titleLinkPart.href = programLinksArray[i];
  rightDiv.classList.add("campDescription");
  titleLinkPart.appendChild(titlePart);
  //appending the title to right div
  
  rightDiv.appendChild(titleLinkPart)
  //information part is being added to the right side
  let infoPart = document.createElement('p');
  infoPart.innerHTML = programDescriptionsArray[i];
  //appending the boys
  rightDiv.appendChild(infoPart);
  bigDiv.appendChild(rightDiv);
  searchDivRef.appendChild(bigDiv);

  //css in java
 
}

//code for the search bar
searchBarRef.onsubmit = function(event){
  event.preventDefault();
  let userSearch = new RegExp(searchInputRef.value.trim(),"i");
  //console.log(userSearch);
  for(let i=0; i < programNamesArray.length;i++){
    let testerName = programNamesArray[i];
    if(testerName.search(userSearch)>=0){
      programDivs[i].style.display = "flex";
    }else{
      programDivs[i].style.display = "none";
    }
  }
}
