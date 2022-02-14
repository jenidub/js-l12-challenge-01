const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async function (numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api/?results=${numUsers}`);
    let data = await usersRequest.json();
    let userResults = data.results;
    displayUsers(userResults);
};

const displayUsers = function (arr) {
    randomFolks.innerHTML = "";
    for (let user of arr) {
        console.log(user);
        console.log("***");
        let country = user.location.country;
        let name = user.name.first;
        let imageURL = user.picture.medium;
    
        let userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageURL} alt="User ${name} profile avatar" />
        `;

        randomFolks.append(userDiv);
    };
};


selectUserNumber.addEventListener("change", function(e) {
    let numUsers = e.target.value;
    console.log(numUsers);
    getData(numUsers);
})