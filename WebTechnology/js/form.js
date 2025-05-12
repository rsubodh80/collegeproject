window.onload=()=>{
    let form=document.getElementById('studentForm');
    let input=document.querySelectorAll('#studentForm input');
    input.forEach(input=>{
        input.addEventListener('input',(ev)=>{
            console.log(e);
            if(e.target.type==='number'){

            }
            if(e.target.type==='text'){
                // console.log(input.target.value);
                ev.target.value=ev.target.value.trim();
            }
        })
    })
    form.addEventListener('submit',(e)=>{
        e.preventDefault();

                let fName=document.getElementById('fName').value
                let lName=document.getElementById('lName').value
                let age=document.getElementById('age').value
                let phone=document.getElementById('phoneNo').value
                let address=document.getElementById('address').value
                let gender=document.getElementById('gender').value
                let student={
                    fName,
                    lName,
                    age,
                    phoneNo:phone,
                    address,
                    gender
                }
                console.log(student);
            })
        }
  
    
