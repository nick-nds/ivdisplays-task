<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Auth/Admin/Dashboard', [
            'users' => UserResource::collection(
                        User::where('role', Role::USER->value)->get()
                       )->resolve(),
        ]);
    }
}
