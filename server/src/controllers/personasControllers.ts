import { Response, Request } from 'express';

import pool from '../database';

class PersonasController {
    public async list(req: Request, res: Response) {
        const personas = await pool.query('SELECT * FROM personas');
        res.json(personas);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const personas = await pool.query('SELECT * FROM personas WHERE id = ?', [id]);
        if (personas.length > 0) {
            return res.json(personas[0]);
        }
        res.status(404).json({ text: "la persona no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO personas set ?', [req.body]);
        res.json({ message: 'persona agregada' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE personas set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Los datos se actualizaron" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM personas WHERE id = ?', [id]);
        res.json({ message: "La persona fue eliminada" });
    }
}

const personasController = new PersonasController();
export default personasController;