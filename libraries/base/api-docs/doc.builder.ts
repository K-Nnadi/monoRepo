import { DocumentBuilder } from '@nestjs/swagger';

export const SWAGGER_DOCUMENT = new DocumentBuilder()
    .setTitle('Football Logger API')
    .setDescription('The API Docs for Football Logger')
    .setVersion("0.0.1")
    .build();