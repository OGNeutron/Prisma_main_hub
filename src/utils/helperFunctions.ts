import { Response } from 'express'
import { v4 as uuid } from 'uuid'
import { S3 } from 'aws-sdk'
import { stringType } from 'aws-sdk/clients/iam'

export const respond = (
	res: Response,
	status: number,
	boolean: boolean,
	data: Object | null
) => {
	return res.status(status).json({
		success: boolean,
		result: data
	})
}

interface IProcessUpload {
	filename: stringType
	mimetype: stringType
	encoding: stringType
	key: string
	url: string
	Etag: string
}

export const processUpload = async (
	s3: S3,
	picture: string,
	folder: string
): Promise<IProcessUpload> => {
	const { createReadStream, filename, mimetype, encoding }: any = await picture
    const key = folder + '/' + uuid() + '-' + filename
    
    const stream = createReadStream()

	const response = await s3
		.upload({
			Bucket: process.env.AWS_BUCKET || 'mainhubbucket',
			Key: key,
			ACL: 'public-read',
			Body: stream
		})
		.promise()

	return {
		filename,
		mimetype,
		encoding,
		key: response.Key,
		url: response.Location,
		Etag: response.ETag
	}
}
