

<h1>Create!</h1>
<form method="post" action="?/create">
    <label for="jobname">Job Name</label>
    <input type="text" required name="jobname" />
    <label for="salary">Salary</label>
    <input type="number" required name="salary" />
    <button type="submit">Submit</button>
</form>


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