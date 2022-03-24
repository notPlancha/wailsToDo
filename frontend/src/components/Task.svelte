<script>
    import hideButton from "./hideButton.svelte";
    import deleteButton from "./deleteButton.svelte";
    export let text;
    export let isCompleted = false;
    export let isHidden = false;
    export let canCheckbox = true
</script>

<style>
    div{
        border: black 1px;
    }
    div > *{
        display: inline;
    }
</style>

<div>
    {#if canCheckbox}
    <input type="checkbox" bind:checked={isCompleted}>
    {/if}
    {#if isCompleted}
        <hideButton on:={isHidden}/>
        <deleteButton/>
    {/if}
    <p class="task-text">{text}</p>
</div>