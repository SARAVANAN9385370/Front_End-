let customerDetails=["saravanan","21","male","b+ve","salem","tamilnadu"];
var inserting=()=>
{
    let temp=document.getElementById('client')
    customerDetails.push(temp.value);
    alert("your values is added is sucessfully"+temp.value)
}
let viewpoint=()=>
    {
        let bye="";
        customerDetails.map((data)=>
        {
            bye+="<tr><td>"+data+"</tr></td>"
        })
        const performance=document.getElementById('live');
        performance.innerHTML="<table align='center' style='padding':9px 10px 11px 12px; box-shadow:1px 2px 3px pink;><thead><tr><th>customer details</th></tr></thead><tbody>"+bye+"</tbody></table>"
    
    }
    let updating=()=>
        {
            let index=document.getElementById('client').value
            const newone=prompt("tell us what value you want update/replace"+customerDetails[index])
            customerDetails[index]=newone;
        }
        var deleting=()=>
            {
                let temp=document.getElementById('client').value
                customerDetails=customerDetails.filter((data)=>
                {
                    return data==temp;
                })
                alert('value is deleted')
            }
            