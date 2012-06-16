/**
 * Script that creates links to a youtube search for every song in last.fm
 * Author: Celso Ulises Juarez Ramirez (cjuarez)
 * Contact: celsojuarez at gmail
 */
(function () {
	"use strict";
	function joinNodeLists(nl1, nl2) {
		var r = Array.prototype.slice.call(nl1),
			i,
			j,
			found = false,
			bigger,
			smaller,
			withDivs = '';
		if (nl1.length === 0) {
			r = Array.prototype.slice.call(nl2);
		} else {
			if (nl1.length > nl2.length) {
				bigger = nl1;
				smaller = nl2;
				withDivs = 'bigger';
			} else {
				bigger = nl2;
				smaller = nl1;
				withDivs = 'smaller';
			}
			for (i = 0; i < bigger.length; i++) {
				for (j = 0; j < smaller.length; j++) {
					if (withDivs === 'bigger') {
						bigger[i] = bigger[i].parentNode;
					} else {
						smaller[i] = smaller[i].parentNode;
					}
					if (bigger[i] === smaller[j]) {
						found = true;
						break;
					}
				}
				if (!found) {
					r.push(nl1[j]);
				}
			}
		}
		return r;
	}

	function populateLinks() {
		var songsWithDiv = document.querySelectorAll('tbody td.subjectCell > div'),
			songsNoDiv = document.querySelectorAll('tbody td.subjectCell'),
			songsResult = document.querySelectorAll('#trackResults td.track'),
			songs,
			urlPath = document.location.pathname.split("/"),
			i = 0,
			artist = '',
			artistsNodeList = null,
			content,
			searchText,
			link;
		songs = joinNodeLists(songsWithDiv, songsNoDiv);
		if (urlPath[1] === "music") {
			artist = urlPath[2].replace('+',' ') + ' ';
		}
		for (i; i < songs.length; i++) {
			content = songs[i].innerHTML;
			searchText = songs[i].innerText;
			link = '<a class="youtube_link" href="http://www.youtube.com/results?search_query=' 
				+ encodeURIComponent(artist + searchText) 
				+ '"></a>&nbsp;';
			content = link + content;
			songs[i].innerHTML = content;
		}
		if (songsResult.length > 0) {
			artistsNodeList = document.querySelectorAll('#trackResults td.artist');
			for (i = 0; i < songsResult.length; i++) {
				content = songsResult.item(i).innerHTML;
				searchText = songsResult.item(i).innerText;
				artist = artistsNodeList.item(i).innerText;
				link = '<a class="youtube_link" href="http://www.youtube.com/results?search_query=' 
					+ encodeURIComponent(artist + ' ' + searchText) 
					+ '"></a>&nbsp;';
				content = link + content;
				songsResult.item(i).innerHTML = content;
			}
		}
	}
	populateLinks();
}());