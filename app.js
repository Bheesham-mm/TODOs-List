var todo = document.getElementById('todo')
var getValue = document.getElementById('getData');
function add() {
    // console.log(getValue.value)
    if (getValue.value === '') {
        // console.log('empty')
        document.getElementById('error').innerHTML = 'please enter the data'
    } else {
        document.getElementById('error').innerHTML = ''
        var mainDiv = document.createElement('div');
        mainDiv.setAttribute('class', 'getItems')
        mainDiv.id = 'delete'
        todo.appendChild(mainDiv)
        var item_name = document.createElement('div');
        item_name.setAttribute('class', 'item-name');
        item_name.setAttribute('id', 'change');
        item_name.textContent = getValue.value;
        mainDiv.appendChild(item_name)
        var item_name_edit = document.createElement('div');
        item_name_edit.setAttribute('class', 'edit');
        var item_name_btn = document.createElement('button');
        item_name_btn.id = 'edit';
        item_name_btn.innerHTML = 'Edit';
        item_name_edit.appendChild(item_name_btn)
        mainDiv.appendChild(item_name_edit)

        var item_name_dele = document.createElement('div');
        item_name_dele.setAttribute('class', 'close');
        var item_name_del = document.createElement('button');
        item_name_del.id = 'del';
        item_name_del.innerHTML = 'Delete';
        item_name_dele.appendChild(item_name_del)
        mainDiv.appendChild(item_name_dele)

        item_name_btn.addEventListener("click", function () {
            var getNewData = prompt('Enter The New Data')
            if (getNewData === '') {
                getValue.value = '';
                document.getElementById('error').innerHTML = 'please enter the new data';
            } else if (getNewData === null) {
                getValue.value = '';
                item_name.innerHTML;
            }
            else {
                getValue.value = '';
                item_name.innerHTML = getNewData;
            }
        });

        item_name_del.addEventListener("click", function () {
            var funDel = confirm('Are you sure...!')
            if (funDel) {
                getValue.value = '';
                mainDiv.remove(); // This will remove the entire mainDiv when the delete button is clicked
            } else { alert('cancled...!') }
        });

    }
}