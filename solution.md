# Pet Update

3. Add the `async await` and `try-catch` statement to your `updatePet` method.

   ```javascript
   exports.updatePet = async (req, res) => {
     const { petId } = req.params;
     try {
       // ...
     } catch (error) {
       return res.status(500).json({ message: error.message });
     }
   };
   ```

4. Find the pet that has the `petId`.

   ```javascript
   try {
     const foundPet = await Pet.findById(petId);
   } catch (error) {
     return res.status(500).json({ message: error.message });
   }
   ```

5. Updating a `pet` requires two steps: **finding** the pet with `petId`, then **updating** this pet. To get an item by its ID we will use a mongoose method called `findById()`.

   ```javascript
   exports.updatePet = async (req, res) => {
     try {
       const foundPet = await Pet.findById(petId);
     } catch (error) {
       return res.status(500).json({ message: error.message });
     }
   };
   ```

6. Then we will call a method called `.updateOne()` that will take care of updating the pet for us. we will pass it the the req.body.

   ```javascript
   try {
   const foundPet = await Pet.findById(petId);
    const updatedPet = await foundPet.updateOne(req.body);
    return res.json(updatedPet);
   }
   ```

7. To return the updated pet insted of the old pet we add `{ new: true }` as a third argument to `updateOne()` method:

   ```javascript
   try {
     const foundPet = await Pet.findById(petId);
     await foundPet.updateOne(req.body,{ new: true }
   );
     return res.json(foundPet);
   }
   ```

8. But what if the pet ID sent doesn't exist? The response is `null` with a status code `200`. We need to fix this! We must check if the pet is found or not:

   ```javascript
   try {
     const foundPet = await Pet.findById(petId);
     if (foundPet) {
       const foundPet= await Pet.findById(petId);
       await foundPet.updateOne(req.body, { new: true });
       return res.json(foundPet);
     } else {
       return res.status(404).json({ message: "Pet not found" });
     }
   }
   ```
