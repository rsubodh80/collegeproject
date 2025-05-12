function setCookie(cookieName,cookieValue,expiryTime){
    document.cookie=`${cookieName}=${cookieValue}`
}
setCookie('name','ram')

setCookie('age','20');
function getcookieByKey(cookieName){
    let stored=document.cookie;
    let storedArr=stored.split(';');
    storedArr.forEach(item=>{
        let entries=item.split('=')
        let key=entries[1].trimStart();
        let value=entries[1].trimStart();
        if(cookieName===key){
            val=value;
        }
    })
   return val;
}
console.log(getcookieByKey('name'));