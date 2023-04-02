import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './routes/dalle.routes.js';

//==> Setup:
//=> Environment Variable:
dotenv.config();

//=> Express Application:
const app = express();

//=> Middleware:
//* Cross origin:
app.use(cors());

//* Payload limit:
app.use(express.json({ limit: '50mb' }));

//* Dalle.E Route:
app.use('/api/v1/dalle', dalleRoutes);

//* Demo Route:
app.get('/', (req, res) => {
	res.status(200).json({ message: 'This is DALL.E' });
});

//=> Port:
app.listen(8080, () => console.log('Server runnig on port 8080'));
