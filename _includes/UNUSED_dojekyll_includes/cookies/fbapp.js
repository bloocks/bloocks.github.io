{% if site.fbappid %}
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.async = true;
  js.defer = true;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId={{ site.fbappid }}";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
{% endif %}