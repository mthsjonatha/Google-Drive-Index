function init() {
	document.siteName = $('title').html();
	var e = `\n<header >\n   <div id="nav">\n   </div>\n</header>\n<div>\n<div id="content">\n</div>\n<br>\n<footer class="text-muted"> <div class="container"> ${UI.credit?'<p>Redesigned with <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /> </svg> by <a href="https://github.com/ParveenBhadooOfficial/Bhadoo-Drive-Index" target="_blank">TheFirstSpeedster</a>, based on Open Source Softwares.</p>':""} <p>© ${UI.copyright_year} - ${UI.company_name} . <a href="https://www.youtube.com/watch?v=LXilEPmkoQY" target="_blank">Cópia não é roubo</a>.</p> </div>
	<script>
	  function darkLight(){"dark"!=localStorage.toggled?($("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/projetostudenten/Google-Drive-Index@${uiConfig.version}/css/dark-mode.css" type="text/css" />'),localStorage.toggled="dark"):($('link[href="https://cdn.jsdelivr.net/gh/projetostudenten/Google-Drive-Index@${uiConfig.version}/css/dark-mode.css"]').remove(),localStorage.toggled="")}$("#main").toggleClass(localStorage.toggled),"dark"==localStorage.toggled&&$("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/projetostudenten/Google-Drive-Index@${UI.version}/css/dark-mode.css" type="text/css" />');
	</script>
	<div class="darkmode-toggle" onclick="darkLight()">🌓</div>
	<center><br><br>
	<script id="_wauh8c">var _wau = _wau || []; _wau.push(["classic", "uxgz21xxjd", "h8c"]);</script><script async src="//waust.at/c.js"></script>
	</center>
	</footer>\n  `;
	$("body").html(e)
  }
  const Os = {
	isWindows: navigator.platform.toUpperCase().indexOf("WIN") > -1,
	isMac: navigator.platform.toUpperCase().indexOf("MAC") > -1,
	isMacLike: /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
	isIos: /(iPhone|iPod|iPad)/i.test(navigator.platform),
	isMobile: /Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  };
  
  function getDocumentHeight() {
	var e = document;
	return Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight)
  }
  
  function render(e) {
	e.indexOf("?") > 0 && (e = e.substr(0, e.indexOf("?"))), title(e), nav(e);
	window.MODEL.is_search_page ? (window.scroll_status = {
		event_bound: !1,
		loading_lock: !1
	}, render_search_result_list()) : e.match(/\/\d+:$/g) || "/" == e.substr(-1) ? (window.scroll_status = {
		event_bound: !1,
		loading_lock: !1
	}, list(e)) : file(e)
  }
  
  function title(e) {
	e = decodeURI(e);
	var t = window.current_drive_order || 0,
		a = window.drive_names[t];
	e = e.replace(`/${t}:`, "");
	var n = window.MODEL;
	n.is_search_page ? $("title").html(`${a} - Resultados da pesquisa para ${n.q} `) : $("title").html(`${a} - ${e}`)
  }
  
  function nav(e) {
	var t = window.MODEL,
		a = "",
		n = window.current_drive_order || 0;
	a += `<nav class="navbar navbar-expand-lg ${UI.dark_mode?"navbar-dark bg-dark":"navbar-light bg-light"}">\n  <a class="navbar-brand" href="/${n}:/">${UI.logo_image?'<img border="0" alt="'+UI.company_name+'" src="'+UI.logo_link_name+'" height="'+UI.height+'" width="'+UI.logo_width+'">':UI.logo_link_name}</a>\n  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n\n  <div class="collapse navbar-collapse" id="navbarSupportedContent">\n    <ul class="navbar-nav mr-auto">\n      <li class="nav-item">\n        <a class="nav-link" href="/${n}:/">Início</a>\n      </li>`;
	var i = window.drive_names,
		o = window.drive_names[n];
	if (a += `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${o}</a><div class="dropdown-menu" aria-labelledby="navbarDropdown">`, i.forEach(((e, t) => {
			a += `<a class="dropdown-item"  href="/${t}:/">${e}</a>`
		})), a += "</div></li>", a += `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Caminho Atual</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item"  href="/${n}:/ ">> Início</a>`, !t.is_search_page) {
		var s = e.trim("/").split("/"),
			d = "/";
		if (s.length > 1)
			for (var r in s.shift(), s) {
				var l = s[r];
				if (!0 !== (d += (l = decodeURI(l)) + "/").endsWith(".mp3/") && !0 !== d.endsWith(".mp4/") && !0 !== d.endsWith(".mkv/") && !0 !== d.endsWith(".flac/") && !0 !== d.endsWith(".m4a/") && !0 !== d.endsWith(".pdf/") && !0 !== d.endsWith(".jpg/") && !0 !== d.endsWith(".png/") && !0 !== d.endsWith(".jpeg/") && !0 !== d.endsWith(".gif/") && !0 !== d.endsWith(".md/") && !0 !== d.endsWith(".zip/") && !0 !== d.endsWith(".rar/") && !0 !== d.endsWith(".exe/") && !0 !== d.endsWith(".tar/") || (d = d.slice(0, -1)), "" === l) break;
				a += `<a class="dropdown-item"  href="/${n}:${d}">> ${l}</a>`
			}
	}
	a += `</div></li>`;
	var c = t.is_search_page && t.q || "";
	var p = `\n</ul>\n<form class="form-inline my-2 my-lg-0" method="get" action="/${n}:search">\n<input class="form-control mr-sm-2" name="q" type="search" placeholder="Pesquisar" aria-label="Search" value="${c}" required>\n<button class="btn ${UI.dark_mode?"btn-secondary":"btn-outline-success"} my-2 my-sm-0" onclick="if($('#search_bar').hasClass('mdui-textfield-expanded') && $('#search_bar_form>input').val()) $('#search_bar_form').submit();" type="submit">Pesquisar</button>\n</form>\n</div>\n</nav>\n`;
	t.root_type < 2 && (a += p), $("#nav").html(a), mdui.mutation(), mdui.updateTextFields()
  }
  
  function requestListPath(e, t, a, n) {
	var i = {
		password: t.password || null,
		page_token: t.page_token || null,
		page_index: t.page_index || 0
	};
	$.post(e, i, (function (t, o) {
		var s = jQuery.parseJSON(t);
		s && s.error && "401" == s.error.code ? n && n(e) : s && s.data && a && a(s, e, i)
	}))
  }
  
  function requestSearch(e, t) {
	var a = {
		q: e.q || null,
		page_token: e.page_token || null,
		page_index: e.page_index || 0
	};
	$.post(`/${window.current_drive_order}:search`, a, (function (e, n) {
		var i = jQuery.parseJSON(e);
		i && i.data && t && t(i, a)
	}))
  }
  
  function list(e) {
	$("#content").html('\n  <div class="container"><br>\n  <div class="card">\n  <h5 class="card-header" id="folderne"><input type="text" id="folderne" class="form-control" placeholder="Current Path: Homepage" value="" readonly><script>document.getElementById("folderne").innerHTML=\'Pasta Atual: \'+decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf(\'/\',window.location.href.lastIndexOf(\'/\')-1))).replace(\'/\',\'\').replace(\'/\',\'\');<\/script>\n  </h5>\n  <div id="list" class="list-group">\n  </div>\n  </div>\n  <div class="card">\n  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>\n  </div>\n  </div>\n  ');
	var t = localStorage.getItem("password" + e);
	$("#list").html('<div class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Loading...</span></div></div>'), $("#readme_md").hide().html(""), $("#head_md").hide().html(""), requestListPath(e, {
		password: t
	}, (function e(t, a, n) {
		$("#list").data("nextPageToken", t.nextPageToken).data("curPageIndex", t.curPageIndex), $("#spinner").remove(), null === t.nextPageToken ? ($(window).off("scroll"), window.scroll_status.event_bound = !1, window.scroll_status.loading_lock = !1, append_files_to_list(a, t.data.files)) : (append_files_to_list(a, t.data.files), !0 !== window.scroll_status.event_bound && ($(window).on("scroll", (function () {
			var t = $(this).scrollTop(),
				i = getDocumentHeight();
			if (t + $(this).height() > i - (Os.isMobile ? 130 : 80)) {
				if (!0 === window.scroll_status.loading_lock) return;
				window.scroll_status.loading_lock = !0, $('<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Loading...</span></div></div>').insertBefore("#readme_md"), mdui.updateSpinners();
				let t = $("#list");
				requestListPath(a, {
					password: n.password,
					page_token: t.data("nextPageToken"),
					page_index: t.data("curPageIndex") + 1
				}, e, null)
			}
		})), window.scroll_status.event_bound = !0)), !0 === window.scroll_status.loading_lock && (window.scroll_status.loading_lock = !1)
	}), (function (e) {
		$("#spinner").remove();
		var t = prompt("Directory encryption, please enter the password", "");
		localStorage.setItem("password" + e, t), null != t && "" != t ? list(e) : history.go(-1)
	}))
  }
  
  function append_files_to_list(e, t) {
	var a = $("#list"),
		n = null === a.data("nextPageToken"),
		o = "0" == a.data("curPageIndex");
	html = "";
	let s = [];
	for (i in t) {
		var d = t[i],
			r = e + d.name + "/";
		if (null == d.size && (d.size = ""), d.modifiedTime = utc2beijing(d.modifiedTime), d.size = formatFileSize(d.size), "application/vnd.google-apps.folder" == d.mimeType) html += `<a href="${r}" class="list-group-item ${UI.dark_mode?"list-group-item-action":"btn-outline-secondary"}"><svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqa" x1="24" x2="24" y1="6.708" y2="14.977" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#eba600"></stop><stop offset="1" stop-color="#c28200"></stop></linearGradient><path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqa)" d="M24.414,10.414l-2.536-2.536C21.316,7.316,20.553,7,19.757,7L5,7C3.895,7,3,7.895,3,9l0,30\tc0,1.105,0.895,2,2,2l38,0c1.105,0,2-0.895,2-2V13c0-1.105-0.895-2-2-2l-17.172,0C25.298,11,24.789,10.789,24.414,10.414z"></path><linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqb" x1="24" x2="24" y1="10.854" y2="40.983" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd869"></stop><stop offset="1" stop-color="#fec52b"></stop></linearGradient><path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqb)" d="M21.586,14.414l3.268-3.268C24.947,11.053,25.074,11,25.207,11H43c1.105,0,2,0.895,2,2v26\tc0,1.105-0.895,2-2,2H5c-1.105,0-2-0.895-2-2V15.5C3,15.224,3.224,15,3.5,15h16.672C20.702,15,21.211,14.789,21.586,14.414z"></path></svg> ${d.name}<span class="badge-info badge-pill float-right csize"> ${d.size}</span><span class="badge-primary badge-pill float-right cmtime">${d.modifiedTime}</span></a>`;
		else {
			r = e + d.name;
			var l = e + d.name;
			const t = e + d.name;
			n && "README.md" == d.name && get_file(r, d, (function (e) {
				markdown("#readme_md", e), $("img").addClass("img-fluid")
			})), "HEAD.md" == d.name && get_file(r, d, (function (e) {
				markdown("#head_md", e), $("img").addClass("img-fluid")
			}));
			var c = r.split(".").pop().toLowerCase();
			"|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|".indexOf(`|${c}|`) >= 0 && (s.push(t), l += "?a=view", " view"), html += `<div class="list-group-item ${UI.dark_mode?"list-group-item-action":"btn-outline-secondary"}"><a class="list-group-item-action" href="${l}"><svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#50e6ff" d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z"></path><linearGradient id="F8F33TU9HxDNWNbQYRyY3a" x1="28.529" x2="33.6" y1="15.472" y2="10.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3079d6"></stop><stop offset="1" stop-color="#297cd2"></stop></linearGradient><path fill="url(#F8F33TU9HxDNWNbQYRyY3a)" d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"></path></svg> ${d.name}</a><a href="${r}"><img class="float-right" src="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/Bhadoo-Drive-Index@2.0.7/images/download-file.svg" width="25px"></a><span class="badge-info badge-pill float-right csize"> ${d.size}</span><span class="badge-primary badge-pill float-right cmtime">${d.modifiedTime}</span></div>`
		}
	}
	if (s.length > 0) {
		let t = localStorage.getItem(e),
			a = s;
		if (!o && t) {
			let e;
			try {
				e = JSON.parse(t), Array.isArray(e) || (e = [])
			} catch (t) {
				e = []
			}
			a = e.concat(s)
		}
		localStorage.setItem(e, JSON.stringify(a))
	}
	a.html(("0" == a.data("curPageIndex") ? "" : a.html()) + html), n && $("#count").removeClass("mdui-hidden").find(".number").text(a.find("li.mdui-list-item").length)
  }
  
  function render_search_result_list() {
	$("#content").html('\n  <div class="container"><br>\n  <div class="card">\n  <h5 class="card-header">Search Results</h5>\n  <div id="list" class="list-group">\n  </div>\n  </div>\n  <div class="card">\n  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>\n  </div>\n  </div>\n  '), $("#list").html('<div class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Loading...</span></div></div>'), $("#readme_md").hide().html(""), $("#head_md").hide().html(""), requestSearch({
		q: window.MODEL.q
	}, (function e(t, a) {
		$("#list").data("nextPageToken", t.nextPageToken).data("curPageIndex", t.curPageIndex), $("#spinner").remove(), null === t.nextPageToken ? ($(window).off("scroll"), window.scroll_status.event_bound = !1, window.scroll_status.loading_lock = !1, append_search_result_to_list(t.data.files)) : (append_search_result_to_list(t.data.files), !0 !== window.scroll_status.event_bound && ($(window).on("scroll", (function () {
			var t = $(this).scrollTop(),
				a = getDocumentHeight();
			if (t + $(this).height() > a - (Os.isMobile ? 130 : 80)) {
				if (!0 === window.scroll_status.loading_lock) return;
				window.scroll_status.loading_lock = !0, $('<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Loading...</span></div></div>').insertBefore("#readme_md"), mdui.updateSpinners();
				let t = $("#list");
				requestSearch({
					q: window.MODEL.q,
					page_token: t.data("nextPageToken"),
					page_index: t.data("curPageIndex") + 1
				}, e)
			}
		})), window.scroll_status.event_bound = !0)), !0 === window.scroll_status.loading_lock && (window.scroll_status.loading_lock = !1)
	}))
  }
  
  function append_search_result_to_list(e) {
	var t = window.current_drive_order || 0,
		a = $("#list"),
		n = null === a.data("nextPageToken");
	for (i in html = "", e) {
		var o = e[i];
		o.name;
		if (null == o.size && (o.size = ""), o.modifiedTime = utc2beijing(o.modifiedTime), o.size = formatFileSize(o.size), "application/vnd.google-apps.folder" == o.mimeType) html += `<a onclick="onSearchResultItemClick(this)" id="${o.id}" class="list-group-item ${UI.dark_mode?"list-group-item-action":"btn-outline-secondary"}"><svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqa" x1="24" x2="24" y1="6.708" y2="14.977" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#eba600"></stop><stop offset="1" stop-color="#c28200"></stop></linearGradient><path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqa)" d="M24.414,10.414l-2.536-2.536C21.316,7.316,20.553,7,19.757,7L5,7C3.895,7,3,7.895,3,9l0,30\tc0,1.105,0.895,2,2,2l38,0c1.105,0,2-0.895,2-2V13c0-1.105-0.895-2-2-2l-17.172,0C25.298,11,24.789,10.789,24.414,10.414z"></path><linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqb" x1="24" x2="24" y1="10.854" y2="40.983" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd869"></stop><stop offset="1" stop-color="#fec52b"></stop></linearGradient><path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqb)" d="M21.586,14.414l3.268-3.268C24.947,11.053,25.074,11,25.207,11H43c1.105,0,2,0.895,2,2v26\tc0,1.105-0.895,2-2,2H5c-1.105,0-2-0.895-2-2V15.5C3,15.224,3.224,15,3.5,15h16.672C20.702,15,21.211,14.789,21.586,14.414z"></path></svg> ${o.name}<span class="badge-info badge-pill float-right csize"> ${o.size}</span><span class="badge-primary badge-pill float-right cmtime">${o.modifiedTime}</span></a>`;
		else {
			o.name;
			var s = o.name.split(".").pop().toLowerCase();
			"|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${s}|`) >= 0 && ("?a=view", " view"), html += `<a onclick="onSearchResultItemClick(this)" id="${o.id}" gd-type="${o.mimeType}" class="list-group-item ${UI.dark_mode?"list-group-item-action":"btn-outline-secondary"}"><svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#50e6ff" d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z"></path><linearGradient id="F8F33TU9HxDNWNbQYRyY3a" x1="28.529" x2="33.6" y1="15.472" y2="10.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3079d6"></stop><stop offset="1" stop-color="#297cd2"></stop></linearGradient><path fill="url(#F8F33TU9HxDNWNbQYRyY3a)" d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"></path></svg> ${o.name}<span class="badge-info badge-pill float-right csize"> ${o.size}</span><span class="badge-primary badge-pill float-right cmtime">${o.modifiedTime}</span></a>`
		}
	}
	a.html(("0" == a.data("curPageIndex") ? "" : a.html()) + html), n && $("#count").removeClass("mdui-hidden").find(".number").text(a.find("li.mdui-list-item").length)
  }
  
  function onSearchResultItemClick(e) {
	var t = $(e).hasClass("view"),
		a = window.current_drive_order,
		n = mdui.dialog({
			title: "",
			content: '<div class="mdui-text-center mdui-typo-title mdui-m-b-1"><svg width="1.5em" height="1.5em" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m347.286 203.876c-221.19-75.589-72.046-166.142 3.02-201.853 1.026-.487.677-2.023-.459-2.023h-53.55c-8.469 0-16.838 1.96-24.582 5.745-85.039 41.566-256.502 142.695-117.98 227.51 158.851 97.261-11.45 224.267-100.575 278.745h349.478c46.736-66.708 143.573-240.144-55.352-308.124z" fill="#665e68"/><path d="m53.16 512h76.776c91.568-63.118 231.714-188.068 82.869-285.189-124.238-81.064.874-176.113 89.349-226.811h-5.857c-8.469 0-16.838 1.96-24.582 5.745-85.039 41.566-256.502 142.695-117.98 227.51 158.851 97.261-11.45 224.267-100.575 278.745z" fill="#554e56"/><g><path d="m217.804 71.339c-2.519 0-4.988-1.229-6.473-3.493-2.342-3.571-1.346-8.364 2.226-10.706 3.419-2.242 5.57-3.471 5.659-3.522 3.71-2.115 8.433-.82 10.546 2.891 2.113 3.709.82 8.428-2.887 10.543-.051.029-1.892 1.087-4.838 3.019-1.307.858-2.778 1.267-4.233 1.268z" fill="#dfebfa"/></g><g fill="#dfebfa"><path d="m291.42 441.935c-1.882 0-3.768-.683-5.257-2.064-3.131-2.904-3.314-7.797-.409-10.927 2.814-3.033 5.559-6.119 8.16-9.173 2.77-3.251 7.65-3.642 10.9-.872 3.251 2.769 3.642 7.649.872 10.9-2.742 3.219-5.634 6.47-8.596 9.663-1.523 1.642-3.594 2.473-5.67 2.473z"/><path d="m324.191 398.39c-1.307 0-2.632-.332-3.846-1.03-3.703-2.128-4.978-6.855-2.85-10.557 2.045-3.559 3.931-7.135 5.603-10.63 1.843-3.852 6.46-5.481 10.312-3.638 3.853 1.843 5.481 6.46 3.638 10.312-1.84 3.845-3.907 7.77-6.147 11.663-1.43 2.487-4.033 3.88-6.71 3.88z"/><path d="m341.594 347.113c-.205 0-.412-.008-.62-.025-4.257-.338-7.435-4.062-7.097-8.319.166-2.085.249-4.179.249-6.225.001-1.739-.06-3.49-.18-5.204-.299-4.26 2.913-7.955 7.172-8.254 4.25-.302 7.955 2.912 8.254 7.172.145 2.074.219 4.189.218 6.288 0 2.45-.1 4.956-.298 7.445-.32 4.049-3.705 7.122-7.698 7.122z"/><path d="m328.086 295.326c-2.508 0-4.969-1.219-6.457-3.468-2.069-3.129-4.429-6.244-7.016-9.259-2.78-3.241-2.407-8.122.834-10.903s8.122-2.408 10.903.834c3.004 3.501 5.755 7.134 8.178 10.797 2.355 3.562 1.378 8.359-2.184 10.715-1.313.869-2.794 1.284-4.258 1.284z"/><path d="m288.565 258.262c-1.436 0-2.888-.399-4.183-1.235-3.293-2.124-6.791-4.234-10.396-6.272-3.718-2.101-5.027-6.819-2.926-10.536 2.101-3.718 6.819-5.027 10.536-2.926 3.865 2.185 7.622 4.452 11.166 6.737 3.589 2.315 4.622 7.1 2.308 10.689-1.478 2.293-3.966 3.543-6.505 3.543z"/><path d="m240.155 233.18c-1.176 0-2.369-.269-3.49-.837-3.918-1.986-7.749-4.019-11.385-6.041-3.732-2.076-5.075-6.784-2.999-10.516 2.076-3.733 6.783-5.077 10.516-2.999 3.464 1.927 7.118 3.865 10.86 5.762 3.809 1.931 5.332 6.584 3.401 10.393-1.362 2.688-4.082 4.238-6.903 4.238z"/><path d="m194.337 203.784c-1.774 0-3.556-.607-5.012-1.847-3.501-2.984-6.776-6.045-9.733-9.097-2.972-3.067-2.894-7.962.174-10.933 3.068-2.972 7.962-2.893 10.933.174 2.616 2.7 5.529 5.422 8.657 8.088 3.25 2.77 3.64 7.65.869 10.9-1.529 1.792-3.702 2.715-5.888 2.715z"/><path d="m164.402 159.356c-3.578 0-6.79-2.497-7.558-6.138-.88-4.172-1.326-8.433-1.326-12.664-.001-.547.007-1.099.022-1.651.117-4.269 3.684-7.617 7.941-7.518 4.269.117 7.635 3.672 7.518 7.941-.011.406-.017.812-.016 1.22 0 3.168.334 6.355.993 9.48.881 4.178-1.791 8.28-5.97 9.161-.539.115-1.076.169-1.604.169z"/><path d="m177.873 108.162c-1.572 0-3.158-.478-4.528-1.47-3.459-2.504-4.233-7.339-1.728-10.797 2.524-3.486 5.372-6.991 8.465-10.417 2.86-3.169 7.749-3.422 10.921-.559 3.17 2.861 3.42 7.75.559 10.921-2.722 3.016-5.218 6.086-7.419 9.125-1.512 2.088-3.874 3.197-6.27 3.197z"/></g><g><path d="m256.006 474.787c-2.336 0-4.644-1.054-6.165-3.059-2.581-3.402-1.916-8.252 1.486-10.834.014-.011 1.714-1.305 4.569-3.666 3.291-2.722 8.166-2.26 10.886 1.03 2.722 3.291 2.26 8.165-1.03 10.886-3.133 2.592-4.999 4.01-5.077 4.069-1.398 1.061-3.04 1.574-4.669 1.574z" fill="#dfebfa"/></g><path d="m364.982 185.337c-210.789-65.146-89.169-139.33-11.125-177.542 3.647-1.785 2.486-7.795-1.503-7.795h-2.9c-73.415 34.202-232.815 126.815-7.318 203.876 198.923 67.98 102.087 241.416 55.351 308.124h39.609c9.916 0 19.026-6.013 23.71-15.659 44.904-92.457 86.811-254.559-95.824-311.004z" fill="#ffd301"/><g><g><path d="m155.795 233.255c-102.413-62.706-37.443-134.33 38.828-184.208-85.326 47.849-183.183 126.492-68.476 196.724 134.351 82.261-6.581 185.797-109.257 248.736-7.628 4.677-4.608 17.493 4.119 17.493h34.211c89.126-54.478 259.427-181.484 100.575-278.745z" fill="#ffc20c"/></g></g></g></svg> Obtendo o caminho do arquivo...</div><div class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Loading...</span></div></div>',
			history: !1,
			modal: !0,
			closeOnEsc: !0
		});
	mdui.updateSpinners(), $.post(`/${a}:id2path`, {
		id: e.id
	}, (function (e) {
		if (e) {
			n.close();
			var i = `/${a}:${e}${t?"?a=view":""}`;
			return i.endsWith("/") ? hrefurl = i : hrefurl = i + "?a=view", void(n = mdui.dialog({
				title: '<svg width="1em" height="1em" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m347.286 203.876c-221.19-75.589-72.046-166.142 3.02-201.853 1.026-.487.677-2.023-.459-2.023h-53.55c-8.469 0-16.838 1.96-24.582 5.745-85.039 41.566-256.502 142.695-117.98 227.51 158.851 97.261-11.45 224.267-100.575 278.745h349.478c46.736-66.708 143.573-240.144-55.352-308.124z" fill="#665e68"/><path d="m53.16 512h76.776c91.568-63.118 231.714-188.068 82.869-285.189-124.238-81.064.874-176.113 89.349-226.811h-5.857c-8.469 0-16.838 1.96-24.582 5.745-85.039 41.566-256.502 142.695-117.98 227.51 158.851 97.261-11.45 224.267-100.575 278.745z" fill="#554e56"/><g><path d="m217.804 71.339c-2.519 0-4.988-1.229-6.473-3.493-2.342-3.571-1.346-8.364 2.226-10.706 3.419-2.242 5.57-3.471 5.659-3.522 3.71-2.115 8.433-.82 10.546 2.891 2.113 3.709.82 8.428-2.887 10.543-.051.029-1.892 1.087-4.838 3.019-1.307.858-2.778 1.267-4.233 1.268z" fill="#dfebfa"/></g><g fill="#dfebfa"><path d="m291.42 441.935c-1.882 0-3.768-.683-5.257-2.064-3.131-2.904-3.314-7.797-.409-10.927 2.814-3.033 5.559-6.119 8.16-9.173 2.77-3.251 7.65-3.642 10.9-.872 3.251 2.769 3.642 7.649.872 10.9-2.742 3.219-5.634 6.47-8.596 9.663-1.523 1.642-3.594 2.473-5.67 2.473z"/><path d="m324.191 398.39c-1.307 0-2.632-.332-3.846-1.03-3.703-2.128-4.978-6.855-2.85-10.557 2.045-3.559 3.931-7.135 5.603-10.63 1.843-3.852 6.46-5.481 10.312-3.638 3.853 1.843 5.481 6.46 3.638 10.312-1.84 3.845-3.907 7.77-6.147 11.663-1.43 2.487-4.033 3.88-6.71 3.88z"/><path d="m341.594 347.113c-.205 0-.412-.008-.62-.025-4.257-.338-7.435-4.062-7.097-8.319.166-2.085.249-4.179.249-6.225.001-1.739-.06-3.49-.18-5.204-.299-4.26 2.913-7.955 7.172-8.254 4.25-.302 7.955 2.912 8.254 7.172.145 2.074.219 4.189.218 6.288 0 2.45-.1 4.956-.298 7.445-.32 4.049-3.705 7.122-7.698 7.122z"/><path d="m328.086 295.326c-2.508 0-4.969-1.219-6.457-3.468-2.069-3.129-4.429-6.244-7.016-9.259-2.78-3.241-2.407-8.122.834-10.903s8.122-2.408 10.903.834c3.004 3.501 5.755 7.134 8.178 10.797 2.355 3.562 1.378 8.359-2.184 10.715-1.313.869-2.794 1.284-4.258 1.284z"/><path d="m288.565 258.262c-1.436 0-2.888-.399-4.183-1.235-3.293-2.124-6.791-4.234-10.396-6.272-3.718-2.101-5.027-6.819-2.926-10.536 2.101-3.718 6.819-5.027 10.536-2.926 3.865 2.185 7.622 4.452 11.166 6.737 3.589 2.315 4.622 7.1 2.308 10.689-1.478 2.293-3.966 3.543-6.505 3.543z"/><path d="m240.155 233.18c-1.176 0-2.369-.269-3.49-.837-3.918-1.986-7.749-4.019-11.385-6.041-3.732-2.076-5.075-6.784-2.999-10.516 2.076-3.733 6.783-5.077 10.516-2.999 3.464 1.927 7.118 3.865 10.86 5.762 3.809 1.931 5.332 6.584 3.401 10.393-1.362 2.688-4.082 4.238-6.903 4.238z"/><path d="m194.337 203.784c-1.774 0-3.556-.607-5.012-1.847-3.501-2.984-6.776-6.045-9.733-9.097-2.972-3.067-2.894-7.962.174-10.933 3.068-2.972 7.962-2.893 10.933.174 2.616 2.7 5.529 5.422 8.657 8.088 3.25 2.77 3.64 7.65.869 10.9-1.529 1.792-3.702 2.715-5.888 2.715z"/><path d="m164.402 159.356c-3.578 0-6.79-2.497-7.558-6.138-.88-4.172-1.326-8.433-1.326-12.664-.001-.547.007-1.099.022-1.651.117-4.269 3.684-7.617 7.941-7.518 4.269.117 7.635 3.672 7.518 7.941-.011.406-.017.812-.016 1.22 0 3.168.334 6.355.993 9.48.881 4.178-1.791 8.28-5.97 9.161-.539.115-1.076.169-1.604.169z"/><path d="m177.873 108.162c-1.572 0-3.158-.478-4.528-1.47-3.459-2.504-4.233-7.339-1.728-10.797 2.524-3.486 5.372-6.991 8.465-10.417 2.86-3.169 7.749-3.422 10.921-.559 3.17 2.861 3.42 7.75.559 10.921-2.722 3.016-5.218 6.086-7.419 9.125-1.512 2.088-3.874 3.197-6.27 3.197z"/></g><g><path d="m256.006 474.787c-2.336 0-4.644-1.054-6.165-3.059-2.581-3.402-1.916-8.252 1.486-10.834.014-.011 1.714-1.305 4.569-3.666 3.291-2.722 8.166-2.26 10.886 1.03 2.722 3.291 2.26 8.165-1.03 10.886-3.133 2.592-4.999 4.01-5.077 4.069-1.398 1.061-3.04 1.574-4.669 1.574z" fill="#dfebfa"/></g><path d="m364.982 185.337c-210.789-65.146-89.169-139.33-11.125-177.542 3.647-1.785 2.486-7.795-1.503-7.795h-2.9c-73.415 34.202-232.815 126.815-7.318 203.876 198.923 67.98 102.087 241.416 55.351 308.124h39.609c9.916 0 19.026-6.013 23.71-15.659 44.904-92.457 86.811-254.559-95.824-311.004z" fill="#ffd301"/><g><g><path d="m155.795 233.255c-102.413-62.706-37.443-134.33 38.828-184.208-85.326 47.849-183.183 126.492-68.476 196.724 134.351 82.261-6.581 185.797-109.257 248.736-7.628 4.677-4.608 17.493 4.119 17.493h34.211c89.126-54.478 259.427-181.484 100.575-278.745z" fill="#ffc20c"/></g></g></g></svg> Caminho do arquivo',
				content: `<a class="btn btn-info" href="${hrefurl}">Abrir</a> <a class="btn btn-secondary" href="${hrefurl}" target="_blank">Abrir em Nova Janela</a> <button class="btn btn-danger" mdui-dialog-cancel>Cancelar</button><script>dialog.addEventListener('cancel.mdui.dialog', function () {\n  console.log('cancel');\n});<\/script>`,
				history: !1,
				modal: !0,
				closeOnEsc: !0
			}))
		}
		n.close(), n = mdui.dialog({
			title: "Failed to get the target path",
			content: "It may be because this item does not exist in the disc! It may also be because the file [Shared with me] has not been added to Personal Drive!",
			history: !1,
			modal: !0,
			closeOnEsc: !0,
			buttons: [{
				text: "WTF ???"
			}]
		})
	}))
  }
  
  function get_file(e, t, a) {
	var n = "file_path_" + e + t.modifiedTime,
		i = localStorage.getItem(n);
	if (null != i) return a(i);
	$.get(e, (function (e) {
		localStorage.setItem(n, e), a(e)
	}))
  }
  
  function file(e) {
	var t = e.split("/").pop().split(".").pop().toLowerCase().replace("?a=view", "").toLowerCase();
	return "|html|php|css|go|java|js|json|txt|sh|md|".indexOf(`|${t}|`) >= 0 ? file_code(e) : "|mp4|webm|avi|".indexOf(`|${t}|`) >= 0 || "|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${t}|`) >= 0 ? file_video(e) : "|mp3|flac|wav|ogg|m4a|".indexOf(`|${t}|`) >= 0 ? file_audio(e) : "|bmp|jpg|jpeg|png|gif|".indexOf(`|${t}|`) >= 0 ? file_image(e) : file_others(e)
  }
  
  function file_others(e) {
	e.split("/").pop().split(".").pop().toLowerCase();
	var t = `\n<div class="container"><br>\n<div class="card">\n<div class="card-body">\n  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');<\/script>\n</div>\n<p class="card-text text-center"><a href="${window.location.origin+e}" class="btn btn-primary">Download</a></p><br>`;
	$("#content").html(t)
  }
  
  function file_code(e) {
	e.split("/").pop().split(".").pop().toLowerCase();
	var t = `\n<div class="container"><br>\n<div class="card">\n<div class="card-body">\n  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');<\/script>\n<code id="editor" class="card-text"></code>\n</div>\n<p class="card-text text-center"><a href="${window.location.origin+e}" class="btn btn-primary">Download</a></p><br>`;
	$("#content").html(t), $.get(e, (function (e) {
		$("#editor").html($("<div/><div/><div/>").text(e).html())
	}))
  }
  
  function copyToClipboard(e) {
	const t = $("<input>");
	$("body").append(t), t.val(e).select(), document.execCommand("copy"), t.remove()
  }
  
  function file_video(e) {
	const t = window.location.origin + e,
		a = `\n  <div class="container"><br>\n  <div class="card">\n  <div class="card-body text-center">\n  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');<\/script>\n  <video id="plyr-video" playsinline controls width="100%" height="100%"><source type="video/mp4" src="${t}"/></video>\n  </div>\n\t${UI.disable_player?"<style>#mep_0{display:none;}</style>":""}\n  <script type="text/javascript">const player = new Plyr('#plyr-video');<\/script>\n  <p class="card-text text-center"><a href="${t}" class="btn btn-primary">Download</a></p><br>\n  </div>\n  </div>\n  `;
	$("#content").html(a)
  }
  
  function file_audio(e) {
	var t = window.location.origin + e,
		a = `\n  <div class="container"><br>\n  <div class="card">\n  <div class="card-body text-center">\n  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');<\/script>\n  <audio id="plyr-video" width="100%" controls>\n    <source src="${t}" type="audio/ogg">\n    <source src="${t}" type="audio/mpeg">\n  Your browser does not support the audio element.\n  </audio>\n  </div>\n\t${UI.disable_player?"<style>#mep_0{display:none;}</style>":""}\n  <script type="text/javascript">$('#bPlayer').mediaelementplayer();<\/script>\n  <p class="card-text text-center"><a href="${t}" class="btn btn-primary">Download</a></p><br>\n  </div>\n  </div>\n  `;
	$("#content").html(a)
  }
  
  function file_pdf(e) {
	const t = window.location.origin + e,
		a = t + "?inline=true";
	var n = `\n  <div class="container"><br>\n  <div class="card">\n  <div class="card-body text-center">\n  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');<\/script>\n  <object data="${a}" type="application/pdf" name="${decodeURI(e.slice(e.lastIndexOf("/")+1,e.length))}" style="width:100%;height:94vh;"><embed src="${a}" type="application/pdf"/></object>\n  </div>\n  <p class="card-text text-center"><a href="${t}" class="btn btn-primary">Download</a></p><br>\n  </div>\n  </div>\n  `;
	$("#content").removeClass("mdui-container").addClass("mdui-container-fluid").css({
		padding: 0
	}).html(n)
  }
  
  function file_image(e) {
	var t = window.location.origin + e;
	decodeURI(t);
	const a = window.location.pathname,
		n = a.lastIndexOf("/"),
		i = a.slice(0, n + 1);
	let o = localStorage.getItem(i);
	if (o) try {
		o = JSON.parse(o), Array.isArray(o) || (o = [])
	} catch (e) {
		console.error(e), o = []
	}
	var s = `\n  <div class="container"><br>\n  <div class="card">\n  <div class="card-body text-center">\n  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');<\/script>\n  <img src="${t}" width="50%">\n  </div>\n  <p class="card-text text-center"><a href="${t}" class="btn btn-primary">Download</a></p><br>\n  </div>\n  </div>\n    `;
	$("#content").html(s), $("#leftBtn, #rightBtn").click((e => {
		let t = $(e.target);
		["I", "SPAN"].includes(e.target.nodeName) && (t = $(e.target).parent());
		const a = t.attr("data-filepath");
		t.attr("data-direction");
		file(a)
	}))
  }
  
  function utc2beijing(e) {
	var t = e.indexOf("T"),
		a = e.indexOf("Z"),
		n = e.substr(0, t) + " " + e.substr(t + 1, a - t - 1);
	timestamp = new Date(Date.parse(n)), timestamp = timestamp.getTime(), timestamp /= 1e3;
	var i = timestamp + 19800,
		o = 1900 + (i = new Date(1e3 * i)).getYear(),
		s = "0" + (i.getMonth() + 1),
		d = "0" + i.getDate(),
		r = "0" + i.getHours(),
		l = "0" + i.getMinutes(),
		c = "0" + i.getSeconds();
	return o + "-" + s.substring(s.length - 2, s.length) + "-" + d.substring(d.length - 2, d.length) + " " + r.substring(r.length - 2, r.length) + ":" + l.substring(l.length - 2, l.length) + ":" + c.substring(c.length - 2, c.length)
  }
  
  function formatFileSize(e) {
	return e >= 1e9 ? e = (e / 1e9).toFixed(2) + " GB" : e >= 1e6 ? e = (e / 1e6).toFixed(2) + " MB" : e >= 1e3 ? e = (e / 1e3).toFixed(2) + " KB" : e > 1 ? e += " bytes" : 1 == e ? e += " byte" : e = "", e
  }
  
  function markdown(e, t) {
	if (null == window.md) window.md = window.markdownit(), markdown(e, t);
	else {
		var a = md.render(t);
		$(e).show().html(a)
	}
  }
  String.prototype.trim = function (e) {
	return e ? this.replace(new RegExp("^\\" + e + "+|\\" + e + "+$", "g"), "") : this.replace(/^\s+|\s+$/g, "")
  }, window.onpopstate = function () {
	render(window.location.pathname)
  }, $((function () {
	init(), render(window.location.pathname)
  }));
  //# sourceMappingURL=/sm/cf91c75fe9b159f5be55f056ce353ea9c0b70b0735eaf6645416c9f08315fb91.map