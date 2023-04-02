import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

//=> Environment Variable:
dotenv.config();

//=> Route:
const router = express.Router();

router.route('/').get((req, res) => {
	res.status(200).json({ message: 'This it from route: /' });
});

export default router;
