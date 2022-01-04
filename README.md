Create an API that updates one field or more in an existing pet.

## Update Pet

1. Make your `updatePet` function asynchronous, and add a `try-catch` block.
2. Capture the ID from the URL and use it to find the pet with this ID using the `.findById()` method.
3. If the pet exists, call the `updateOne()` method on `foundPet` and pass it the body of the request.
4. **Don't forget** to set the status code to `204` and end the response.
5. If it doesn't exist set the response status code to `404` and return an error message stating that this pet doesn't exist as a JSON response.
6. In the `catch` block, set the response status code to `500` and return the error message as a JSON response.

## Testing

1. Send a valid pet ID through the URL and send along with it an object in the `body` and update all fields to the update endpoint. Make sure to add it under raw and that your data type is `json`.
2. Send a valid pet ID through the URL and update a different pet, but this time update one field only.
3. Send a non-valid pet ID through the URL. It should return a `404` status and a message.
4. Send a request to the retrieve pets list route to make sure your pets were updated successfully.
