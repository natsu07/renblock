$(function() {
	$('body').on('click', 'a', function(e) {
		// add history
		var url = $('#base_url').val();
		if (url.substring(url.length - 1) != '/') {
			url = url + '/';
		}
		var next_page = $('#next_page').text() - 1;
		if (next_page > 1) {
			window.history.pushState(null, null, url + next_page);
		}
	});
	//戻る・進むボタンを押したとき
	onpopstate = function(event) {
		changeContents(location.pathname);
	};
	//コンテンツの切り替え
	function changeContents(url) {
		$('article').load(url+' section');
	}
});
