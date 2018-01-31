import { schema } from 'normalizr';

const movie = new schema.Entity('movies');

const movieSchema = [ movie ];

export default movieSchema;
