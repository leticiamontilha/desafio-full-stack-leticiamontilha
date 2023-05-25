import { z } from "zod"

export const registerSchema = z.object({
    name: z.string().min(3).max(10).nonempty("O nome é obrigatório"),
    email: z.string().email("Deve ser um email"),
    password: z.string().nonempty("A senha é obrigatória"),
    phone_number: z.string().min(3).max(11).nonempty("O numero de telefone é obrigatório")

})

export type RegisterData = z.infer<typeof registerSchema>