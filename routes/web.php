<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ForceLoginController;
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
    Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');
});

Route::apiResource('/force-login', ForceLoginController::class)->only('store');
