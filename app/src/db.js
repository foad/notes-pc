import Dexie from 'dexie';

const db = new Dexie('NotesDB');
db.version(1).stores({ tags: '++id' });

export default db;
