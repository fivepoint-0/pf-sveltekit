<script lang="ts">
	import { setAnimation, ANIMATIONS } from '$lib';
	import Button from '@smui/Button';
	import Card from '@smui/card';
	import LayoutGrid, { Cell } from '@smui/layout-grid';

	function randomChoice() {
		return ANIMATIONS[Math.floor(Math.random() * ANIMATIONS.length)];
	}
</script>

<h1 id="title" class="magic-base">Home</h1>


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
