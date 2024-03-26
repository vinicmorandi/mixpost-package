<?php

namespace SaguiAi\MixpostAdapter\Builders\Post\Filters;

use Illuminate\Database\Eloquent\Builder;
use SaguiAi\MixpostAdapter\Contracts\Filter;
use SaguiAi\MixpostAdapter\Enums\PostStatus as PostStatusEnum;

class ExcludePostStatus implements Filter
{
    public static function apply(Builder $builder, $value): Builder
    {
        $status = match ($value) {
            'draft' => PostStatusEnum::DRAFT->value,
            'scheduled' => PostStatusEnum::SCHEDULED->value,
            'published' => PostStatusEnum::PUBLISHED->value,
            'failed' => PostStatusEnum::FAILED->value,
            default => null
        };

        if ($status === null) {
            return $builder;
        }

        return $builder->whereNot('status', $status);
    }
}
