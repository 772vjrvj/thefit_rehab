<?php
// view_tree.php

function print_tree($dir, $prefix = '') {
    // ., .. 디렉토리 제외하고 파일 목록 가져오기
    if (!is_dir($dir)) {
        echo "public 디렉토리가 존재하지 않습니다." . PHP_EOL;
        return;
    }

    $files = array_diff(scandir($dir), array('.', '..'));
    $count = count($files);
    $i = 0;

    foreach ($files as $file) {
        $i++;
        $path = $dir . DIRECTORY_SEPARATOR . $file;
        $isLast = ($i === $count);

        // 트리 모양 기호 생성
        echo $prefix . ($isLast ? '└── ' : '├── ') . $file . PHP_EOL;

        // 디렉토리라면 재귀적으로 탐색
        if (is_dir($path)) {
            print_tree($path, $prefix . ($isLast ? '    ' : '│   '));
        }
    }
}

echo "public" . PHP_EOL;
print_tree('public');
