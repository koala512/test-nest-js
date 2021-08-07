import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { ScootersService } from './Scooters.service';
import { Scooter } from './Scooter.entity';

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
    create(@Body() Scooter: Scooter) {
        return this.service.createScooter(Scooter);
    }

    @Put()
    update(@Body() Scooter: Scooter) {
        return this.service.updateScooter(Scooter);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteScooter(params.id);
    }
}
