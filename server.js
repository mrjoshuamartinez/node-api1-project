const express = require("express")
const db = require("./database")

const server = express()
const port = 8080

server.use(express.json())

server.get("/", (req, res) => {
  res.json({message: "Welcome to The Simpson Family!"})
})

server.get("/about", (req, res) => {
  res.json({message: "Little about this api!"})
})

server.get("/api/users", (req, res) => {
    const users = db.getUsers()
    res.json(users)
})

server.get("/api/users/:id", (req, res) => {
    const id = req.params.id
    const user = db.getUserById(id)
    if (user) {
        res.json(user)
    } else {
        res.status(404).json({
            message: 'user not found',
        })
    }
})

server.post("/api/users", (req, res) => {
    if (!req.body.name || !req.body.bio) {
        return res.status(400).json({ 
            errorMessage: "Please provide name and bio for the user." 
        })
    }
    const newUser = db.createUser({
        name: req.body.name,
        bio: req.body.bio
    })
    res.status(201).json(newUser)
})

server.put("/api/users/:id", (req, res) => {
    const user = db.getUserById(req.params.id)

    if (user) {
        const updatedUser = db.updateUser(user.id, {
            name: req.body.name || user.name,
        })
        res.json(updatedUser)
    } else {
        res.status(404).json({
            message: "User not found",
        })
    }
})

server.delete("/api/users/:id", (req, res) => {
    const user = db.getUserById(req.params.id)

    if (user) {
        db.deleteUser(user.id)
        res.status(204).end()
    } else {
        res.status(404).json({
            message: "user not found"
        })
    }
})

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${ port }`)
})