let user_first_Name = document.getElementById("user-f-name");
let user_Last_Name = document.getElementById("user-l-name");
let user_Email = document.getElementById("user-email");
let user_Subject = document.getElementById("user-subject");
let user_Custom_Messege = document.getElementById("user-messege");

// setTimeout(() => {
//     Sub() ;
// },5*1000);

let FullName=user_first_Name.value+ " "+user_Last_Name.value;

let Array=[
    {
        UserName:"",
        Email:""
    }
]


const Sub = () => {

    
    // console.log(user_first_Name.value);
    console.log(FullName);
    console.log(FullName);
    console.log(user_Email.value);
    console.log(user_Subject.value);
    console.log(user_Custom_Messege.value);

    
};
