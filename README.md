# foostagram

## GET /users
Get all user data

### return data
- User

## POST /users/register
register new user

### required data
- username
- password

### return data
- new user data

## POST /users/login
login user

### required data
- username
- password

### return data
- JWT token

## PUT /users/:username
edit user data

### required data
- token (for authorization, in headers)
- username/email

### return data
- updated user data

## DELETE /users/:username
delete user

### required data
- token (for authorization, in headers)

### return data
- delete user info