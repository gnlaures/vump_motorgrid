<?php
	$http = 'http://';
	$urllocal = '/vump_motorgrid';
	$title = 'Motogrid';

	#Retorna a página
	$URL = str_replace($urllocal, '', $_SERVER['REQUEST_URI']);
	$geturl = explode('/', $URL);
	$params = count($geturl);
	$pagina = explode('?', $geturl[1]);
	$pagina = reset($pagina);
	$fileSys = 'index.php';

	#Identifica se é home ou inner page
	$classOnBody = 'p-inner';
	
	switch ($pagina) {
		case 'boilerplate':
			$file = '__boilerplateComponents/index.php';
			$title_page = 'Components - '.$title;
			break;
		case 'boilerplate_forms':
			$file = '__boilerplateComponents/page_forms.php';
			$title_page = 'Form - '.$title;
			break;
		case 'boilerplate_lists':
			$file = '__boilerplateComponents/page_lists.php';
			$title_page = 'Lists - '.$title;
			break;
		case 'boilerplate_btns':
			$file = '__boilerplateComponents/page_btns.php';
			$title_page = 'Buttons - '.$title;
			break;
		case 'boilerplate_menus':
			$file = '__boilerplateComponents/page_menus.php';
			$title_page = 'Menus e Sub Menus - '.$title;
			break;
		case 'boilerplate_grids':
			$file = '__boilerplateComponents/page_tabs.php';
			$title_page = 'Grids e Tabs - '.$title;
			break;

		case 'single':
			$file = 'page_single.php';
			$title_page = 'Título do post - '.$title;
			break;
		
		default :
			$file = 'page_home.php';
			$title_page = $title;
			$classOnBody = 'p-home';
			break;
	}

#Monta a base url
	$url_site = $http . $_SERVER['SERVER_NAME'] . $urllocal;
	$base_page = '<base href="' . $url_site . '/" />';
	include($fileSys);
?>