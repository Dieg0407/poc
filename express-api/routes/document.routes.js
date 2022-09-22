const express = require("express");
const { 
    addDocument, 
    deleteDocument, 
    findAllDocuments, 
    findDocumentById, 
    updateDocument 
} = require("../services/document.service");

const router = express.Router();
router.use(express.json());

router.get("/", async (_req, res) => {
    res.json(findAllDocuments());
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const document = findDocumentById(parseInt(id));

    if (document) {
        res.send(document);
    } else {
        res.status(404)
            .send();
    }
});

router.post("/", async (req, res) => {
    addDocument(req.body);
    res.status(201)
        .header("location", `${req.baseUrl}/${req.body.id}`)
        .send();
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    updateDocument(parseInt(id), req.body);
    res.status(204)
        .send();
});

router.delete("/:id", async (req, res) => {
    deleteDocument(parseInt(id));
    const { id } = req.params;
    res.status(204)
        .send();
});

module.exports = router;