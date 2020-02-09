/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

//Global varibales

const SektionAnMain = document.querySelector("main"); //main Element wird const SektionAnMain übergeben
const AddClassName = document.getElementsByTagName("div");
const AllSections = document.getElementsByTagName("section");
const AllLiElements = document.getElementsByTagName("li");
const AnzahlDerSektionen = document.getElementsByClassName("landing__container"); //Anzahl der Elemente mit id #data.nav
const ErzeugeNavigationsBar = document.querySelector("ul");


//for loop to get access to the last div of a section

for (i=0; i< AddClassName.length; i++)
{
    AddClassName[i].setAttribute("id","MyClass"+[i+1]);
}

//for loop which creates as much content as wished

for (i=3; i < 4; i++)
{
    const NewSektion = document.createElement("section"); //section wird const NewSekton übergeben
    NewSektion.setAttribute("id","section"+[i+1]); //Newsection bekommt id zugewiesen
    NewSektion.classList.add("MySections");
    //NewSektion.setAttribute("id","Sektion"+[i+1]); //Newsection bekommt id zugewiesen
    SektionAnMain.appendChild(NewSektion); //NewSection wird an main angehangen

    const LetzteDivID = document.getElementById("section"+[i+1]);
    const NewDiv = document.createElement("div");
    NewDiv.classList.add("landing__container");
    NewDiv.setAttribute("id","MyClass"+[i+1]);
    LetzteDivID.appendChild(NewDiv);

    const Headline = document.createElement("h2");
    const HeadlineText = document.createTextNode("Section" + [i+1]);
    const LastDiv = document.getElementById("MyClass" + [i+1]); //Andere Lösung
    Headline.appendChild(HeadlineText);
    LastDiv.appendChild(Headline);

    const Paragraph1 = document.createElement("p");
    const Paragraph1Text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.");
    Paragraph1.appendChild(Paragraph1Text);
    LastDiv.appendChild(Paragraph1);

    const Paragraph2 = document.createElement("p");
    const Paragraph2Text = document.createTextNode("Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.");
    Paragraph2.appendChild(Paragraph2Text);
    LastDiv.appendChild(Paragraph2); 
} 


// Construct for Navbar

for (i=0; i < AnzahlDerSektionen.length; i++)
{
    const NewList = document.createElement ("li"); //überweist const ein Element
    NewList.setAttribute("id", "ID"+[i+1]); //legt ID für neues li-element fest
    ErzeugeNavigationsBar.appendChild(NewList); //erzeugt li-element und hängt es an nav__bar an

    const IndikatorLI = document.getElementById("ID"+[i+1]);
    const NewAhref = document.createElement("a");
    const TextfürNewList = document.createTextNode("Sektion"+[1+i]); //überweist const einen Text
    NewAhref.setAttribute("href", "#section"+[i+1]);
    NewAhref.appendChild(TextfürNewList); //legt Text für neues li-element fest
    IndikatorLI.appendChild(NewAhref);
}


// Scroll to section on link click

(function () {
    "use strict";
    let target = document.querySelectorAll('a[href^="#"]');
    let i = 0;
    for (i=0; i<target.length; i++) {
        target[i].onclick = function (e) {
        let hash = this.getAttribute("href");
        let elem = document.getElementById(hash.replace("#",""));
        elem.scrollIntoView({ left: 0, block: 'start', behavior: 'smooth' });
        e.preventDefault();
	}
}
})();


// Set sections as active

window.addEventListener("scroll", function (){
    for (i=0; i < AllSections.length;i++)
        for (x=0; x < AllLiElements.length;x++)
    {
        {
    if (AllSections[i].getBoundingClientRect().top <= 0 && AllSections[i].getBoundingClientRect().top >= -615)
    {
        AllLiElements[i].classList.add("active");
    }
    else {
        AllLiElements[i].classList.remove("active");
    }
        }
    }
});