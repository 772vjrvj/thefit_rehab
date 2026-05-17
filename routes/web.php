<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});


// /services 주소로 들어오면 services.blade.php를 보여줘라
Route::get('/services', function () {
    return view('services');
});


Route::get('/about', function () {
    return view('about');
});


Route::get('/blog', function () {
    return view('blog');
});


Route::get('/blog-details', function () {
    return view('blog_details');
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/elements', function () {
    return view('elements');
});
