let Name = document.getElementById("inputName"),
link = document.getElementById("inputLink"),
btn = document.getElementById("click"),
container = "",
links;

let linksArray = localStorage.getItem('links') ? JSON.parse(localStorage.getItem('links')) : [];

localStorage.setItem('links', JSON.stringify(linksArray));
const data = JSON.parse(localStorage.getItem('links'));



btn.onclick = function () {

    addLink();
    displayFinalItem();

}

function addLink()
{
    var group =
        {
            name: Name.value,
            link: link.value
        }


    linksArray.push(group);

    localStorage.setItem("links", JSON.stringify(linksArray));

}



function displayFinalItem()
{
    for(var i = linksArray.length - 1; i < linksArray.length; i++)
        {
            container +='<div class="col-md-12 pb-5" style="background-image: linear-gradient(#EEE,#FFF)"><h3 class="pt-5 w-50">' + linksArray[i].name + '</h3><a target="_blank" class="btn btn-primary float-right style = "backgroundcolor:#0a3f77 !important" href="https://' + linksArray[i].link + '">Visit</a><button style = "backgroun-color:#910004" class="btn btn-danger float-right mr-2" onclick="deleteLink(' + i + ')">Delete</button></div>';
        }

    document.getElementById("data").innerHTML = container;
    Name.value = "";
    link.value = "";
}

function displayData()
{
    for(var i = 0; i < linksArray.length; i++)
        {
            container +='<div class="col-md-12 pb-5" style="background-image: linear-gradient(#EEE,#FFF)"><h3 class="pt-5 w-50">' + linksArray[i].name + '</h3><a target="_blank" class="btn btn-primary float-right style = "backgroundcolor:#0a3f77 !important" href="https://' + linksArray[i].link + '">Visit</a><button style = "backgroun-color:#910004" class="btn btn-danger float-right mr-2" onclick="deleteLink(' + i + ')">Delete</button></div>';
        }

    document.getElementById("data").innerHTML = "";
    document.getElementById("data").innerHTML = container;
    Name.value = "";
    link.value = "";
    for(var i = 0; i < linksArray.length; i++){
      console.log(linksArray[i].name);
    }
}
if(linksArray != null){
  displayData();
}
function deleteLink(id) {
    // alert(id);
    container = "";
    linksArray.splice(id, 1);
    localStorage.setItem('links', JSON.stringify(linksArray));
    displayData();
}
