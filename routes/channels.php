<?php

use App\Broadcasting\SessionChannel;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('sessions.{session}', SessionChannel::class);
