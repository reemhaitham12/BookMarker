
var bookMaker = document.getElementById("bookmaker");

var urlSite = document.getElementById("urlsite");

var addsubmit = document.getElementById("addBtn");

var bookmakerList ;
if (localStorage.getItem('list') != null) {
    bookmakerList = JSON.parse(localStorage.getItem("list"));
    display();
}
else {
    bookmakerList = [];
}

// ! function add //

function addSite() {
    var site = {
        bookMaker: bookMaker.value,
        urlSite: urlSite.value
    }
    // push
    bookmakerList.push(site);
    localStorage.setItem("list", JSON.stringify(bookmakerList));
}

// ! function display //

function display() {
    //var tableSite = "";
    var tableSite = `
    <table class="table table-light">
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
                                <th scope="row" id="index" class="col-md-3">${i+1} </th>
                                <td class="col-md-3"> ${bookmakerList[i].bookMaker} </td>
                                <td class="col-md-3"> <a href="${bookmakerList[i].urlSite}" target="_blank"><button type="submit"
                                    class="bg-green btn text-white"><i class="fa-solid fa-eye text-white"></i> Visit</button>
                                </td>
                                <td class="col-md-3"><button type="button"
                                    class="btn btn-primary" onclick="deleteSite(${i})"> <i class="fa-solid fa-trash-can"></i> Delete</button>
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

addsubmit.onclick = function () {
    addSite();
    display();
    // console.log("hello")
}


// commit -m " "