import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

//=> Environment Variable:
dotenv.config();

//=> Route config:
const router = express.Router();

//=> Dalle Api:
const config = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

//=> Requests:
router.route('/').get((req, res) => {
	res.status(200).json({ message: 'DALL.E Route' });
});

router.route('/').post(async (req, res) => {
	try {
		const { prompt } = req.body;

		const response = await openai.createImage({
			prompt: prompt,
			n: 1,
			size: '1024x1024',
			response_format: 'b64_json',
		});

		const image = response.data.data[0].b64_json;

		res.status(200).json({ photo: image });
	} catch (error) {
		if (error.response) {
			console.log(error.response.status);
			console.log(error.response.data);
		} else {
			console.log(error.message);
		}
		res.status(400).json({
			success: false,
			error: 'The image could not be generated',
		});
	}
});

export default router;
