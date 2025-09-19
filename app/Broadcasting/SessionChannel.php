<?php

namespace App\Broadcasting;

use App\Models\Session;
use App\Models\User;

class SessionChannel
{
    /**
     * Create a new channel instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Authenticate the user's access to the channel.
     */
    public function join(User $user, Session $session): array|bool
    {
        return $user->id === $session->user_id;
    }
}
