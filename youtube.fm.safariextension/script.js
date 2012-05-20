/**
 * Script that creates links to a youtube search for every song in last.fm
 * Author: Celso Ulises Juarez Ramirez (cjuarez)
 * Contact: celsojuarez at gmail
 */
function populateLinks() {
	var songs = (document.querySelectorAll('td.subjectCell > div').length > 0) ? document.querySelectorAll('td.subjectCell > div') : document.querySelectorAll('td.subjectCell'),
		urlPath = document.location.pathname.split("/"),
		i = 0,
		artist = '';
	if (urlPath[1] === "music") {
		artist = urlPath[2] + '+';
	}
	for (i; i < songs.length; i++) {
		var content = songs[i].innerHTML;
		var searchText = songs[i].innerText.replace(/\s/g,'+');
		var link = '<a class="youtube_link" href="http://www.youtube.com/results?search_query=' + artist + searchText + '"></a>&nbsp;';
		content = link + content;
		songs[i].innerHTML = content;
	}
}

populateLinks();