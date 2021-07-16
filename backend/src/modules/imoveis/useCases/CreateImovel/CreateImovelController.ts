import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateImovelUseCase } from "./CreateImovelUseCase";

class CreateImovelController {
    async handle(request: Request, response: Response): Promise<Response> { 
        try{
            const { nome_proprietario, documento_proprietario, email_proprietario, telefone_proprietario, quantidade_quartos, quantidade_suites , garagem, metragem, tipo, cep, endereco, bairro, cidade, uf, observacoes, regiao, latitude, longitude , id_usuario_responsavel } = request.body;
            const createImovelUseCase = container.resolve(CreateImovelUseCase);

           const imovel = await createImovelUseCase.execute({
                nome_proprietario, documento_proprietario, email_proprietario, telefone_proprietario, quantidade_quartos, quantidade_suites , garagem, metragem, tipo, cep, endereco, bairro, cidade, uf, observacoes, regiao, latitude, longitude , id_usuario_responsavel
            })

            return response.status(201).json(imovel);

        }catch(error){
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ "error": error.message })
            }
            
            return response.json({ "error": error })
        }
    }
}

export { CreateImovelController }