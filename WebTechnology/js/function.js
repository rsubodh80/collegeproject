//14th june (Function)
//mainly predefined function
//user defined: Anonymous and NAMED FUNCTION

function getStudents(size)
{
    let container=[];
    for(i=0;i<size;i++){
        container.push[i];
    }
}
let _Students=getStudents(20);
console.log(_Students);

const _getStudents=(size)=>{
    return Array.from({length:size});
}
let _Students1=_getStudents(30);
console.log(_Students1);
//call back;
const parseStudent=(name)=>{
    console.log(name);
}
function getStudentDetailById(id,cb){
    //fetch call from server to retrive student details;
    cb("Ram Rai")
}

let studentDetail=getStudentDetailById(1,parseStudent)