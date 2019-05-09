//document ready
let bdy;
let name;
let phone;
let mail;
let bdm;
let bdd;
let gender;
let games = [];
let note;
$(function() {
  $("#send").click(function(e) {
    send(e);
  });
});

function send(e) {
  e.preventDefault();

  let allpass = true;
  $(".is-invalid").removeClass("is-invalid");
  $("#check_games_invalid").hide();
  name = $("#input_name").val();
  if (name == "") {
    $("#input_name").addClass("is-invalid");
    allpass = false;
  }

  phone = $("#input_phone").val();
  if (phone == "") {
    $("#input_phone").addClass("is-invalid");
    allpass = false;
  }

  mail = $("#input_mail").val();
  let patt = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/i;
  let result = patt.test(mail);
  if (mail == "" || !result) {
    $("#input_mail").addClass("is-invalid");
    allpass = false;
  }

  bdy = $("#sel_bdy").val();
  if (name == "") {
    $("#sel_bdy").addClass("is-invalid");
    allpass = false;
  }

  bdm = $("#sel_bdm").val();
  bdd = $("#sel_bdd").val();
  gender = $("input[name='radio_gender']:checked").val();
  games = [];
  $.map($("input[name='check_games']:checked"), function(el) {
    games.push($(el).val());
  });
  if (games.length == 0) {
    $("input[name='check_games']").addClass("is-invalid");
    $("#check_games_invalid").show();
  }

  note = $("#text_note").val();

  console.log("button click");
  console.log("name is: " + name);
  console.log("bd is: " + bdy + "-" + bdm + "-" + bdd);
  console.log("gender is: " + gender);
  console.log("games is: " + games);
  console.log("note is: " + note);
}
