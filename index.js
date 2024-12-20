let username=prompt("enter the username")
let domain=prompt("enter the domain name")
let id=prompt("enter the user id")
let package=prompt("enter your package")
let obj={
    name:username,
    roll:domain,
    number:id,
    salary:package
}

alert(`${obj.name} has placed ${obj.roll} with the package of ${obj.salary} with the id ${obj.number} `)


