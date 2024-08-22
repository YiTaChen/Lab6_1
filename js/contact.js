function checkData() {
  let name = document.getElementById("contact_name").value;
  let email = document.getElementById("contact_email").value;
  let phone = document.getElementById("contact_phone").value;
  let contact_msg = document.getElementById("contact_message").value;

  if (name.length < 5) {
    alert("Name must be at least 5 characters.");
  }
  if (
    String(email).indexOf("@") == -1 ||
    email.length < 5 ||
    String(email).indexOf(".") == -1
  ) {
    alert("Email must be format of xxx@xxx.xxx");
  }

  if (isNaN(Number(phone)) || phone.length < 1) {
    alert("Phone number must use only numbebrs.");
  }

  if (contact_msg.length < 5) {
    alert("Message must be at least 5 characters.");
  }
}
