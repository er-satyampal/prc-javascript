/*const aws = {
    realname : "amazon",
    service :  "much"
};*/

const me = {
    say: "Hello",
    myname : "Satyam",
    lastname : "Pal",
    hobey : "drawing"
}
document.getElementById('bucket').innerHTML = me.say + " "+ "everyone"+" "+ "I" + 
" " + "am"+ me.myname +" "+ me.lastname+" "+ "and " + "hobey " + " "+  " is"+" "+ me["hobey"];