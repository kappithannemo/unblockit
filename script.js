if(top != self) top.location.replace(location);
function openform() {document.getElementById('feedbackForm').style.display='block';document.getElementById('feedbackFrame').src='https://s.proxybay.one/index2.php';document.getElementById('feedbackBtn').style.display='none';}
function closeform(){document.getElementById('feedbackForm').style.display='none';document.getElementById('feedbackBtn').style.display='block';}
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
window.onload = function(){
  var domain = getParameterByName('domain');
  if (domain){if(domain.match('unblocked')){var domain = domain.replace('http','https')}var status = getParameterByName('status');var request=getParameterByName('request');document.getElementById('noticeContainer').innerHTML = '<span style="color: red;font-weight:bold;">Error: </span><span style="font-weight:bold">'+domain+'</span> seems to be down right now<br><a href="'+domain+request+'" title="Try URL again">Click here</a> to try again or pick another site (Error '+status+')';}
}
