const task3Element = document.getElementById('task-3');

function noParameters(){
    alert('Hi there');
}

function addName(name) {
    alert('Hi ' + name);
}

function combine(str1, str2, str3){
    const combinedText = str1 + str2 + str3;
    return combinedText;
}

const combinedString = combine('Hi', 'there', '!');
alert(combinedString);

task3Element.addEventListener('click', noParameters);

