# API Documentation

## Endpoint: `/user/register`

### Description
This endpoint is used to register a new user. It validates the input data, checks if the user already exists, hashes the password, and creates a new user in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

### Method
`POST`

### URL
`/user/register`

### Request Body
The request body should be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "string (min length: 3, required)",
    "lastname": "string (min length: 3, optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min length: 6, required)"
}
```

### Response

#### Success Response
- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "string (JWT token)",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

#### Error Responses

- **Status Code**: `400 Bad Request`
  - **Reason**: Validation errors in the input data.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string (error message)",
          "param": "string (field name)",
          "location": "string (body)"
        }
      ]
    }
    ```

- **Status Code**: `400 Bad Request`
  - **Reason**: User already exists.
  - **Body**:
    ```json
    {
      "message": "User already exist"
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Reason**: Unexpected server error.
  - **Body**:
    ```json
    {
      "message": "string (error message)"
    }
    ```

### Notes
- Ensure the `Content-Type` header is set to `application/json` when making requests.
- The `password` field is hashed before being stored in the database.
- The `token` returned in the response can be used for authentication in subsequent requests.