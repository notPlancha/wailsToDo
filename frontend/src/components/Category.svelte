<script>
    import Task from "./Task.svelte";
    export let categoryName;
    export let Tasks;
    export let opened = true;
</script>

<style>
    .notIntended{
        width:100%;
    }
    .intended{
        width: 80%;
        float: right;
    }

</style>

<div class="notIntended">
    <p>{categoryName}</p>
</div>
{#if opened}
    <div class="intended">
        {#each Tasks as task}
            <Task text={task.Name}/>
        {/each}
            <Task text={"+"} canCheckbox={false}/>
    </div>
{/if}