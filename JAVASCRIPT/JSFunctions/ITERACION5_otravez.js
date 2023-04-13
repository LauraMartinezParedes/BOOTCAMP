const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
console.log(mixedElements.length);

function averageWord (array) {
    let acc = 0;
    array.forEach(element =>{
        if(typeof element == "number"){
            acc+= element 
        }
        else(acc+=element.length)
        

    })
    return acc;

}
console.log(averageWord(mixedElements));
console.log(averageWordmixedElements);
