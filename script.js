function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}


var j = 0;
var ul = document.getElementsByClassName('mn-pymk-list__cards')[0];
var items = ul.getElementsByTagName('li');
var connect_div;
var connect_button;
var name;

// function loop_for_element() {

while (j < items.length) {

  connect_div = items[j].getElementsByClassName('mn-pymk-list__action-container');
  connect_button = connect_div[0].getElementsByClassName('button-secondary-small');
  name = items[j].getElementsByClassName('mn-person-info__name mn-person-info__name--card-layout Sans-15px-black-85%-semibold')[0].innerHTML;

  connect_button[0].click();

  console.log(j + ' :  invitation sent to  ' + name);

  sleep(1000);
  j++;
}

document.body.scrollTop = document.body.scrollHeight;

sleep(15000);

// }

