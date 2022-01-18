import express from "express";
import * as random from "../lib/random"
import { WriteFile } from "../lib/fs-module";
const customerFile = "../Buổi 18 - FS Module/customer.json";

// import file from "../lib/fs-module"
export function customerRouter(customerCTL) {
    const router = express.Router(); 
    
    router.get("/list", async (req,res) => {
        const docs = await customerCTL.ListCustomer();
        res.json(docs);
    })
    
    router.get("/get", async (req,res) => { 
        const id = req.query.id;
        const doc = await customerCTL.GetCustomer(id);
        if (doc !== null) {
            return res.json(doc)
        }
        return res.status(404).json(`customer with id = ${id} not found`);
    })

    router.post("/create", async (req, res) => {
        const params = {};
        params.full_name = req.body.full_name;
        if (["male", "female"].includes(req.body.gender))  {
            params.gender = req.body.gender;
        } else {
            return res.status(400).json("gender must be one of male, female")
        }
        params.birthday = req.body.birthday;
        const doc = await customerCTL.CreateCustomer(params);
        res.json(doc);
    })

    router.post("/delete", async (req, res) => {
        const docs = await customerCTL.ListCustomer();
        const id = req.query._id;
        const check = docs.find(el => el._id == id);
        if (check) {
            const doc = docs.filter(el => el._id != id);
            WriteFile(customerFile,doc);
            return res.json(doc);
        }
        return `customer with id = ${id} does not exist`;
        
    })

    router.post("/update", async (req, res) => {
        const id = req.query.id;
        const params = req.body;
        if (req.body.gender) {
            if (["male", "female"].includes(req.body.gender)) {
                params.gender = req.body.gender;
            } else {
                return res.status(400).json("gender must be one of male, female")
            }
        } 
        const doc = await customerCTL.UpdateCustomer(id, params);
        res.json(doc);
    })
    
    return router;
}

// problem : để const docs vào từng hàm riêng thì mỗi lần gọi docs sẽ gọi lại customerjson => tìm cách ghi file