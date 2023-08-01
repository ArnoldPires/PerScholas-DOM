var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector('main');
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";
// Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
// Add a class of flex-ctrto mainEl.
mainEl.classList.add("flex-ctr");
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector('#top-menu');
// Set the height topMenuElelement to be 100%.
topMenuEl.style.height = "100%";
// Set the background color of topMenuEl to the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");
// Iterate over the entire menuLinks array and for each "link" object:
for (let link of menuLinks) {
  // create an < a > element
  let linkEl = document.createElement('a');
  // On the new element, add an href attribute with its value set to the href 
  // property of the "link" object.
  linkEl.href = link.href;
  // Set the new element's content to the value of the text property of the "link" object.
  linkEl.innerText = link.text;
  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(linkEl);
}
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.querySelector('#sub-menu');
// Set the height subMenuEl element to be 100%.
subMenuEl.style.height = "100%";
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";
// Update the menuLinks array
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = topMenuEl.querySelectorAll('a');
// Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false;
// Attach a delegated 'click' event listener to topMenuEl. 
topMenuEl.addEventListener('click', (event) => {
// The first line of code of the event listener function should call the event object's preventDefault()method.
  event.preventDefault();
// The second line of code function should immediately return if the element clicked was not an <a> element.
  if (!event.target.matches('a')) 
  return;
// console.log the content of the <a> to verify the handler is working.  
  console.log(event.target.textContent);
// Remove the active class from the clicked <a> element.
  if (event.target.classList.contains('active')) {
  event.target.classList.remove('active');
// Set the showingSubMenu to false.
  showingSubMenu = false;
// Set the CSS top property of subMenuEl to 0.
  subMenuEl.style.top = '0';
// return to exit the handler.
  return;
}
// Next, the event listener should remove a class name of active from each <a> element in topMenuLinks- 
//whether the active class exists or not.
  topMenuLinks.forEach((link) => link.classList.remove('active'));
// Next, the event listener should add a class name of active to the <a> element that was clicked.
  event.target.classList.add('active');
// Set showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a 
// subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.
  let linkObject = menuLinks.find((link) => link.text === event.target.textContent);
  showingSubMenu = linkObject.subLinks ? true : false;
// If showingSubMenu is true:
// Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.
  if (showingSubMenu) {
    buildSubMenu(linkObject.subLinks);
// Set the CSS top property of subMenuEl to 100%.
    subMenuEl.style.top = '100%';
// Otherwise (showingSubMenu is false):
  } else {
// Set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = '0';
  }
});
// Code the buildSubMenu function so that it:
// Clears the contents of subMenuEl.
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '';
// Iterates over the subLinks array passed as an argument; and for each "link" object:
  for (let link of subLinks) {
// Create an <a> element.
    const anchorEl = document.createElement('a');
// On the new element, add an href attribute with its value set to the href property of the "link" object.
    anchorEl.href = link.href;
// Set the new element's content to the value of the text property of the "link" object.
    anchorEl.textContent = link.text;
// Append the new element to the subMenuEl element.
    subMenuEl.appendChild(anchorEl);
  }
};
// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', (event) => {
// // The first line of code of the event listener function should call the event object's preventDefault()method.
  event.preventDefault();
// The second line of code function should immediately return if the element clicked was not an <a> element.  
  if (!event.target.matches('a'))
  return;
// console.log the content of the <a> to verify the handler is working.
  console.log(event.target.textContent);
// Next, the event listener should:
// Set showingSubMenu to false.
  showingSubMenu = false;
// Set the CSS top property of subMenuEl to 0.
  subMenuEl.style.top = '0';
// Remove the class name of active from each <a> element in topMenuLinks- 
//whether the activec lass exists or not.
  topMenuLinks.forEach((link) => link.classList.remove('active'));
// Update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl.
  if (event.target.textContent === 'ABOUT') {
    mainEl.innerHTML = '<h1>about</h1>';
  } else {
      mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  }
});