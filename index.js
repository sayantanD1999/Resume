function show_info() {
  document.getElementById("show_info").style.display = "block";
  document.getElementById("content").style.display = "block";
  document.getElementById("front").style.display = "none";
}
var img_src;

function getting_img(input) {
  console.log(2);
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#set_img").attr("src", e.target.result);
      $("#set_img").css("border-radius", "80%");
      img_src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function set_img() {
  document.getElementById("img2").click();
}



count = 0;


function add_office() {
  count = count + 1;
  console.log(count);

  if (count < 3) {
    var div = document.createElement("div");
    div.id = "office";

    var company = `
    <h3>Company Details</h3>
    <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="
          block
          uppercase
          tracking-wide
          text-gray-700 text-xs
          font-bold
          mb-2
        "
      >
        Company
      </label>
      <input
        class="
          company_name
          appearance-none
          block
          w-full
          bg-gray-200
          text-gray-700
          border border-red-500
          rounded
          py-3
          px-4
          mb-3
          leading-tight
          focus:outline-none focus:bg-white
        "
        type="text"
        placeholder="Company"
      />
    </div>

    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="
          block
          uppercase
          tracking-wide
          text-gray-700 text-xs
          font-bold
          mb-2
        "
      >
        Job Responsibility
      </label>
      <input
        class="
          company_post
          appearance-none
          block
          w-full
          bg-gray-200
          text-gray-700
          border border-red-500
          rounded
          py-3
          px-4
          mb-3
          leading-tight
          focus:outline-none focus:bg-white
        "
        type="text"
        placeholder="Post"
      />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="
          block
          uppercase
          tracking-wide
          text-gray-700 text-xs
          font-bold
          mb-2
        "
      >
        From
      </label>
      <input
        class="
          company_time_from
          appearance-none
          block
          w-full
          bg-gray-200
          text-gray-700
          border border-gray-200
          rounded
          py-3
          px-4
          leading-tight
          focus:outline-none focus:bg-white focus:border-gray-500
        "
        type="month"
        placeholder="90210"
      />
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="
          block
          uppercase
          tracking-wide
          text-gray-700 text-xs
          font-bold
          mb-2
        "
      >
        To
      </label>
      <input
        class="
          company_time_to
          appearance-none
          block
          w-full
          bg-gray-200
          text-gray-700
          border border-gray-200
          rounded
          py-3
          px-4
          leading-tight
          focus:outline-none focus:bg-white focus:border-gray-500
        "
        type="month"
      />
    </div>
  </div>
  <label class="block text-left" style="max-width: 50%">
  <span class="text-gray-700"><b> Work Experience And Details </b> </span>
  <textarea
    placeholder="Things you have explored (Max 50 words)"
    class="form-textarea mt-1 block w-full company_experience_details"
    rows="3"
  ></textarea>
</label>
    `;
    var company_div = document.createElement("DIV");
    company_div.innerHTML = company;

    document.getElementById("box").appendChild(company_div);
  } else {
    alert("Maximum 3 companies' details are accepted");
  }
}
function addachievement() {
  var achievement = ` <input
  class="
    achievement
    appearance-none
    block
    w-full
    bg-gray-200
    text-gray-700
    border border-red-500
    rounded
    py-3
    px-4
    mb-3
    leading-tight
    focus:outline-none focus:bg-white
  "
  type="text"
  placeholder="Achievement"
/>`;
  var div = document.createElement("DIV");
  div.innerHTML = achievement;
  document.getElementById("new_achievement").appendChild(div);
}
function show_pg() {
  document.getElementById("pg_info").style.display = "block";
  document.getElementById("pg_details").style.display = "block";
}
function toggle_hobbies_list() {
  var div = document.getElementById("hobby-container");
  div.classList.toggle("toggle_list");
}
function toggle_skills_list() {
  var div = document.getElementById("skill-container");
  div.classList.toggle("toggle_list_skill");
}
function searchHobby(val) {
  console.log(val);
  var hobbies = document.getElementsByClassName("hobbies");
  for (let i = 0; i < hobbies.length; i++) {
    v = val.toUpperCase();
    string = hobbies[i].innerText.toUpperCase();
    if (string.indexOf(v) == -1) {
      hobbies[i].style.display = "none";
    } else {
      hobbies[i].style.display = "block";
    }
  }
}
function searchSkill(val) {
  console.log(val);
  var skills = document.getElementsByClassName("skills");
  for (let i = 0; i < skills.length; i++) {
    v = val.toUpperCase();
    string = skills[i].innerText.toUpperCase();
    if (string.indexOf(v) == -1) {
      skills[i].style.display = "none";
    } else {
      skills[i].style.display = "block";
    }
  }
}

var skill_list = [];

function addskill(val) {
  var div = document.createElement("DIV");
  if (val == "inp") {
    let inpSkill = document.getElementById("searchSkill").value;
    console.log(inpSkill);
    let skill_div = `
        <div class="addedskill">
          <p>${inpSkill}</p> <span onclick="removeSkill(this)" class="cross"> &times;</span>
        </div>
  `;
    div.innerHTML = skill_div;
    skill_list.push(inpSkill);
  } else {
    let skill_div = `
        <div class="addedskill">
          <p>${val}</p> <span onclick="removeSkill(this)" class="cross"> &times;</span>
        </div>
  `;
    div.innerHTML = skill_div;
    skill_list.push(val);
  }
  document.getElementById("new_skill").appendChild(div);
}

var hobby_list = [];

function addhobby(val) {
  console.log(val);
  var div = document.createElement("DIV");
  if (val == "inp") {
    let inphobby = document.getElementById("searchHobby").value;
    let hobby_div = `
        <div class="addedhobby">
          <p>${inphobby}</p> <span onclick="removeHobby(this)" class="cross"> &times;</span>
        </div>
  `;
    hobby_list.push(inphobby);
    div.innerHTML = hobby_div;
  } else {
    let hobby_div = `
        <div class="addedhobby">
          <p>${val}</p> <span onclick="removeHobby(this)" class="cross"> &times;</span>
        </div>
  `;
    hobby_list.push(val);
    div.innerHTML = hobby_div;
  }
  document.getElementById("new_hobby").appendChild(div);
}

function removeSkill(div) {
  console.log(div);
  var ele = div.parentElement;
  var skill = ele.querySelector("p").innerHTML;
  for (let i = 0; i < skill_list.length; i++) {
    if (skill_list[i] == skill) {
      skill_list.splice(i, 1);
    }
  }
  div.parentElement.remove();
}

function removeHobby(div) {
  console.log(div.parentElement);
  var ele = div.parentElement;
  var hobby = ele.querySelector("p").innerHTML;
  for (let i = 0; i < hobby_list.length; i++) {
    if (hobby_list[i] == hobby) {
      hobby_list.splice(i, 1);
    }
  }
  console.log(hobby);

  div.parentElement.remove();
}

var theme;
function set_theme(div,color) {

  var icons = document.querySelectorAll('.colors i');
  for(let i=0;i<icons.length;i++)
  {
    icons[i].style.display = "none";
  }


  console.log(div);
  div.querySelector('i').style.display="block";
  theme = color;

}

function submit() {
  document.getElementById("img").src = img_src;

  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var name = fname + " " + lname;

  var dob = document.getElementById("dob").value;
  console.log(dob);
  var email = document.getElementById("email").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var phone = document.getElementById("telephone").value;
  document.getElementById("set_name").innerHTML = name;
  document.getElementById("set_dob").innerHTML = dob;
  document.getElementById("set_email").innerHTML = email;
  document.getElementById("set_city").innerHTML = city;
  document.getElementById("set_state").innerHTML = state;
  document.getElementById("set_zip").innerHTML = zip;
  document.getElementById("set_phone").innerHTML = phone;

  var ug_degree = document.getElementById("ug_degree_name").value;
  var college = document.getElementById("college").value;
  var subject = document.getElementById("subject").value;
  var ug_from = document.getElementById("college-from").value;
  var ug_to = document.getElementById("college-to").value;
  var ug_duration = ug_from + " " + ug_to;

  var bio = document.getElementById("bio").value;
  document.getElementById("set_bio").innerHTML = bio;

  document.getElementById("set_ug_degree").innerHTML = ug_degree;
  document.getElementById("set_college").innerHTML = college;
  document.getElementById("set_subject").innerHTML = subject;
  document.getElementById("set_ug_time").innerHTML = ug_duration;

  if (document.getElementById("pg_info").style.display == "block") {
    var pg_degree = document.getElementById("pg_degree").value;
    var University = document.getElementById("pg_college").value;
    var pg_subject = document.getElementById("pg_subject").value;
    var pg_from = document.getElementById("pg-college-from").value;
    var pg_to = document.getElementById("pg-college-to").value;
    var pg_duration = pg_from + " " + pg_to;

    document.getElementById("set_pg_degree").innerHTML = pg_degree;
    document.getElementById("set_pg_college").innerHTML = University;
    document.getElementById("set_pg_subject").innerHTML = pg_subject;
    document.getElementById("set_pg_duration").innerHTML = pg_duration;
  }

  if (document.getElementById("internship-organization").value != " ") {
    i_org = document.getElementById("internship-organization").value;
    i_sub = document.getElementById("internship-subject").value;
    i_notes = document.getElementById("notes").value;
    i_time = document.getElementById("duration").value;

    var internship = `
    <h3>Internship & Training</h3>
    <p><b> ${i_org} | ${i_sub} | ${i_time} </b> </p>

      ${i_notes}
    `;
    var internship_div = document.createElement("DIV");
    internship_div.innerHTML = internship;
    document
      .getElementById("set_internship_details")
      .appendChild(internship_div);
  }

  if (document.getElementsByClassName("company_name").length != 0) {
    var c_time_from = [];
    var c_time_to = [];
    p_details = document.getElementsByClassName("company_experience_details");
    p_org = document.getElementsByClassName("company_name");
    p_post = document.getElementsByClassName("company_post");
    var company_from = document.getElementsByClassName("company_time_from");
    for (let i = 0; i < company_from.length; i++) {
      c_time_from.push(company_from[i].value);
    }
    var company_to = document.getElementsByClassName("company_time_to");
    for (let i = 0; i < company_to.length; i++) {
      c_time_to.push(company_to[i].value);
    }

    var com_str='';

    for (
      let i = 0, j = 0,k=0, l = 0, m = 0;
      i < p_org.length,
        j < p_post.length,
        k<p_details.length,
        l < c_time_from.length,
        m < c_time_to.length;
      i++, j++,k++, l++, m++
    ) {
      com_str += `
      <h2>${p_post[j].value}</h2>
      <p> <b> ${p_org[i].value} | ${c_time_from[l]} - ${c_time_to[m]} </b> </p>
      <p>${p_details[j].value}</p>
      `;
    }

    var com_div = document.createElement("DIV");
    com_div.innerHTML = com_str;
    document.getElementById("set_job_details").appendChild(com_div);
  }

  var skills_str = " ";
  for (var i = 0; i < skill_list.length; i++) {
    skills_str += `<p>${skill_list[i]}</p>`;
  }
  var skills_div = document.createElement("DIV");
  skills_div.innerHTML = skills_str;
  document.getElementById("set_skills").appendChild(skills_div);

  var hobby_str = " ";
  for (var i = 0; i < hobby_list.length; i++) {
    hobby_str += `<p>${hobby_list[i]}</p>`;
  }
  var hobbys_div = document.createElement("DIV");
  hobbys_div.innerHTML = hobby_str;
  document.getElementById("set_hobbies").appendChild(hobbys_div);

  if (document.getElementById("linkedin").value != " ") {
    var linkedin_link = document.getElementById("linkedin").value;
    var linkedin_str = `
    <p> LinkedIn  </p>   
    <p> ${linkedin_link} </p>`;
    var linkedin_div = document.createElement("DIV");
    linkedin_div.innerHTML = linkedin_str;
    document.getElementById("set_links").appendChild(linkedin_div);
  }
  if (document.getElementById("github").value != " ") {
    var github_link = document.getElementById("github").value;
    var github_str = `
    <p> Github  </p>   
    <p> ${github_link} </p>`;
    var github_div = document.createElement("DIV");
    github_div.innerHTML = github_str;
    document.getElementById("set_links").appendChild(github_div);
  }
  if (document.getElementById("portfolio").value != " ") {
    var portfolio_link = document.getElementById("portfolio").value;
    var portfolio_str = `
    <p> portfolio  </p>   
    <p> ${portfolio_link} </p>`;
    var portfolio_div = document.createElement("DIV");
    portfolio_div.innerHTML = portfolio_str;
    document.getElementById("set_links").appendChild(portfolio_div);
  }
  if (document.getElementById("drivedocs").value != " ") {
    var drivedocs_link = document.getElementById("drivedocs").value;
    var drivedocs_str = `
    <p> Drive-Docs  </p>   
    <p> ${drivedocs_link} </p>`;
    var drivedocs_div = document.createElement("DIV");
    drivedocs_div.innerHTML = drivedocs_str;
    document.getElementById("set_links").appendChild(drivedocs_div);
  }

  if (document.getElementsByClassName("achievement")[0].value != " ") {
    var achievement_list = document.getElementsByClassName("achievement");
    var achievement_str = " ";
    for (var i = 0; i < achievement_list.length; i++) {
      achievement_str += `<p><i class="fas fa-dot-circle" style="font-size: 10px; padding-right: 10px;">${achievement_list[i]}</p>`;
    }
    var achievement_div = document.createElement("DIV");
    achievement_div.innerHTML = achievement_str;
    document
      .getElementById("set_achievements_details")
      .appendChild(achievement_div);
  }

  var get_languages = document.getElementById("languages").value;
  document.getElementById("set_languages").innerHTML = get_languages;
  document.getElementsByClassName("top_div")[0].style.backgroundColor = theme;
  pdf();
}

function get_pdf_name() {
  document.getElementById("whole_page").style.display = "flex";
  document.getElementById("pdf_div").style.display = "block";
}

function reloadContent(){
location.reload();
}

function pdf() {
  var file_name = document.getElementById("pdf_ip").value;
  const invoice = this.document.getElementById("pdf_div");
  console.log(invoice);
  console.log(window);
  var opt = {
    margin: 0,
    filename: file_name,
    image: { type: "jpeg", quality: 2 },
    html2canvas: { scale: 10 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().from(invoice).set(opt).save();
  // reloadContent();
  setTimeout(reloadContent, 5000);

}


