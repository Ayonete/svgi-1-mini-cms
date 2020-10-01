import { FastifyReply } from 'fastify';


export interface Reply extends FastifyReply{
    view(page: string, data?: object): FastifyReply
}