const { 
    addDocument, 
    deleteDocument, 
    findAllDocuments, 
    findDocumentById, 
    updateDocument
} = require("./document.service");

const savedDocument01 = {
    id: 1,
    name: "document01.jpg"
};

// clean up
beforeEach(() => {
    findAllDocuments()
        .forEach(document => deleteDocument(document.id));
    addDocument(savedDocument01);
});

test("should add a new documemt", () => {
    const document = {
        id: 2,
        name: "document02.jpg"
    };
    addDocument(document);

    const documents = findAllDocuments();
    expect(documents).toContainEqual(document);
});

test("should list all documents", () => {
    expect(findAllDocuments()).toHaveLength(1);
});

test("should obtain document by id", () => {
    expect(findDocumentById(savedDocument01.id))
        .toEqual(savedDocument01);
});

test("should update/replace document by id", () => {
    const document = {
        id: 1,
        name: "document updated.jpg"
    }
    updateDocument(1, document);

    expect(findDocumentById(1)).toEqual(document);
});

test("should delete document by id", () => {
    deleteDocument(1);

    expect(findAllDocuments()).toHaveLength(0);
});