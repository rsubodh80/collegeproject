//date
let date=new Date();
console.group(date.getDate());
console.log(date.getDate());
console.log(date.getDate());
    document.title='${date.getHours()}:${date.getminutes()}:${date.getseconds()}';
    setInterval(()=>{
        date=new Date();
        // document.title='${date.getHours()}:${date.getminutes()}:${date.getseconds()}';
        document.title=getDocumentTitle(date);
    },1000)