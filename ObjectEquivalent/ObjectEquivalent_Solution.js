function isEquivalent(a,b){
    
    let aProperties = Object.getOwnPropertyNames(a);
    let bProperties = Object.getOwnPropertyNames(b);

    if(aProperties.length != bProperties.length){
        return false;
    }

    for(let i = 0; i < aProperties.length; i++){
        let propertyName = aProperties[i];

        if(a[propertyName] !== b[propertyName]){
            return false;
        }
    }

    return true;
}

console.log(isEquivalent({name: "Robert", age: 23},{name: "Robert", age: 23}));