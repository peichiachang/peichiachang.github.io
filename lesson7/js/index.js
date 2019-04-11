//document ready
let bdy;
let name;
let bdm;
let bdd;
let gender;
let games = [];
let note;
$(function() {
  //文字框賦值
  $("#input_name").val("李小華");
  //文字框取值
  console.log("name is: " + name);
  //下拉選單賦值
  $("#sel_bdy").val("1993");
  $("#sel_bdm").val("02");
  $("#sel_bdd").val("05");
  //下拉選單取值

  console.log("bdy is: " + bdy);
  console.log("bdm is: " + bdm);
  console.log("bdd is: " + bdd);
  //radio賦值
  $("input[name='radio_gender'][value='f']").prop("checked", true);
  //radio取值

  console.log("gender is: " + gender);
  //checkbox賦值
  $("input[name='check_games'][value='0']").prop("checked", true);
  $("input[name='check_games'][value='1']").prop("checked", true);
  //checkbox取值
  $.map($("input[name='check_games']:checked"), function(el) {
    games.push($(el).val());
  });
  console.log("games is: " + games);
  //textarea賦值
  $("#text_note").val("Hi!餵食叔叔");
  //textarea取值
  console.log("note is: " + note);

  $("#send").click(function(e) {
    send(e);
  });
});

function send(e) {
  e.preventDefault();

  bdy = $("#sel_bdy").val();
  name = $("#input_name").val();
  bdm = $("#sel_bdm").val();
  bdd = $("#sel_bdd").val();
  gender = $("input[name='radio_gender']:checked").val();
  games = [];
  $.map($("input[name='check_games']:checked"), function(el) {
    games.push($(el).val());
  });
  note = $("#text_note").val();

  console.log("button click");
  console.log("name is: " + name);
  console.log("bd is: " + bdy + "-" + bdm + "-" + bdd);
  console.log("gender is: " + gender);
  console.log("games is: " + games);
  console.log("note is: " + note);
}
