const membersSection = document.querySelector(".members")
console.log("test");
$.ajax({
    type: "post",
    url: "webytom.cz/amped-land/members.json",
    success: function(members) {
        members.forEach(member => {
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
});