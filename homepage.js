/* This function is template for adding event listener to button */
function clickAction(buttonClass, func){
    const button = document.querySelector(buttonClass);
   button.addEventListener("click",func);};
  
  /* This function is template for adding content */
  function getContent(divClass,content){
    const newContent = document.querySelector(".h1-3");
    newContent.innerHTML = content;

    const changeHere = document.querySelectorAll(".h1-2 a");
    changeHere.forEach(btn=>{
        btn.classList.remove("active-h1-2");
    });
    document.querySelector(divClass).classList.add("active-h1-2")
  };

  
  /* This is the direct call to function*/
  clickAction(".h1-2a",function(){getContent(".h1-2a","Hey there, I'm Dev (that's my actual name :D), a curious individual who's mastered <span>HTML, CSS, and JavaScript</span> through relentless self-study and hands-on projects. With a passion for learning and a drive for excellence, I'm ready to bring creativity and expertise to every web development endeavor."); });
  
  clickAction(".h1-2b",function(){getContent(".h1-2b", "Looking ahead, my goal is to master the <span>MERN stack</span>. With a passion for learning and a drive for excellence, I'm committed to expanding my skills and delving deeper into the world of full-stack development. By harnessing the power of MongoDB, Express.js, React, and Node.js, I aim to create dynamic and robust web applications that push the boundaries of possibility.");});
  
  clickAction(".h1-2c",function(){getContent(".h1-2c", "Previously, I immersed myself in the dynamic world of marketing while working at an IT firm. There, I not only refined my marketing skills but also delved into <span>cloud technologies and hosting solutions</span>. It was during this time that my fascination with web development truly flourished, igniting a passion that continues to drive me forward.");});



  const sectionTwo = document.querySelector(".section2");
  const secPart = document.querySelector(".scan1");
  const backLi = document.querySelector(".background li")


window.onscroll = ()=>{
  console.log(window.scrollY, sectionTwo.offsetTop, sectionTwo.offsetHeight)
  if(window.scrollY > sectionTwo.offsetTop - 300 && window.scrollY < sectionTwo.offsetTop + sectionTwo.offsetHeight -500){
    secPart.classList.add("active")
  }else{
    secPart.classList.remove("active");
    if(window.scrollY > 1170){
      secPart.classList.add("was")
    }
    else{
      secPart.classList.remove("was")
    }
  }
}