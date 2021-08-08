import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { ReparationsService } from './reparations.service';
import { Reparation } from './reparation.entity';

@Controller('Reparations')
export class ReparationsController {

    constructor(private service: ReparationsService) { }

    @Get()
    all() {
        return this.service.getReparations()
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getReparation(params.id);
    }

    @Post()
    create(@Body() reparation: Reparation) {
        return this.service.createReparation(reparation);
    }

    @Put()
    update(@Body() reparation: Reparation) {
        return this.service.updateReparation(reparation);
    }

    @Delete(':id')
    deleteReparation(@Param() params) {
        return this.service.deleteReparation(params.id);
    }
}
