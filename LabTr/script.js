var items = []
let inputlist = document.getElementById("Input")
let taskbox = document.querySelector(".list")
var a = 0
let Li = ""
function push() {
    Li = ""
    var arr = []
    Li += `<li id = "lis1">
                <input type = "checkbox" class = "check" onclick = "pushBlock(${a})">
                <p class = "tasks" id = "Block${a}"> ${inputlist.value} </p>
                <button class = "trash" onclick = "del(${a})" >
                    <img class = "image" src="trash.png" >
                </button>
            </li>`

    arr.push(Li)
    arr.push(a)
    arr.push(false)
    items.push(arr)
    inputlist.value = null
    taskbox.innerHTML += Li
    a++
}

function display() {
    Li = ""
    taskbox.innerHTML = ""
    for (const element of items) {
        Li += element[0]
    }
    taskbox.innerHTML = Li
}
function del(id) {
    for (var i = 0; i < items.length; i++) {
        if(items[i][1] == id){
            items.splice(i, 1)
            break
        }
    }
    display()
}

function pushBlock(id){
    for (var i = 0; i < items.length; i++) {
        if(items[i][1] == id && items[i][2] == false){
            document.getElementById(`Block${id}`).classList.remove("tasks")
            document.getElementById(`Block${id}`).classList.add("line")
            items[i][2] = true
            // console.log(items[i])
            break
        }else if (items[i][1] == id && items[i][2] == true){
            items[i][2] = false
            document.getElementById(`Block${id}`).classList.remove("line")
            document.getElementById(`Block${id}`).classList.add("tasks")
            // console.log(items[i])
            break
        }
    }
}