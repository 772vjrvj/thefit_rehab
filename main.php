<?php
// 1. 기존 elements.html 파일 읽기
if (!file_exists('elements.html')) {
    die("❌ elements.html 파일이 같은 폴더에 없습니다.\n");
}
$html = file_get_contents('elements.html');

// 2. 기본 favicon 및 네비게이션 링크 변환
$html = str_replace('href="assets/img/favicon.ico"', 'href="{{ asset(\'img/favicon.ico\') }}"', $html);
$html = str_replace('href="index.html"', 'href="/"', $html);
$html = str_replace('href="about.html"', 'href="/about"', $html);
$html = str_replace('href="services.html"', 'href="/services"', $html);

// 3. 원본 템플릿 마크업 오타 수정 (<d iv class=...> 부분)
$html = str_replace('<d iv class="header-area">', '<div class="header-area">', $html);
$html = str_replace('</d>', '</div>', $html);

// 4. 정규식을 활용하여 Laravel asset 래핑
$html = preg_replace('/href="assets\/css\/([^"]+)"/', 'href="{{ asset(\'css/$1\') }}"', $html);
$html = preg_replace('/src="assets\/img\/([^"]+)"/', 'src="{{ asset(\'img/$1\') }}"', $html);
$html = preg_replace('/src="\.\/assets\/js\/([^"]+)"/', 'src="{{ asset(\'js/$1\') }}"', $html);
$html = preg_replace('/src="assets\/js\/([^"]+)"/', 'src="{{ asset(\'js/$1\') }}"', $html);
$html = preg_replace('/data-background="assets\/img\/([^"]+)"/', 'data-background="{{ asset(\'img/$1\') }}"', $html);
$html = preg_replace('/style="background: url\(assets\/img\/([^)]+)\);"\s*/', 'style="background: url({{ asset(\'img/$1\') }});"', $html);

// 5. elements.blade.php 파일로 저장
file_put_contents('elements.blade.php', $html);

echo "✨ elements.blade.php 파일 변환이 성공적으로 완료되었습니다!\n";
?>
