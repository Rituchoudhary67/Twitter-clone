const signUpBtn = document.querySelector("#sign_up");
const createAcc = document.querySelector(".phone-email");
const joinCrossBtn = document.querySelector(".cross-btn");
const signUpCrossBtn = document.querySelector(".sign-cross");
const firstNextBtn = document.querySelector("#step1_btn");
const formTwoArrow = document.querySelector(".step2-arrow");
const formTwoNextBtn = document.querySelector(".form2-next-btn");
const formThreeArrowBtn = document.querySelector(".step3-arrow");
const formFourSignBtn = document.querySelector(".form3-next-btn");
const formFourArrow = document.querySelector(".step4-arrow");
const formFourNextBtn = document.querySelector(".form4-btn");
const fifthFormArrowBtn = document.querySelector(".step5-arrow");
const submitBtn = document.querySelector(".form5-btn");
// console.log(formFourNextBtn);
// console.log(formFourArrow)
// console.log(formFourSignBtn)
// console.log(formThreeArrowBtn)
// console.log(formTwoNextBtn);
// console.log(formTwoArrow);
// console.log(firstNextBtn)
// console.log(CrossBtn)
// console.log(createAcc);
// console.log(signUpBtn);

signUpBtn.addEventListener("click",(e) => {
    document.querySelector(".join-container").style.display = "flex";
})

// first page after clicking on create account with phone number 
createAcc.addEventListener("click",(e) => {
    // console.log("hello")
    document.querySelector(".step1-container").style.display ="flex";
})

// clicking on cross btn
joinCrossBtn.addEventListener("click",(e) => {
    document.querySelector(".join-container").style.display = "none";
    // document.querySelector(".step1-container").style.display = "none";
})
signUpCrossBtn.addEventListener("click",(e) => {
    document.querySelector(".step1-container").style.display = "none";
})

//for display of form two
firstNextBtn.addEventListener("click",(e)=> {
    document.querySelector(".step2-container").style.display = "flex";
    document.querySelector(".step1-container").style.display = "none";
})
formTwoArrow.addEventListener("click",(e) => {
    document.querySelector(".step1-container").style.display = "flex";
    document.querySelector(".step2-container").style.display = "none";
})
formTwoNextBtn.addEventListener("click", (e) => {
    document.querySelector(".step2-container").style.display = "none";  
    document.querySelector(".step3-container").style.display = "flex";
})

//for display of form three
formThreeArrowBtn.addEventListener("click",(e) => {
    document.querySelector(".step2-container").style.display = "flex";  
    document.querySelector(".step3-container").style.display = "none";  
})
formFourSignBtn.addEventListener("click",(e) => {
    document.querySelector(".step3-container").style.display = "none";  
    document.querySelector(".step4-container").style.display = "flex";
})

// function in form fuor
formFourArrow.addEventListener("click", (e)=> {
    document.querySelector(".step3-container").style.display = "flex";  
    document.querySelector(".step4-container").style.display = "none";  
})
formFourNextBtn.addEventListener("click",(e) => {
    document.querySelector(".step4-container").style.display = "none";  
    document.querySelector(".step5-container").style.display = "flex";
})

//function for fifth form
fifthFormArrowBtn.addEventListener("click",(e) => {
    document.querySelector(".step4-container").style.display = "flex";  
    document.querySelector(".step5-container").style.display = "none";  
})
submitBtn.addEventListener("click",(e)=> {
    alert("Sign up is sucessfully done...");
    document.querySelector(".step5-container").style.display = "none";
    document.querySelector(".join-child-container").style.display = "none";
    // document.querySelector(".join-container").style.display = "none";
})