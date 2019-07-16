//Check if it supports.
function web_local_storage_is_supported() {

if (typeof(Storage) !== "undefined") {
	  return true;
	} else {
	  return false;
	}
}

//## LOCAL STORAGE
function web_local_storage_set(key,value) {
	localStorage.setItem(key,value);
}

function web_local_storage_get(key) {
	return localStorage.getItem(key);
}

function web_local_storage_remove(key) {
	localStorage.removeItem(key);
}

function web_local_storage_clear() {
	localStorage.clear();
}

//## SESSION STORAGE
function web_session_storage_set(key, value) {
	sessionStorage.setItem(key,value);
}

function web_session_storage_get(key) {
	return sessionStorage.getItem(key);
}

function web_session_storage_remove(key) {
	sessionStorage.removeItem(key);
}

function web_session_storage_clear(key) {
	sessionStorage.clear();
}

//## COOKIES
function web_cookie_set(key, value, expirationSeconds) {
	var co = key + "=" + value;
	
	if (expirationSeconds>0) {
		co = co + "; max-age=" + expirationSeconds;
	}

	document.cookie = co;
}

function web_cookie_get(key) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : "undefined";
}

function web_cookie_remove(key) {

	var co = key + "=remove; max-age=0";
	document.cookie = co;
}
