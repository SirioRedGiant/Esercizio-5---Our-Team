const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const staffContainer = document.getElementById("members-container");
console.log(staffContainer);

for (let i = 0; i < teamMembers.length; i++) {

  const member = teamMembers[i];
  console.log(member.name);

  const cardHtml = 
  `<div class="card-team-member">
          <img class="member-img" src="./${member.img}" alt="${member.img}" />
          <div class="member-dati">
            <div class="member-name">${member.name}</div>
            <div class="member-role">${member.role}</div>
            <a class="member-email" href="${member.email}"
              >${member.email}</a
            >
          </div>
        </div>
  `;
  console.log(member.name + " qui")
  staffContainer.innerHTML = staffContainer.innerHTML + cardHtml;
  console.log(member.name)
}
