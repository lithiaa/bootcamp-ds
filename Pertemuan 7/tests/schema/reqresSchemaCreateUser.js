const schema_createuser = {
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "name": { "type": "string" },
    "job": { "type": "string" },
    "createdAt": { "type": "string" },
  },
  "required": ["id", "name", "job", "createdAt"],
}

export default schema_createuser;

