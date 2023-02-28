/* Client form JS */
src = "https://smtpjs.com/v3/smtp.js"


function sendclientEmail() {
	let full_name = document.getElementById("full_name").value;
	let email = document.getElementById("email").value;
	let country = document.getElementById("country").value;
	let phone_no = document.getElementById("phone_no").value;
	let address = document.getElementById("address").value;
	let city = document.getElementById("city").value;
	let state = document.getElementById("state").value;
	let location_type = document.getElementById("location_type").value;
	let div1 = document.getElementById("div1").value;
	let enquiry_type = document.getElementById("enquiry_type").value;
	let message = document.getElementById("message").value;

	let body = "Full Name : " + full_name + "<br /> Email : " + email + "<br /> Country : " + country + "<br /> Phone Number : " + phone_no +
		"<br /> Address : " + address + "<br /> City : " + city + "<br /> State : " + state + "<br /> Location type : " + location_type +
		"<br /> Enquiry Type : " + enquiry_type + "<br /> Message : " + message + "<br /> Other : " + div1 + "<br /> Other  : " + div2;

	console.log(body);

	Email.send({
		SecureToken: "8bf2ba7d-ca56-4189-be3c-23fde8ec1b36",
		To: "info@rimonecharge.com",
		From: "headhunter0109@gmail.com",
		Subject: "New entry from Client Us form : ",
		Body: body,
	}).then(
		message => alert("Sent Successfully!")
	);
}



type = "text/javascript"
function showlocation(name) {
	if (name == 'Other') document.getElementById('div1').innerHTML = 'Other: <input type="text" name="other" id="div1" class="other_location" />';
	else document.getElementById('div1').innerHTML = '';
}
type = "text/javascript"
function showquery(name) {
	if (name == 'Other Enquiry') document.getElementById('div2').innerHTML = 'Other: <input type="text" name="other" id="div2" class="other_query" />';
	else document.getElementById('div2').innerHTML = '';
}


// Disable right click
// document.addEventListener('contextmenu', event => event.preventDefault());


// To disable autocomplete
// document.addEventListener("DOMContentLoaded", function () {
// 	document.getElementById("form").setAttribute("autocomplete", "off");
// });

// <!-- Backend function for country code -->
// <script>
//   var input = document.querySelector("#phoneNumber");
//   window.intlTelInput(input, {
// 	// show dial codes too
// 	separateDialCode: true,
// 	// If there are some countries you want to show on the top.
// 	preferredCountries: ["in", "us"],
// 	//Default country
// 	initialCountry: "in",
// 	// show only these countres, remove all other
// 	//onlyCountries: ["ru", "cn", "pk", "sg", "my", "bd"],
// 	// If there are some countries you want to execlde.
// 	// here we are exluding india and israel.
// 	//excludeCountries: ["in", "il"]
//   });

src="https://smtpjs.com/v3/smtp.js"

  function sendEmail() {
	let first_name = document.getElementById("first_name").value;
	let last_name = document.getElementById("last_name").value;
	let email = document.getElementById("email").value;
	let phone_no = document.getElementById("phone_no").value;
	let message = document.getElementById("message").value;

	let body = "First Name : " + first_name + "<br/> Last Name : " + last_name + "<br/> Email :" + email + "<br/> Phone Number :" + phone_no +
	  "<br/> Message : " + message;

	console.log(body);

	Email.send({
	  SecureToken : "8bf2ba7d-ca56-4189-be3c-23fde8ec1b36",
	  To: "info@rimonecharge.com",
	  From: "headhunter0109@gmail.com",
	  Subject: "New entry from Contact Us form: ",
	  Body: body
	}).then(
	  message => alert("Sent Successfully!")
	);
  }
