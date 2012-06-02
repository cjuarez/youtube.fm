/**
 * Script that creates links to a youtube search for every song in last.fm
 * Author: Celso Ulises Juarez Ramirez (cjuarez)
 * Contact: celsojuarez at gmail
 */
function populateLinks() {
	var songsWithDiv = document.querySelectorAll('tbody td.subjectCell > div'),
		songsNoDiv = document.querySelectorAll('tbody td.subjectCell'),
		songs,
		urlPath = document.location.pathname.split("/"),
		i = 0,
		artist = '';
		songsWithDiv = Array.prototype.slice.call(songsWithDiv);
		songsNoDiv = Array.prototype.slice.call(songsNoDiv);
		songs = songsWithDiv.concat(songsNoDiv);
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