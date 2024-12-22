import { NextApiRequest, NextApiResponse } from 'next';
import { getTherapistResponse } from '../../lib/openai';

export default async function chat(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        const { userInput } = req.body;
        const result = await getTherapistResponse(userInput);
        res.status(200).json(result);
    } catch (error) {
        console.error('API error:', error);
        res.status(500).json({ error: 'Error processing request' });
    }
}