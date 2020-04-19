




  function start(){

  
 let a= getElementById("email");

fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfiAtchu3iqUzlMk1J-uEpFwTd1KJTbRqpbDVhharnu77uPEw/formResponse", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,la;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/x-www-form-urlencoded",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "x-chrome-connected": "id=109745892473306018407,mode=0,enable_account_consistency=false,consistency_enabled_by_default=false",
    "x-client-data": "CIe2yQEIpLbJAQjBtskBCKmdygEI0K/KAQi8sMoBCO21ygEIjrrKAQ=="
  },
  "referrer": "https://docs.google.com/forms/d/e/1FAIpQLSfiAtchu3iqUzlMk1J-uEpFwTd1KJTbRqpbDVhharnu77uPEw/viewform?fbzx=-5508625085048224709",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "a&draftResponse=%5Bnull%2Cnull%2C%22-5508625085048224709%22%5D%0D%0A&pageHistory=0&fbzx=-5508625085048224709",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

console.log(a);

  }