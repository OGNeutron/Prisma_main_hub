import { Redis } from 'ioredis';
import { createToken } from 'scotts_utilities';

import { createTransport } from 'nodemailer';
import { FORGOT_PASSWORD_PREFIX } from '../../constants';
import { logger } from '../logger';

// const sgTransport = require('nodemailer-sendgrid-transport')

const from = 'Experimental website <scottberry91@gmail.com>';

interface EmailArgs {
	id: string;
	username: string;
	email: string;
}

interface Email {
	from: string;
	to: string;
	subject: string;
	html: string;
}

const generateConfirmationUrl = async (
	{ id, username, email }: EmailArgs,
	url: string
): Promise<string> => {
	try {
		const [ token ]: string[] = await createToken(
			{ id, username, email },
			'secret'
		);

		const link: string = `${process.env.CLIENT_URL ||
			url}/auth/confirmation?t=${token}`;

		return link;
	} catch (error) {
		logger.error({ level: '5', message: error });
		return error;
	}
};

const generateResetPasswordLink = async (
	{ id, username, email }: EmailArgs,
	url: string
): Promise<string> => {
	try {
		const [ token ]: string[] = await createToken(
			{ id, username, email },
			'secret'
		);

		const link: string = `${process.env.CLIENT_URL ||
			url}/auth/reset_password?t=${token}`;

		return link;
	} catch (error) {
		logger.error({ level: '5', message: error });
		return error;
	}
};

const setup = () => {
	return createTransport(
		// sgTransport({
		//   auth: {
		//     api_key: process.env.SENDGRID_API
		//   }
		// })
		{
			host: process.env.EMAIL_HOST || 'smtp.mailtrap.io',
			port: process.env.EMAIL_PORT || 2525,
			auth: {
				user: process.env.EMAIL_USER || '984c1182cd3546',
				pass: process.env.EMAIL_PASS || 'c468fcdc66d05b'
			}
		} as any
	);
};

export const sendConfirmationEmail = async (
	user: EmailArgs,
	url: string
): Promise<any> => {
	try {
		const transport = setup();
		const emailUrl = await generateConfirmationUrl(user, url);

		const email: Email = {
			from,
			to: user.email,
			subject: 'Thanks for signing up',
			html: `
            <h1>Welcome to our website</h1>

            <a href="${emailUrl}">Confirmation Link</p>
        `
		};

		transport.sendMail(email);
	} catch (error) {
		logger.error({ level: '5', message: error });
		return error;
	}
};

export const sendResetPasswordEmail = async (
	user: EmailArgs,
	redis: Redis,
	url: string
): Promise<any> => {
	try {
		const transport = setup();

		await redis.set(
			`${FORGOT_PASSWORD_PREFIX}${user.id}`,
			user.id,
			'ex',
			60 * 20
		);

		const email: Email = {
			from,
			to: user.email,
			subject: 'Reset Password',
			html: `
				To reset password follow this link

				<a href="${await generateResetPasswordLink(user, url)}">Reset Link</a>
			`
		};

		console.log('EMAIL', email);

		transport.sendMail(email);
	} catch (error) {
		console.log('BIG ERROR', error);
		logger.error({ level: '5', message: error });
	}
};
