// function click_button(i) {
//   var ul = document.getElementsByClassName('mn-pymk-list__cards')[0];
//   var items = ul.getElementsByTagName('li');
//   var connect_div;
//   var connect_button;
//   connect_div = items[i].getElementsByClassName('mn-pymk-list__action-container');
//   connect_button = connect_div[0].getElementsByClassName('button-secondary-small');
//   connect_button[0].click();
//
//   console.log('clicked ');
//
// }

function loop_for_element() {

  var j = 0;

  var ul = document.getElementsByClassName('mn-pymk-list__cards')[0];
  var items = ul.getElementsByTagName('li');

  while (j < items.length) {

    var connect_div;
    var connect_button;
    connect_div = items[j].getElementsByClassName('mn-pymk-list__action-container');
    connect_button = connect_div[0].getElementsByClassName('button-secondary-small');
    connect_button[0].click();
    console.log(j + ' button clicked ');
    sleep(5000);
    j++;

  }

  document.body.scrollTop = document.body.scrollHeight;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

window.onload = loop_for_element;