var form = document.getElementById('addForm')
var itemList= document.getElementById('items')
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit',addItem)
//Delete Item
itemList.addEventListener('click',removeItem)

//Filter Item
filter.addEventListener('keyup', filterItems);


function addItem(e){
    e.preventDefault()

if (document.getElementById('item').value!='')
 {
     //GEt input value
    var newItem=document.getElementById('item').value

//Create new li element
var li=document.createElement('li')
//add Class
li.className='list-group-item'

//add text node with input value
li.appendChild(document.createTextNode(newItem))

//create delete button element
var deletebutton=document.createElement('button')
deletebutton.className='btn btn-danger btn-sm float-right delete'
//Append text node
deletebutton.appendChild(document.createTextNode('X'))
//append button to li
li.appendChild(deletebutton)


//Apppend li to list
itemList.appendChild(li)

document.getElementById('item').value=''
    }else{
        alert("Enter something")
    }
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete this Item?')){
            var li= e.target.parentElement
            itemList.removeChild(li)
        }
    }
}
// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    
    var items= itemList.getElementsByTagName('li')
    //turning HTMLcollection into array
    Array.from(items).forEach(function(item){
        var itemName= item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text)!= -1) {
            item.style.display='block'
            
        }else{
            item.style.display='none'
        }
    })
    
}