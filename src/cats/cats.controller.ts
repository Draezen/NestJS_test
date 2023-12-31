import { Controller, Get, Post, Req, HttpCode, Header, Param } from '@nestjs/common'
import { Request } from 'express'

@Controller('cats')
export class CatsController {
    @Post()
    @HttpCode(204)
    @Header('Cache-control', 'none')
    create():string {
        return 'This action adds a new cat'
    }

    @Get()
    findAll(): string {
        return 'This action returns all cats'
    }

    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params.id)
        return `This action returns a #${params.id} cats`
    }
}