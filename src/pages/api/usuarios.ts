import { NextApiRequest, NextApiResponse } from "next";
import connection from "../../backend/conexao";
import listUsuarios from "../../types/listUsuarios";


function routes(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;

    if (method === "POST") {
        const body: listUsuarios = req.body
        connection.query(
            'INSERT INTO `usuarios` (nome,email,idade) VALUES (?,?,?)', [body.nome, body.email, body.idade],
            function (erro) {
                if (!erro) {
                    res.status(201).send(true)
                } else {
                    res.status(500).send(erro)
                }
            }
        )
    } else if (method === "GET") {
        connection.query(
            'SELECT * FROM `usuarios`',
            function (err, results) {
                if (!err) {
                    res.status(200).send(results);
                } else {
                    res.status(500).send(err)
                }
            }
        );
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    routes(req, res);
}