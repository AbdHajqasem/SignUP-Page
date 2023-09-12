

let btn = document.getElementById("submit");
btn.addEventListener("click", function(event) {
  let flag=true;
  let Elements = document.getElementsByClassName("required");

  Array.from(Elements).forEach(element => {
    if (element.value === "") {
      let span = document.getElementById(element.name);
      console.log(span);
      span.innerText = "Required";
      flag=false;
    }
    else{
      let span = document.getElementById(element.name);
      span.innerText = "";
    }
  });

  let phone=document.getElementById("phone");
  let email=document.getElementById("mail");
  if(phone.value.length!==10){
    let span = document.getElementById(phone.name);
    span.innerText = "The mobile number should contain 10 digits ";
    flag=false;
  }
  else{
    let span = document.getElementById(phone.name);
    span.innerText = "";
  
  }
  if(!email.value.includes("@")){
    let span = document.getElementById(email.name);
    span.innerText = "email should contain '@'";
    flag=false;
  }
  else{
    let span = document.getElementById(phone.name);
    span.innerText = "";
  }
  event.preventDefault();
if(flag){
    const firstName = document.getElementById("firstname1").value;
    window.location.href = `/bootstrapsolution/welcome.html?firstname=${encodeURIComponent(firstName)}`;
  }
  
});
