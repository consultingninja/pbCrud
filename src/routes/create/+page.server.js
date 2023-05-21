import PocketBase from 'pocketbase';
import {SECRET_EMAIL,SECRET_PASSWORD} from '$env/static/private';


export const actions={
    create: async ({request})=>{
        const pb = new PocketBase("http://127.0.0.1:8090");
        //sign in
         await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
        const form = await request.formData();

        const jobname = form.get('jobname')?? '';
        const salary = form.get('salary')??'';

        const data = {
            jobname,
            salary
        };
        
        await pb.collection('jobs').create(data);


    }
}