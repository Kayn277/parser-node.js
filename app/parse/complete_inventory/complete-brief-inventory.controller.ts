import { ParseService } from '../parse.service';
import bind from 'bind-decorator';
import { Request, Response } from 'express';
import { CompleteInventory } from '../models';

export class BriefInvetoryController {
    constructor(private readonly  parseService: ParseService<CompleteInventory>) {}

    @bind
    public async parseAll(req: Request, res: Response) {
        try {
            const data = await this.parseService.parseAll('http://rlsaurora10.azurewebsites.net/api/inventory_brief', CompleteInventory)
            res.status(200).send(data);
        } 
        catch (err) {
            res.status(501).send(err);
        }
    }

    @bind
    public async parseAllZip(req: Request, res: Response) {
        try {
            const data = await this.parseService.parseAllZip('http://rlsaurora10.azurewebsites.net/api/inventory_brief', CompleteInventory)
            res.status(200).send(data);
        } 
        catch (err) {
            res.status(501).send(err);
        }
    }

    @bind
    public async parseQuery(req: Request, res: Response) {
        try {
            const {query} = req.params;
            console.log(query);
            const data = await this.parseService.parseQuery('http://rlsaurora10.azurewebsites.net/api/inventory_brief', query, CompleteInventory);
            res.status(200).send(data);
        } 
        catch (err) {
            res.status(501).send(err);
        }
    }

}

export default new BriefInvetoryController(new ParseService);