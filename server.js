const express = require('express');
const cors = require('cors');
const faker = require('faker')
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

class User{
    constructor(){
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get('/api/users/new', (request, response)=>{
    const user = new User();
    response.json(user);
})
app.get('/api/companies/new', (request, response)=>{
    const company = new Company();
    response.json(company);
})
app.get('/api/user/company', (request, response)=>{
    const user = new User();
    const company = new Company();
    response.json({User:user, Company:company});
})

app.listen(port, ()=> console.log(`Listening on port ${port}`));