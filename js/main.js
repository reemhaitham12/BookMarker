
var bookMaker = document.getElementById("bookmaker");

var urlSite = document.getElementById("urlsite");

var AddSubmit = document.getElementById("addBtn");

var CloseBtn = document.getElementById("closeBtn");
var show = document.getElementById("ShowBox");

var bookmakerList;
if (localStorage.getItem('list') != null) {
    bookmakerList = JSON.parse(localStorage.getItem("list"));
    display();
}
else {
    bookmakerList = [];
}

// ! function add //

function addSite() {

    if (ValidationName() && ValidationSite()) {
        var site = {
            bookMaker: bookMaker.value,
            urlSite: urlSite.value
        };
        // push
        bookmakerList.push(site);
        localStorage.setItem("list", JSON.stringify(bookmakerList));
        display();
    } else {
        // show.classList.remove('d-none');
        ShowRemove();
    }
}
function ShowRemove (){
    document.body.classList.add('custom-bg-color');
    show.classList.remove('d-none');
}


// ! function display //

function display() {
    var tableSite = `
    <table class="table table-light" style="display: ${bookmakerList.length > 0 ? 'table' : 'none'}">
        <thead>
            <tr>
                <th scope="col" class="col-md-3">Index</th>
                <th scope="col" class="col-md-3">Website Name</th>
                <th scope="col" class="col-md-3">Visit</th>
                <th scope="col" class="col-md-3">Delete</th>
            </tr>
        </thead>
        <tbody>`;
    for (var i = 0; i < bookmakerList.length; i++) {
        tableSite += `
        <table class="table">
                        
                            <tr>
                                <th scope="row" id="index" class="col-md-3">${i + 1} </th>
                                <td class="col-md-3"> ${bookmakerList[i].bookMaker} </td>
                                <td class="col-md-3"> <a href="${bookmakerList[i].urlSite}" target="_blank"><button type="submit"
                                    class="bg-green btn text-white"><i class="fa-solid fa-eye text-white"></i> Visit</button>
                                </td>
                                <td class="col-md-3"><button type="button"
                                    class="btn btn-danger" onclick="deleteSite(${i})"> <i class="fa-solid fa-trash-can"></i> Delete</button>
                                </td>
                            </tr>
                        
        `
    }
    tableSite += `
        </tbody>
    </table>`;
    document.getElementById("outputSite").innerHTML = tableSite;
}


//! delete function

function deleteSite(index) {
    bookmakerList.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(bookmakerList));
    display();
}



// ! submit button

AddSubmit.onclick = function () {
    addSite();
    display();
    ClearInput();
}

//? Regex //

function ValidationName() {
    var text = bookMaker.value;

    var regex = /^([A-Z])?[a-z]{2,}$/;
    if (regex.test(text) == true) {
        bookMaker.classList.add('is-valid');
        bookMaker.classList.remove('is-invalid');
        return true;

    }
    else {
        bookMaker.classList.add('is-invalid');
        bookMaker.classList.remove('is-valid');
        return false;
    }
}


function ValidationSite() {
    var url = urlSite.value;

    var regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-])\/?$/;
    if (regex.test(url) == true) {
        urlSite.classList.add('is-valid');
        urlSite.classList.remove('is-invalid');
        return true;

    }
    else {
        urlSite.classList.add('is-invalid');
        urlSite.classList.remove('is-valid');
        return false;
    }
}

function CloseShow() {
    show.classList.add("d-none");
    document.body.classList.remove('custom-bg-color');
}

function ClearInput() {
    bookMaker.value = null;
    urlSite.value = null;
    bookMaker.classList.remove('is-invalid');
    urlSite.classList.remove('is-invalid');
    bookMaker.classList.remove('is-valid');
    urlSite.classList.remove('is-valid');
}


CloseBtn.onclick = function () {
    CloseShow();
    ClearInput();
}
