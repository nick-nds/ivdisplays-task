<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
});

Route::middleware(['auth', 'role:user'])->get('/dashboard', function () {
    return Inertia::render('Auth/Dashboard');
})->name('dashboard');

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Auth/Admin/Dashboard');
    })->name('dashboard');
});
