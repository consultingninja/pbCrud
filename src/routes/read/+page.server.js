import PocketBase from 'pocketbase';
import {SECRET_EMAIL,SECRET_PASSWORD} from '$env/static/private';


export async function load({}){
    const pb = new PocketBase("http://127.0.0.1:8090");
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
    const records = await pb.collection('jobs').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    const results = records.map((record)=> {return {jobname:record.jobname,salary:record.salary}})

    return{
        records: results
    }
}