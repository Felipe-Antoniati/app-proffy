import { Request, Response } from "express";
import knex from "../database/connection";

export default class ConnectionsController {
  async index(req: Request, res: Response) {
    const totalConnections = await knex("connections").count("* as total");

    const { total } = totalConnections[0];

    return res.json({ total });
  }

  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    await knex("connections").insert({
      user_id,
    });

    return res.status(201).send();
  }
}
