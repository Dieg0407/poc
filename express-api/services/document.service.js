const documents = new Map();

const findAllDocuments = () =>  {
    const values = [];
    documents.forEach((value, _key) => values.push(value));
    return values;
};
const findDocumentById = (id) => documents.get(id);
const addDocument = (document) => documents.set(document.id, document);
const updateDocument = (id, document) => documents.set(id, { ...document, id: id});
const deleteDocument = (id) => documents.delete(id);

module.exports = {
    findAllDocuments,
    findDocumentById,
    addDocument,
    updateDocument,
    deleteDocument
};