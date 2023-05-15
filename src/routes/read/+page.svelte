<script>
    export let data;

</script>


<h1>Read!</h1>
<div>
    <ol>
        {#each data?.records as record}
        <li>{`Job Name: ${record.jobname}   Salary: ${record.salary}`}</li>
        {/each}
    </ol>
</div>