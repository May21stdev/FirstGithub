import { ReadFile } from "../lib/fs-module";
import { CustomerCode, randomId } from "../lib/random";
const customerFile = "../Buổi 18 - FS Module/customer.json";

export class CustomerController {
    constructor (col_customer) { 
        this.col_customer = col_customer;
    }

    async ListCustomer() {
        const docs = await this.col_customer.find().toArray();
        return docs;
    }

    async GetCustomer(id) {
        const doc = await this.col_customer.findOne({ _id : id });
        return doc;
    }

    async CreateCustomer(params) {
        const customer = {
            _id : randomId(12),
            code : CustomerCode(),
            ...params
        }
        try {
            await this.col_customer.insertOne(customer);
            return customer;
        } catch(err) {
            throw err;
        }
    }

    async UpdateCustomer(id, params) {
        const customer = await this.GetCustomer(id);
        if (customer) {
            const newCustomer = {...customer, ...params};
            try {
                await this.col_customer.updateOne({ _id : id }, { $set : newCustomer });
                return newCustomer;
            } catch(err) {
                throw err;
            }
        } 
        return customer;
    }
}