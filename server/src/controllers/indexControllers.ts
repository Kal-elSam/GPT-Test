import {Response,Request} from 'express';

class IndexController {
    public index (req: Request,res: Response) {
        res.json({text: 'API Is /api/personas'});
    } 
}

export const indexController = new IndexController();