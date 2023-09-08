<svelte:options customElement={{
    tag: 'animation-group',
    shadow: 'none',
    props: {
      animationName: { reflect: true, type: 'String', attribute: 'element-index' }
    }
}}/>

<script lang="ts">
	import type { AnimationName } from "$lib";
	import { onMount } from "svelte";

    const uuid = () => (Math.random() + 1).toString(36).substring(2);
    console.log(uuid())
    export let uniqueAnimationGroupId = uuid();
    export let animationName: AnimationName;

    onMount(() => {
        const element = document.getElementById(`animg-${uniqueAnimationGroupId}`);
        if (element) {
            setTimeout(() => {
                element.hidden = false;
            }, 2000)
        }
    });
</script>

<div id="animg-{uniqueAnimationGroupId}" hidden class="magictime {animationName}">
    <slot></slot>
</div>