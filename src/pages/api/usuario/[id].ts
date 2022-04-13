import connection from "../../../backend/conexao";
import { NextApiRequest, NextApiResponse } from "next";
import listUsuarios from "../../../types/listUsuarios";

function routes(req: NextApiRequest, res: NextApiResponse, id: string | string[]) {
    const method = req.method

    if (method === "PUT") {
        const body: listUsuarios = req.body
        connection.query(
            "UPDATE `usuarios` SET nome=? , email=? , idade=? WHERE id=?", [body.nome, body.email, body.idade, body.id, id],
            function (err) {
                if (!err) {
                    res.status(200).send(true)
                } else {
                    res.status(500).send(false)
                }
            }
        )
    } else if (method === "DELETE") {

        connection.query(
            "DELETE from `usuarios` WHERE id=?", [id],
            function (err) {
                if (!err) {
                    res.status(202).send(true)
                } else {
                    res.status(500).send(false)
                }
            }
        )

    } else if (method === "GET") {
        connection.query(
            "SELECT * FROM usuarios WHERE id = ?", [id],
            function (err, results) {
                if (!err) {
                    res.status(200).send(results)
                } else {
                    res.status(500).send(false)
                }
            }
        )
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id;
    routes(req, res, id)
}