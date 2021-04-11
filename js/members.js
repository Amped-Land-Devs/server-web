const membersSection = document.querySelector(".members")
console.log("test");
/*$.ajax({
    type: "get",
    url: "https://webytom.cz/amped-land/members.json",
    dataType: 'json',
    success: function(members) {
        console.log("Members: " + members);
        members.forEach(member => {
            console.log(member);
            let memberDiv = document.createElement("div")
            memberDiv.classList.add("member")

            let mcskin = document.createElement("img")
            mcskin.classList.add("mcskin")
            mcskin.setAttribute("src", member.mcskin)
            memberDiv.appendChild(mcskin)

            let mcname = document.createElement("div")
            mcname.classList.add("mcname")
            mcname.innerHTML = member.mcname
            memberDiv.appendChild(mcname)

            let rank = document.createElement("div")
            rank.classList.add("rank")
            rank.innerHTML = member.rank
            memberDiv.appendChild(rank)

            let socials = document.createElement("div")
            socials.classList.add("socials")
            member.socials.forEach(social => {
                let socialSpan = document.createElement("span")
                socialSpan.classList.add("social")
                socialSpan.innerHTML = social.name + " -> " + social.value
                socials.appendChild(socialSpan)
            });
            memberDiv.appendChild(socials)

            membersSection.appendChild(memberDiv)
        });
    },
    error: function(jqXHR, exception, error) {
        console.log(jqXHR);
        console.log(exception);
        console.log(error);
    }
});*/
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        json = unescape(this.response);
        members = JSON.parse(json);
        console.log("Members: " + members);
        members.forEach(member => {
            console.log(member);
            let memberDiv = document.createElement("div")
            memberDiv.classList.add("member")

            let mcskin = document.createElement("img")
            mcskin.classList.add("mcskin")
            mcskin.setAttribute("src", member.mcskin)
            memberDiv.appendChild(mcskin)

            let mcname = document.createElement("div")
            mcname.classList.add("mcname")
            mcname.innerHTML = member.mcname
            memberDiv.appendChild(mcname)

            let rank = document.createElement("div")
            rank.classList.add("rank")
            rank.innerHTML = member.rank
            memberDiv.appendChild(rank)

            let socials = document.createElement("div")
            socials.classList.add("socials")
            member.socials.forEach(social => {
                let socialSpan = document.createElement("span")
                socialSpan.classList.add("social")
                socialSpan.innerHTML = social.name + " -> " + social.value
                socials.appendChild(socialSpan)
            });
            memberDiv.appendChild(socials)

            membersSection.appendChild(memberDiv)
        });
    }
};
xhttp.open("GET", "https://webytom.cz/amped-land/get.php", true);
xhttp.send();