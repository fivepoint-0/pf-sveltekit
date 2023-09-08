<script lang="ts">
	import { setAnimation, ANIMATIONS } from '$lib';
	import Card from '@smui/Card';
	import Button from '@smui/Button';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import AnimationGroup from '$lib/components/AnimationGroup.svelte';

	function randomChoice() {
		return ANIMATIONS[Math.floor(Math.random() * ANIMATIONS.length)];
	}
</script>

<div>
	<h1 id="title" class="magic-base">Home</h1>

	<AnimationGroup animationName="foolishIn">
		<LayoutGrid>
			{#each Array(9) as _unused, i}
			<Cell>
				<div class="demo-cell">Cell {i + 1}</div>
			</Cell>
			{/each}
		</LayoutGrid>
	</AnimationGroup>

	<Card>
		This is some card content
		<Button
			ripple
			on:click={() => {
				setAnimation(randomChoice(), '#title', 1000);
			}}
		>
			Change the animation
		</Button>
	</Card>
</div>
