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
    create(@Body() Reparation: Reparation) {
        return this.service.createReparation(Reparation);
    }

    @Put()
    update(@Body() Reparation: Reparation) {
        return this.service.updateReparation(Reparation);
    }

    @Delete(':id')
    deleteReparation(@Param() params) {
        return this.service.deleteReparation(params.id);
    }
}
