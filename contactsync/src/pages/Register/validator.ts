import { z } from "zod"


export const registerSchema = z.object({
    name: z.string().min(3, "O texto deve ter pelo menos 3 caracteres").max(10, "O texto só pode conter até caracteres" ).nonempty("O nome é obrigatório"),
    email: z.string().email("Deve ser um email"),
    password: z.string().nonempty("A senha é obrigatória"),
    phone_number: z.string().min(3).max(11).nonempty("O numero de telefone é obrigatório")

})

export type RegisterData = z.infer<typeof registerSchema>