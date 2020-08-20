function addElement(parentId, elementTag, elementclass) {
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('class', elementclass);
    p.appendChild(newElement);
  }

  function addElementID(parentId, elementTag, elementid) {
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementid);
    p.appendChild(newElement);
  }
  
  function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
  }

  function ChangeColor(elementId, newId) {
    var e = document.getElementById(elementId);
    e.id = newId;
 };

  function changeView() {
  var checkBox = document.getElementById("switch");

  if (checkBox.checked == true){
    console.log("sunset");
    document.getElementById("body").style.backgroundImage = "linear-gradient(to bottom, #f7dc6f, #f7c459, #f6ab49, #f4903e, #f0753a, #e85b4d, #d7465d, #bf386b,  #313b5c, #212f3c)";
    document.getElementById("navbar").style.backgroundColor = "rgba(244, 208, 63, 0.7)";
    // document.getElementsByClassName(names);
    ChangeColor("myGoal","myGoal2");
    ChangeColor("myGoal","myGoal2");
    ChangeColor("myGoal","myGoal2");
    ChangeColor("myGoal","myGoal2");

    ChangeColor("icon", "icon2");
    ChangeColor("icon", "icon2");
    ChangeColor("icon", "icon2");
    ChangeColor("icon", "icon2");
    ChangeColor("icon", "icon2");

    ChangeColor("formSubmit", "formSubmit2");

    ChangeColor("navbar-brand", "navbar-brand2");
    ChangeColor("nav-link", "nav-link2");
    ChangeColor("nav-link", "nav-link2");
    ChangeColor("nav-link", "nav-link2");
    ChangeColor("nav-link", "nav-link2");
    ChangeColor("nav-link", "nav-link2");
    ChangeColor("nav-link", "nav-link2");

    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("faSkills", "faSkills2");
    ChangeColor("aSkills", "aSkills2");

    ChangeColor("to-be", "to-be2");

    ChangeColor("icon", "icon2");
    ChangeColor("icon", "icon2");
    ChangeColor("icon", "icon2");
    
    document.getElementById('footer').innerHTML = "The sun has set... created by James Yubin Lim";

    removeElement("background-wrap");
    addElementID("body", "div", "background-wrap");
    addElementID("background-wrap", "div", "c1");
    addElementID("background-wrap", "div", "c2");
    addElementID("background-wrap", "div", "c3");
    addElementID("background-wrap", "div", "c4");
    addElementID("background-wrap", "div", "c5");
    addElement("c1", "div", "cloud");
    addElement("c2", "div", "cloud");
    addElement("c3", "div", "cloud");
    addElement("c4", "div", "cloud");
    addElement("c5", "div", "cloud");
    
  } else {
    console.log("ocean");
    document.getElementById("body").style.backgroundImage = "linear-gradient(to bottom, #85c1e9, #77b9e6, #6ab2e4, #5baae2, #4ca2df, #4495cf, #3c88bf, #347cb0, #326891, #2d5474, #284158, #212f3d)";
    document.getElementById("navbar").style.backgroundColor = "rgba(93, 173, 226, 0.7)";

    ChangeColor("myGoal2","myGoal");
    ChangeColor("myGoal2","myGoal");
    ChangeColor("myGoal2","myGoal");
    ChangeColor("myGoal2","myGoal");

    ChangeColor("icon2", "icon");
    ChangeColor("icon2", "icon");
    ChangeColor("icon2", "icon");
    ChangeColor("icon2", "icon");
    ChangeColor("icon2", "icon");

    ChangeColor("formSubmit2", "formSubmit");

    ChangeColor("navbar-brand2", "navbar-brand");
    ChangeColor("nav-link2", "nav-link");
    ChangeColor("nav-link2", "nav-link");
    ChangeColor("nav-link2", "nav-link");
    ChangeColor("nav-link2", "nav-link");
    ChangeColor("nav-link2", "nav-link");
    ChangeColor("nav-link2", "nav-link");

    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("faSkills2", "faSkills");
    ChangeColor("aSkills2", "aSkills");

    ChangeColor("icon2", "icon");
    ChangeColor("icon2", "icon");
    ChangeColor("icon2", "icon");

    ChangeColor("to-be2", "to-be");

    document.getElementById('footer').innerHTML = "You have reached the bottom of the ocean... created by James Yubin Lim";
    // document.getElementsByClassName(names);

    removeElement("background-wrap");
    addElementID("body", "div", "background-wrap");
    addElement("background-wrap", "div", "bubble x1");
    addElement("background-wrap", "div", "bubble x2");
    addElement("background-wrap", "div", "bubble x3");
    addElement("background-wrap", "div", "bubble x4");
    addElement("background-wrap", "div", "bubble x5");
    addElement("background-wrap", "div", "bubble x6");
    addElement("background-wrap", "div", "bubble x7");
    addElement("background-wrap", "div", "bubble x8");
    addElement("background-wrap", "div", "bubble x9");
    addElement("background-wrap", "div", "bubble x10");
  }
}