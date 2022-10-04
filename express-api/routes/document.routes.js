const { 
    addDocument, 
    deleteDocument, 
    findAllDocuments, 
    findDocumentById, 
    updateDocument 
} = require("../services/document.service");
const { appendRequestIdentifier, postRequestHandler } = require("./routes.helper");

const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(appendRequestIdentifier);

router.get("/", async (req, res, next) => {
    const documents = findAllDocuments();
    res.json(documents);

    next();
});

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    const document = findDocumentById(parseInt(id));

    if (document) {
        res.send(document);
    } else {
        res.status(404)
            .send();
    }
    next();
});

router.post("/", async (req, res, next) => {
    addDocument(req.body);
    res.status(201)
        .header("location", `${req.baseUrl}/${req.body.id}`)
        .send();
    next();
});

router.put("/:id", async (req, res, next) => {
    const { id } = req.params;
    updateDocument(parseInt(id), req.body);
    res.status(204)
        .send();
    next();
});

router.delete("/:id", async (req, res, next) => {
    deleteDocument(parseInt(id));
    const { id } = req.params;
    res.status(204)
        .send();

    next();
});

router.use(postRequestHandler);

module.exports = router;