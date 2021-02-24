import { ParseService } from '../parse.service';
import bind from 'bind-decorator';
import { Request, Response } from 'express';
import { PrepModel } from './models/prep.model';


export class PrepController {
    constructor(private readonly  parseService: ParseService<PrepModel>) {}

    @bind
    public async parseAll(req: Request, res: Response) {
        try {
            const data = await this.parseService.parseAll('http://rlsaurora10.azurewebsites.net/api/classes_prep', PrepModel)
            res.status(200).send(data);
        } 
        catch (err) {
            res.status(500).send(err);
        }
    }

    @bind
    public async parseAllZip(req: Request, res: Response) {
        try {
            const data = await this.parseService.parseAllZip('http://rlsaurora10.azurewebsites.net/api/classes_prep', PrepModel);
            res.status(200).send(data);
        } 
        catch (err) {
            res.status(500).send(err);
        }
    }

    @bind
    public async parseQuery(req: Request, res: Response) {
        try {
            const {query} = req.params;
            console.log(query);
            const data = await this.parseService.parseQuery('http://rlsaurora10.azurewebsites.net/api/classes_prep', query, PrepModel);
            res.status(200).send(data);
        } 
        catch (err) {
            res.status(500).send(err);
        }
    }

}

export default new PrepController(new ParseService);