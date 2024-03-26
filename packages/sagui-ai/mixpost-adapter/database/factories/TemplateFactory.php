<?php

namespace SaguiAi\MixpostAdapter\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use SaguiAi\MixpostAdapter\Models\Template;
use SaguiAi\MixpostAdapter\Models\Workspace;

class TemplateFactory extends Factory
{
    protected $model = Template::class;

    public function definition()
    {
        return [
            'uuid' => $this->faker->uuid(),
            'workspace_id' => Workspace::factory(),
            'name' => $this->faker->domainName(),
            'content' => [],
        ];
    }
}
