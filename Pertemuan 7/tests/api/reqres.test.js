import fetch from 'node-fetch';
import { expect } from 'chai';
import Ajv from 'ajv';
import dotenv from 'dotenv';
import schema_createuser from '../schema/reqresSchemaCreateUser.js';
import schema_edituser from '../schema/reqresSchemaEditUser.js';
import schema_getuser from '../schema/reqresSchemaGetUser.js';

dotenv.config();
const ajv = new Ajv();

describe('Reqres API Tests Suite', function(){
    const baseUrl = 'https://reqres.in';

    it("READ - Get list of users", async function() {
        const response = await fetch(`${baseUrl}/api/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.reqresApiKey,
            },
        });

        expect (response.status, "Ada yang salah").to.equal(200);

        const data = await response.json();
        const cek = ajv.compile(schema_getuser);
        const hasil = cek(data);

        expect(hasil, "Schema tidak sesuai").to.be.true;

        // Print output dari response
        // console.log(await response.json());
    });
    
    it("CREATE - Create a new user", async function() {
        const newPost = {
            name: "morpheus",
            job: "leader"
        };

        //hit
        const response = await fetch(`${baseUrl}/api/users`, {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.reqresApiKey,
                },
                body: JSON.stringify(newPost),
        });

        expect(response.status, "Ada yang salah").to.equal(201);

        const data = await response.json();
        const cek = ajv.compile(schema_createuser);
        const hasil = cek(data);

        expect(hasil, "Schema tidak sesuai").to.be.true;

        //Ambil hasil output dari response
        // console.log(data);

    });

    it("UPDATE - Update a user", async function() {
        const updatedPost = {
            name: "morpheus",
            job: "zion resident"
        };

        //hit
        const response = await fetch(`${baseUrl}/api/users/2`, {
            method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.reqresApiKey,
                },
                body: JSON.stringify(updatedPost),
        });
        expect(response.status, "Ada yang salah").to.equal(200);
        
        const data = await response.json();
        const cek = ajv.compile(schema_edituser);
        const hasil = cek(data);

        expect(hasil, "Schema tidak sesuai").to.be.true;

    });

    it("DELETE - Delete a user", async function() {
        //hit
        const response = await fetch(`${baseUrl}/api/users/2`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.reqresApiKey,
            },
        });
        expect(response.status, "Ada yang salah").to.equal(204);
    });
});