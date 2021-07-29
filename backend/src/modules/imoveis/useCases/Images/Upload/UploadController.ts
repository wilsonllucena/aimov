import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadUseCase } from "./UploadUseCase";

class UploadController {
	async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id_imovel } = request.params;
            const nome = request?.file?.filename;
            const file = request?.file?.filename;
            const uploadUseCase = container.resolve(UploadUseCase);
    
            if (nome && id_imovel && file)
                await uploadUseCase.execute({ id_imovel, nome , file});
    
            return response.status(204).send();
        } catch (error) {
            return response.status(500).send(error);
        }

	}
}

export { UploadController };
