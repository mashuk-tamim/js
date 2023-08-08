var n=parseInt(readline());
for(let i=0; i<n; i++)
{
    let b=readline();
    let a='';
    for(let j=0; j<b.length; j++)
    {
        if(j===0 || j===b.length)
        {
            a=a+b[j];
        }
        else
        {
            a=a+b[j];
            j++;
        }
    }
    console.log(a);
}