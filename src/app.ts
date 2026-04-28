import express from "express"
import cardRoutes from "./routes/card.routes.js"


const app = express()

// Parse incoming request bodies as JSON before reaching route handlers.
app.use(express.json())

// Mount all card-related endpoints under /api.
app.use("/api", cardRoutes);

// Start the HTTP server for local API usage.
app.listen(3000, () => {
    console.log("Server running on port 3000")
})
