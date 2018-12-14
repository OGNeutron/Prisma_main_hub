import { Response } from 'express';

export const respond = (
	res: Response,
	status: number,
	boolean: boolean,
	data: Object | null
) => {
	return res.status(status).json({
		success: boolean,
		result: data
	});
};
