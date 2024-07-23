# API Documentation

## Users

### create - POST(/users)

body:
```
{
"name": "john",
"email": "john@example.com",
"password": "123456",
}
```

## Groups

### create - POST(/groups)

body:
```
{
  "name": "Test",
  "userId": "53e9cd2a-3072-4e2e-bd81-44fdf0cda564",
  "contacts": [
    {
      "name": "Cassio",
      "phone_number": "5584994659868"
    },
    {
      "name": "Dickson",
      "phone_number": "5584991616256"
    },
    {
      "name": "João",
      "phone_number": "5584981654324"
    },
    {
      "name": "José",
      "phone_number": "5584981664324"
    }
  ]
}
```

### findGroupsByUserId - GET(/groups/:userId)

### delete - DELETE(/groups/:id)
