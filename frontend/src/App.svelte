<script>
    import { onMount } from 'svelte';
    import Category from "./components/Category.svelte";


	let path = "tasks.json"
	let tasks = null
	let error = "Not loaded"
	let writingError = null
	function getTasks() {
		window.go.main.App.GetTasks(path).then((tasksStructs, errorStr) => {
			if (errorStr){
				error = null
			}else{
				tasks = tasksStructs;
			}
		});
	}
	function writeTasks(){
		window.go.main.App.WriteTasks(path).then(errorStr => {
			if (errorStr){
				writingError = error
			}
		});
	}

    onMount(async () => {
        getTasks()
    })
</script>

<main>
    {if tasks && tasks.length == 0}
        {#each tasks as category}
            {Category categoryName=/}
        {/each}
    {:else }
        <p>This list is empty. Add a first category</p>
    {/if}
</main>

<style>

	main {
		height: 100%;
		width: 100%;
	}

	button {
		-webkit-appearance: default-button;
		padding: 6px;
	}


</style>