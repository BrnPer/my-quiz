import { ResponseHelper } from "helpers/ResponseHelper";
import { AddQuestion } from "models/Questions/AddQuestion";
import { APIService } from "./APIService";


export class QuestionService {
    async Add(dto: AddQuestion): Promise<ResponseHelper> {
        try {
            var response = await APIService.Axios().post(`${APIService.GetURL()}/question/add`,
                {
                    ...dto
                },
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + APIService.GetToken()
                    }
                });
            return response.data;
        } catch (error) {
            return new ResponseHelper("Erro ao criar a questão!");
        };
    }
}