const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://rishti_rr:XbMvj5iNaeQLSkVo@cluster0.xhqt8.mongodb.net/rrr_academy?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

async function getData() {
  try {
    await client.connect();
    const db = client.db('rrr_academy');
    const courses = await db.collection('courses').find().toArray();
    const books = await db.collection('books').find().toArray();
    return { courses, books };
  } catch (err) {
    console.error("MongoDB error:", err);
    return { courses: [], books: [] };
  }
}

module.exports = { getData };
