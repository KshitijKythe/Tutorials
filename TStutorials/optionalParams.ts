//describing optional params passed to a function

function disp_details(id:number,name:string,mail_id?:string){
    console.log("ID:",id);
    console.log("Name:",name);
    if(mail_id!=undefined)
        console.log("mailId:",mail_id);
}

disp_details(123,"John");
disp_details(111,"Mary","mary@xyz.com");