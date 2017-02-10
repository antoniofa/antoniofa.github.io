function toggle(name) {
  var swt=document.getElementById('switch-'+name).firstChild;
  var bls=document.getElementById('block-'+name).style;
  if (swt.data=='[+]') { swt.data='[-]'; bls.display='block'; }
  else { swt.data='[+]'; bls.display='none'; }
}

window.onload=function() {
  var els=document.getElementsByTagName('*');
  for (var i=0;i<els.length;i++) {
    var cl=els[i].getAttribute('class');
    var na=els[i].getAttribute('name');
    if (cl=='switch') {
      els[i].setAttribute('id','switch-'+na);
      els[i].setAttribute('onclick','toggle("'+na+'")');
      els[i].style.cursor='pointer'; }
    if (cl=='block') {
      els[i].setAttribute('id','block-'+na);
      els[i].style.display='none';
      els[i].removeAttribute('class'); }
  }
}

