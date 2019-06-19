for(var i = 0; i<10; i++){
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name" + " dong house";
    checkbox.value = "value";
    checkbox.id = "id" + i;
    document.body.appendChild(checkbox);
    document.write("checkbox"+i+"</br>");
}
//so we want to go through each thing, the link is the id
//then we can just call each thing as it comes
$(function(){
    
});
