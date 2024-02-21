import { Controller, Get, Param } from '@nestjs/common';
import { PeliculasService } from '../services/peliculas.service';
import { Pelicula } from '../entities/pelicula.entity';

@Controller('peliculas')
export class PeliculasController {
    constructor(private readonly peliculasService: PeliculasService) {}
    
    @Get()
    findAll(): Promise<Pelicula[]> {
        return this.peliculasService.findAll();
    }
    // Aquí me expongo al exterior a través de ENDPOINTS

    @Get('categoria/:categoriaId')
  findByCategoria(@Param('categoriaId') categoriaId: number,
  ): Promise<Pelicula[]> {
    return this.peliculasService.findByCategoria(categoriaId);
  }

}
