const schema_edituser = {
    "type": "object",
    "properties": {
        "name": { "type": "string" },
        "job": { "type": "string" },
        "updatedAt": { "type": "string" },
    },
    "required": ["name", "job", "updatedAt"],
}

export default schema_edituser;