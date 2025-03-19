const {z} = require('zod');
const bcrypt = require('bcrypt');

function SignupAuth (req , res , next)
{
       const validation = z.object({
            name: z.string().min(3, "Username is Incoorect ex:Jhon")
            .max(12 , "Username is Incoorect ex:Jhon")
            .regex(/[a-zA-Z]/, "Username is Incoorect ex:Jhon")
            .refine((value) => !/\s/.test(value) , "Username is Incoorect ex:Jhon"),

            phoneno : z.number().min(1000000000 , "Enter Valid Number").max(9999999999 , "Enter Valid Number"),

            email : z.string().email("Incorrect Email Format"),

            password : z.string().min(8 , "Password Must be Contain 8 Character")
            .max(15 , "Password Must be Contain 15 Character")
            .regex(/[a-z]/ , "Password Must be Contain Small")
            .regex(/[A-Z]/ , "Password Must be Capital Letter")
            .regex(/[!@#$%^&*?]/ , "Password Must be Contain One Special Character")
        });

        const valid = validation.safeParse(req.body);

        if(!valid.success)
        {
            const errmsg = valid.error.issues.map(i => i.path);
            const all = errmsg.map(i => i.join(","))
           res.status(401).json({all})
        }
        else{
            res.status(200).send("Successfull Validation");
            next();
        }
}
module.exports =
{
    SignupAuth
}