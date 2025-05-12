import { Request, Response, NextFunction } from "express"

export const getTask = async (request:Request , response: Response, next: NextFunction) => {
    response.status(200).send({})
}

export const getTaskById = async (request:Request , response: Response, next: NextFunction) => {
    response.status(200).send({})
}

export const saveTask = async (request:Request , response: Response, next: NextFunction) => {
    response.status(200).send({})
}

export const updateTask = async  (request:Request , response: Response, next: NextFunction) => {
    response.status(200).send({})
}

export const deleteTask = async (request:Request , response: Response, next: NextFunction) => {
    response.status(200).send({})
}

