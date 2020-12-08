$(document).ready(function() {
    var newTask = $("#new-task");
    var incompleteTask = $("#incomplete-task");
    var completeTask = $("#complete-task");
    // console.log(addBtn);
    // console.log(incompleteTask);

    var newList = function(task) {
        var newListItem = $("<tr></tr>");
        var newCheckbox = $("<td id='td-check'><input type='checkbox' class='checkbox'></td>");
        var newLabel = $("<td id='td-lbl'>" + task + "</td>");
        var newEditInput = $("<td id='td-input'><input type='text' class='edit-text'></td>");
        var newEditButton = $('<td><button class="edit-button"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg></button></td>');
        var newDeleteButton = $('<td><button class="delete-button"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></button></td>');
        console.log(newLabel.html(task));
        newListItem.append(newCheckbox)
            .append(newLabel)
            .append(newEditInput)
            .append(newEditButton)
            .append(newDeleteButton);

        return newListItem;
    }

    $('#btn-add').click(function() {
            var listItemToAdd = newList(newTask.val());
            console.log(listItemToAdd);
            incompleteTask.append(listItemToAdd);
            newTask.val("");
        })
        // $(".delete-button").click(function() {
        //     $(this).parent().remove();
        // })
    incompleteTask.on("click", ".delete-button", function() {
        $(this).parent().parent().remove();
        // console.log("pressed")
        // $(this).parents([".item"]).remove();

    })

    var edit = function(list, input, label) {
        if (list.hasClass("edit")) {
            list.removeClass("edit");
            label.html(input.val());
        } else {
            list.addClass("edit");
            input.val(label.html());
        }
    }
    incompleteTask.on("click", ".edit-button", function() {
        // console.log($(this).siblings('.edit-text'));
        // $(this).siblings('.edit-text').css("display", "inline");
        var lis = $(this).parent().parent();
        var inp = $(this).parent().siblings('#td-input').children();
        var lbl = $(this).parent().siblings('#td-lbl');
        console.log(inp, lbl);
        edit(lis, inp, lbl);
    })

    completeTask.on("click", ".delete-button", function() {
        $(this).parent().parent().remove();
    })

    incompleteTask.on("click", "input.checkbox", function() {
        console.log('checked');
        var Item = $(this).parent().parent();
        console.log(Item);
        completeTask.append(Item);
    })

    completeTask.on("click", 'input.checkbox', function() {
        var Item = $(this).parent().parent();
        console.log(Item);
        incompleteTask.append(Item);
    })
    completeTask.on("click", ".edit-button", function() {
        // console.log($(this).siblings('.edit-text'));
        // $(this).siblings('.edit-text').css("display", "inline");
        var lis = $(this).parent().parent();
        var inp = $(this).parent().siblings('#td-input').children();
        var lbl = $(this).parent().siblings('#td-lbl');
        console.log(inp, lbl);
        edit(lis, inp, lbl);
    })

})