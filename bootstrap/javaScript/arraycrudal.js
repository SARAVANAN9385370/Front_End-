let studentDetails=["saravanan","saro","nisha","omkar","logesh","senthil"];
var inserting=()=>
{
    let temp=document.getElementById('user')
    studentDetails.push(temp.value);
    alert("your values is added is sucessfully"+temp.value)
}
let viewpoint=()=>
{
    let hi="";
    studentDetails.map((data)=>
    {
        hi+="<tr><td>"+data+"</tr></td>"
    })
    const performance=document.getElementById('live');
    performance.innerHTML="<table align='center' style='padding':10px 10px 5px 10px; box-shadow:5px 6px 4px pink;><thead><tr><th> student name</th></tr></thead><tbody>"+hi+"</tbody></table>"

}
let updating=()=>
{
    let index=document.getElementById('user').value
    const newone=prompt("tell us what value you want update/replace"+studentDetails[index])
    studentDetails[index]=newone;
}
var deleting=()=>
{
    let temp=document.getElementById('user').value
    studentDetails=studentDetails.filter((data)=>
    {
        return data==temp;
    })
    alert('value is deleted')
}
