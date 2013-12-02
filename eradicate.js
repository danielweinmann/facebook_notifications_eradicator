var removeNotificationsFromTitle = function(title) {
  document.title = title.replace(/^\(.+\)/, '');
};
removeNotificationsFromTitle(document.title);

$(document).ready(function(){
  removeNotificationsFromTitle(document.title);
  var target = document.querySelector('head > title');
  var observer = new window.WebKitMutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      removeNotificationsFromTitle(mutation.target.textContent);
    });
  });
  observer.observe(target, { subtree: true, characterData: true, childList: true });
});
