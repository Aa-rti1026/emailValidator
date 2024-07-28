console.log("this is my script")

let result = {
  "tag": "",
  "free": true,
  "role": false,
  "user": "aartiitian99",
  "email": "aartiitian99@gmail.com",
  "score": 0.64,
  "state": "deliverable",
  "domain": "gmail.com",
  "reason": "valid_mailbox",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": true,
  "did_you_mean": "",
  "format_valid": true
}
 submitBtn.addEventListener("click",async(e)=>{
  e.preventDefault()
  console.log("clicked!")
 let email= document.getElementById("username").value
 let key = "ema_live_C57LcBJJ6Jzh6agTfQ2fcLBKxgMg0qQkM4aPNoNm"
 let url = `https://app.emailvalidation.io/v1/info?apikey=${key}ema_live_C57LcBJJ6Jzh6agTfQ2fcLBKxgMg0qQkM4aPNoNm&email=${email}`
let res = await fetch(url)
let result = await res.json()
let str = ``;
  for(key of Object.keys(result)){
    str = str + `<div> ${key}: ${result[key]}</div>`
  }
  console.log("answer"+str)
  resultCont.innerHTML=str
})
 