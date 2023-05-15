<script>
    export let data;

    let selectedItem;


</script>



<h1>Update!</h1>
<div>
    <ol>
        {#each data?.records as record,index}
        <li> <input id={`job-checkbox-${index}`} checked={selectedItem?.jobname === record.jobname} type="checkbox" value={JSON.stringify(record)} on:click={()=> selectedItem = (selectedItem?.jobname !== record.jobname)? record  : undefined}/>{`Job Name: ${record.jobname}   Salary: ${record.salary}`}</li>
        {/each}
    </ol>
    {#if selectedItem}
    <form method="post" action="?/update">
        <label for="jobname">New Job Name</label>
        <input id="jobname" name="jobname" type="text" required value={selectedItem.jobname}/>
        <label for="salary">New Salary</label>
        <input id="salary" name="salary" type="text" required value={selectedItem.salary}/>
        <input id="id" name="id" type="hidden" value={selectedItem.id} />
        <button type="submit">Submit</button>
    </form>
    {/if}
</div>


<style>
    form{
        margin-top: .5em;
        display: flex;
        flex-direction: column;
    }
    form input{
        margin:.5em;
    }
</style>