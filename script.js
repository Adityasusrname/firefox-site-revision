let changeUser=document.getElementById('changeUser')
let heading=document.getElementById('heading')


const nameStored=getName()

if(!nameStored){
    heading.textContent='Mozilla is cool,Name'
}
else{
    heading.textContent=`Mozilla is cool,${nameStored}`
}

function getName(){
    return localStorage.getItem('name')
}


function setName(){
    const name=prompt("Enter a name:")
    if(!name){
        setName()
    }
    else{
        localStorage.setItem('name',name)
        heading.textContent=`Mozilla is cool,${name}`
    }
}

changeUser.onclick=function(){
    setName()
}