import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { ScootersService } from './scooters.service';
import { Scooter } from './scooter.entity';

@Controller('Scooters')
export class ScootersController {

    constructor(private service: ScootersService) { }

    @Get()
    all() {
        return this.service.getScooters()
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getScooter(params.id);
    }

    @Post()
    create(@Body() scooter: Scooter) {
        return this.service.createScooter(scooter);
    }

    @Put()
    update(@Body() scooter: Scooter) {
        return this.service.updateScooter(scooter);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteScooter(params.id);
    }
}
