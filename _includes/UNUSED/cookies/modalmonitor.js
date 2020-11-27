{% if page.modalmonitor %}
MODAL.Monitor.init({
  "modalBackdropClass" : ".modal-monitor-backdrop",
  "modalClass" : ".modal-monitor",
  "cssTransitions" : {
    "used" : "true",
    "class" : "show",
    "delay" : "300"
  },
  "frequencyDefault" : "1",
  "cookieNames" : {
    "default" : "conversion-false",
    "conversion" : "conversion-true"
  }
});
{% endif %}