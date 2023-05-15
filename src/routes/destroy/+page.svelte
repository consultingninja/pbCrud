<script>
    export let data;

    let selectedItem;
    let confirm = false;

</script>



<h1>Destroy!</h1>
<div>
    <ol>
        {#each data?.records as record,index}
        <li> <input id={`job-checkbox-${index}`} checked={selectedItem?.jobname === record.jobname} type="checkbox" value={JSON.stringify(record)} on:click={()=> selectedItem = (selectedItem?.jobname !== record.jobname)? record  : undefined}/>{`Job name: ${record.jobname}   Salary: ${record.salary}`}</li>
        {/each}
    </ol>
    {#if selectedItem}
    <form method="post" action="?/delete">

        <p>{selectedItem.jobname}</p>
        <p>{selectedItem.salary}</p>
        <input id="id" name="id" type="hidden" value={selectedItem.id} />
        {#if confirm}
        <label for="delete">Are you sure?</label>
        <button id="delete" name="delete" type="submit">Delete</button>
        {:else}
        <button id="confirm" name="confirm" on:click={()=> confirm = true}>Delete</button>
        {/if}
    </form>
    {/if}
</div>


<style>
    form{
        margin-top: .5em;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    form input{
        margin:.5em;
    }
    form p{
        margin:0;
    }
</style>