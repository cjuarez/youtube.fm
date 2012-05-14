/**
 * Script that creates links to a youtube search for every song in last.fm
 * Author: Celso Ulises Juarez Ramirez (cjuarez)
 * Contact: celsojuarez at gmail
 */
function populateLinks() {
	var songs = document.getElementsByClassName("subjectCell"),
		i = 0;
	for (i; i < songs.length; i++) {
		var content = songs[i].innerHTML;
		var searchText = songs[i].innerText;
		var link = '<a class="youtube_link" href="http://www.youtube.com/results?search_query=' + searchText + '"></a>&nbsp;';
		content = link + content;
		songs[i].innerHTML = content;
	}
}

populateLinks();