window.supportEmail = () => {
  var keys = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){keys[name]=value;});
  var subject = 'Support Query';
  if (keys.app) {
    var app = keys.app.replace('-', ' ');
    subject += ': ' + app;
  }
  if (keys.platform) {
    subject += ' (' + keys.platform + ')';
  }
  window.location = 'mailto:jrewapps@gmail.com?subject=' + subject;
  console.log(subject);
}
