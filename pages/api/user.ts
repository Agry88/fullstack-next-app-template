import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../server/models/definitions/User';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {

        case "POST":
            await POST(req, res)
            break;

        case "GET":
            await GET(req, res)
            break;

        case "DELETE":
            await DELETE(req, res)
            break;

        case "PUT":
            await PUT(req, res)
            break;

        default:
            break;
    }
}

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await User.sync();
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json({ error: "Something went wrong" });
        }
    }
}

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { user_name, password, email } = req.body;
        await User.sync();
        const user = await User.create({
            user_name,
            password,
            email
        })
        return res.status(201).json(user);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json({ error: "Something went wrong" });
        }
    }
}

const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { user_name, email } = req.body;
        await User.sync();
        const user = await User.destroy({
            where: {
                user_name,
                email
            }
        })
        return res.status(200).json({ message: "刪除成功" });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json({ error: "Something went wrong" });
        }
    }
}

const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { user_name, email, password } = req.body;
        await User.sync();
        await User.update({
            user_name,
            email,
            password
        }, {
            where: {
                user_name,
                email
            }
        })
        return res.status(200).json({ message: "修改成功" });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json({ error: "Something went wrong" });
        }
    }
}