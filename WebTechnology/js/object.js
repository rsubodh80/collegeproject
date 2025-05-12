let form=document.getElementById('studentForm');
form.addEventListener('submit',(e)=>{
e.preventDefault();
let fName=document.getElementById('fName').value
let lName=document.getElementById('lName').value
let age=document.getElementById('age').value
let gender=document.getElementById('gender').value
let phone=document.getElementById('phone').value

let date=document.getElementById('DOB').value

console.log(fName,lName,age,gender,phone,color,date)
let student={
    fName:fName,
    lName:lName,
    age:age,
    phone:phone,
    gender:gender
}
console.log(student)
})
let user={
    personalDetail:{
        fullName:"ram123",
        address:{
            city:"Kathmandu",
            pin:"1344",
            country:"Nepal"
        }
    },
    email:"subodh2073@gmail.com",
    getFavColor:(day)=>{
        return day?"RED":"BLACK";
    }
    isMarried:false,
    gender:"MALE",
    age:34,
}
console.log(user.personalDetail.address.pin);
user.personalDetail.fullName="Ram Kumar Rai";
delete user.isMarried;
console.log(user.isMarried);
console.log(user.getFavColor(true));//true
let keys=Object.keys(user);
console.log(keys);
let values=Object.values(user);
console.log(values);